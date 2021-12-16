// import fetch from 'isomorphic-unfetch'
// import { ApolloClient } from 'apollo-client'
// import { InMemoryCache } from 'apollo-cache-inmemory'
// import { HttpLink } from 'apollo-link-http'
// import { onError } from 'apollo-link-error'
// import { WebSocketLink } from 'apollo-link-ws'
// import { SubscriptionClient } from 'subscriptions-transport-ws'
// import auth0 from './auth0';

// let accessToken = null

// const requestAccessToken = async () => {
//   if (accessToken) return

//   const res = await fetch(`${process.env.APP_HOST}/api/session`)
//   if (res.ok) {
//     const json = await res.json()
//     accessToken = json.accessToken
//   } else {
//     accessToken = 'public'
//   }
// }

// // remove cached token on 401 from the server
// const resetTokenLink = onError(({ networkError }) => {
//   if (networkError && networkError.name === 'ServerError' && networkError.statusCode === 401) {
//     accessToken = null
//   }
// })

// const createHttpLink = (headers) => {
//   const httpLink = new HttpLink({
//     uri: 'https://native-slug-11.hasura.app/v1/graphql',
//     credentials: 'include',
//     headers, // auth token is fetched on the server side
//     fetch,
//   })
//   return httpLink;
// }

// const createWSLink = () => {
//   return new WebSocketLink(
//     new SubscriptionClient('wss://native-slug-11.hasura.app/v1/graphql', {
//       lazy: true,
//       reconnect: true,
//       connectionParams: async () => {
//         await requestAccessToken() // happens on the client
//         return {
//           headers: {
//             authorization: accessToken ? `Bearer ${accessToken}` : '',
//           },
//         }
//       },
//     })
//   )
// }

// export default function createApolloClient(initialState, headers) {
//   const ssrMode = typeof window === 'undefined'
//   let link
//   if (ssrMode) {
//     link = createHttpLink(headers) // executed on server
//   } else {
//     link = createWSLink() // executed on client
//   }
//   return new ApolloClient({
//     ssrMode,
//     link,
//     cache: new InMemoryCache().restore(initialState),
//   })
// }
import { ApolloClient,  HttpLink, split } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { setContext } from "@apollo/client/link/context";

import ws from "ws";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";

let accessToken: string | null = null;

const ISSERVER = typeof window === "undefined";

const getHeaders = () => {
	const headers: Record<string, string> = {};
	let token: string | null = "";
	if (!ISSERVER) {
		token = localStorage.getItem("token");
	}
	if (token) {
		headers.Authorization = `Bearer ${token}`;
	}
	return headers;
};

const httpLink = new HttpLink({
	uri: "https://native-slug-11.hasura.app/v1/graphql",
});

const wsLink = process.browser
	? new WebSocketLink({
			uri: "wss://native-slug-11.hasura.app/v1/graphql",
			options: {
				reconnect: true,
				timeout: 30000,
			},
	  })
	: null;

const splitLink = process.browser
	? split(
			({ query }) => {
				const definition = getMainDefinition(query);
				return (
					definition.kind === "OperationDefinition" &&
					definition.operation === "subscription"
				);
			},
			wsLink,
			httpLink
	  )
	: httpLink;

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem("token");
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : "",
			"x-hasura-admin-secret": "mohammedayman"
		},
	};
});

export const client = new ApolloClient({
	link: authLink.concat(splitLink),
	cache: new InMemoryCache() as any,
});

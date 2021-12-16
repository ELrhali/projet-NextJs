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

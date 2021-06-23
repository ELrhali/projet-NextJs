import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Sidebar from "../components/layouts/sidebar";
import Header from "../components/layouts/Header";
import type { AppProps } from 'next/app';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  split
} from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from "apollo-link-ws";
import { client } from "lib/ApolloClient";


// const httpLink = new HttpLink({
//   uri: 'http://native-slug-11.hasura.app/v1/graphql'
// });

// const wsLink = new WebSocketLink({
//   uri: 'wss://native-slug-11.hasura.app/v1/graphql',
//   options: {
//     reconnect: true
//   }
// });


// const splitLink = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === 'OperationDefinition' &&
//       definition.operation === 'subscription'
//     );
//   },
//   wsLink,
//   httpLink,
 
// );

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: splitLink,
//   headers: {
//     "x-hasura-admin-secret": "mohammedayman",
// },
// });
// const client = new ApolloClient({
//   uri: 'https://native-slug-11.hasura.app/v1/graphql',
//   cache: new InMemoryCache(),
//   headers: {
//     "x-hasura-admin-secret": "mohammedayman"
// }
// });
function MyApp({ Component, pageProps }) {
  return (
    <div  className="  h-screen " >
      <div  className=" flex  w-screen h-screen">
        <Sidebar />
        <div className="w-screen overflow-y-scroll ">
          <Header />
          <div className="p-8 bg-gray-100 h-auto">
          <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
          </div>
       
        </div>
      </div>
     
    </div>
  );
}

export default MyApp;

//import {



//   HttpLink,

// } from '@apollo/client';

// import {
//   ApolloClient,
//   ApolloProvider,
//   InMemoryCache,
//   split
// } from '@apollo/client';

// import { createHttpLink } from 'apollo-link-http';
// import { getMainDefinition } from '@apollo/client/utilities';
// import { WebSocketLink } from "apollo-link-ws";

// const httpLink = new HttpLink({
//   uri: 'http://native-slug-11.hasura.app/v1/graphql'
// });

// const wsLink = new WebSocketLink({
//   uri: 'wss://native-slug-11.hasura.app/v1/graphql',
//   options: {
//     reconnect: true
//   }
// });


// const splitLink = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === 'OperationDefinition' &&
//       definition.operation === 'subscription'
//     );
//   },
//   wsLink,
//   httpLink,
// );

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: splitLink
// });
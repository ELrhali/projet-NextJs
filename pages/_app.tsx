import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Sidebar from "../components/layouts/sidebar";
import Header from "../components/layouts/Header";

import { ApolloProvider } from "@apollo/client";

import { client } from "lib/apolloClient";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <div className="  h-screen ">
        <div className=" flex  w-screen h-screen">
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
    </ApolloProvider>
  );
}

export default MyApp;

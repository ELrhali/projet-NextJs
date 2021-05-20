import Head from "next/head";
import { useEffect } from "react";
import {App}  from "../components/pages/App/Appss";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>index2</title>
      </Head>
   <App />
    </>
  );
}
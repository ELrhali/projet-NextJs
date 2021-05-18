import { useEffect } from "react";
import Head from "next/head";
import Customer from "../components/pages/Customers/Customers";


export default function CustomePage() {
  return (
    <>
      <Head>
        <title>Customer</title>
      </Head>
      <Customer />
    </>
  );
}
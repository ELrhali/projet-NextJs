import Head from "next/head";
import React from "react";
import CustomerCards from '../components/pages/CustomerCard/CustomeCards';

export default function AccountsPage() {
  return (
    <>
      <Head>
        <title>CustomerCards</title>
      </Head>
      
      <CustomerCards />
    </>
  );
}
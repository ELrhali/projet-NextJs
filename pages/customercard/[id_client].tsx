import Head from "next/head";
import React from "react";
import CustomerCards from '../../components/pages/CustomerCard/CustomeCards';

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
export async function getServerSideProps(context) {
  console.log(context.params);
  return {
    props: {}, // will be passed to the page component as props

  }
}
import { useEffect } from "react";
import Head from "next/head";

import Accounts from "../components/pages/Accounts/Accounts";

export default function AccountsPage() {
  return (
    <>
      <Head>
        <title>Accounts</title>
      </Head>
      <Accounts />
    </>
  );
}

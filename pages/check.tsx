import { useEffect } from "react";
import Head from "next/head";

import Checkindex from "../components/pages/CheckState/Checkindex";

export default function AccountsPage() {
  return (
    <>
      <Head>
        <title>Accounts</title>
      </Head>
      <Checkindex />
    </>
  );
}

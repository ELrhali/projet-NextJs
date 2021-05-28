import Head from "next/head";
import Home from "../components/pages/Home";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Home />
    </>
  );
}

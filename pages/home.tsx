import Head from "next/head";
import Home from "../components/pages/Home/Home";
import Home21 from "../components/pages/Home/Home21";

export default function VehiculePage() {
    return (
      <>
        <Head>
          <title>Home Majorel</title>
        </Head>
        <div className=" pl-12 h-screen	">
      
         <Home21 />
          </div>
      </>
    );
  }
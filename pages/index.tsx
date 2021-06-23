import Head from "next/head";
import Apptest from "../components/pages/test/Apptest";

export default function VehiculePage() {
    return (
      <>
        <Head>
          <title>Schedule</title>
        </Head>
        <div className="bg-gray-100 h-full	">
         <Apptest />
          </div>
      </>
    );
  }
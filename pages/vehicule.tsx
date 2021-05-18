import { useEffect } from "react";
import Head from "next/head";
import Vehicule from "components/pages/Vehicule/Vehicules";

export default function VehiculePage() {
    return (
      <>
        <Head>
          <title>Accaounts</title>
        </Head>
        <div className="bg-gray-100	"><Vehicule /></div>
        

      </>
    );
  }
import Head from "next/head";
import Agendaa from "../components/pages/Agendaa/Agendaa";

export default function VehiculePage() {
    return (
      <>
        <Head>
          <title>Schedule</title>
        </Head>
        <div className="bg-gray-100	h-screen">
          <Agendaa />
          </div>
      </>
    );
  }
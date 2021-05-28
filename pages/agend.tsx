import Head from "next/head";
import Agendee from "../components/pages/Agendaa/Agendee";

export default function VehiculePage() {
    return (
      <>
        <Head>
          <title>Schedule</title>
        </Head>
        <div className="bg-gray-100	">
          <Agendee />
          </div>
      </>
    );
  }
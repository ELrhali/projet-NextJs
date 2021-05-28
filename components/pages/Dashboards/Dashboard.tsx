import React from "react";
import DriveReport from "./DriveReport";
import PassengersReport from "./PassengersReport";
import Statistics from "./Statistics";

const Accounts: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="bg-gray-100 h-full">
      <div className="mb-10 text-4xl text-gray-600">
      Overview
      </div>
      <div >
      <Statistics  />
    </div>
    <div className="md:flex space-x-6 md:mt-10">
      <div className=" md:inline-block p-5 md:w-3/6">
        <PassengersReport />
      </div>
      <div className=" md:inline-block p-5 md:w-3/6">
        <DriveReport />
      </div>
    </div>
   
    </div>
  );
};

export default Accounts;

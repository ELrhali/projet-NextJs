import React from "react";
import Customerpassenger from "./Customerpassenger";
import GeneralInfos from "./GeneralInfos";
import PassengerTable from "./PassengerTable";




const Customer: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="h-full" >
      <div ><p className="text-3xl font-bold  text-gray-600">Customer Card</p></div>
      <div className="mt-10">
      <GeneralInfos />
      </div>
      <div className="mt-10 ">

      <Customerpassenger />
      
    </div>
   
<div className="mt-10 ">
<PassengerTable /></div>
    </div>
  );
};

export default Customer;
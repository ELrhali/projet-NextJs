import React from "react";
import GeneralInfos from "./GeneralInfos";
import Passanger from "./Passanger";



const Customer: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div  >
      <div ><p className="text-3xl font-bold  text-gray-600">Customer Card</p></div>
      <div className="mt-10">
      <GeneralInfos />
      </div>
      <div className="pt-10 ">
      <Passanger />
    </div>
    </div>
  );
};

export default Customer;
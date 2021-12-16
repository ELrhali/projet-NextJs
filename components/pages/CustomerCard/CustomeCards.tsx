import React from "react";
import Customerpassenger from "./Customerpassenger";
import GeneralInfos from "./GeneralInfos";
import Gridpath from "./Gridpath";
import MapsPath from "./MapsPath";


import Pathstable from "./Pathstable";




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
   <div className=" mt-10 md:flex space-x-4 w-full ">
<div className="md:flex-1  md:w-9/12">
<Pathstable /></div>
<div className="md:flex-1 md:w-3/12 ">
<Gridpath />

</div >
</div>
<div className="mt-10">
<MapsPath />
</div>
    </div>
  );
};

export default Customer;
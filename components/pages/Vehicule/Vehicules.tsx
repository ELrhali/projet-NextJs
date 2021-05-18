import React from 'react';

import AddVehicule from './AddVehicule';
import VehiculeHeader from './VehiculeHeader';
import VehiculeCard from "./VehiculeCard"
const Vehicule: React.FC = () => {

  const [open, setOpen] = React.useState(false);

  return (
   <div>
      <div>
      <VehiculeHeader open={open} setOpen={setOpen} />
      <VehiculeCard />
       <AddVehicule open={open} setOpen={setOpen}></AddVehicule>
    </div>
    </div>
  );
};
export default Vehicule;

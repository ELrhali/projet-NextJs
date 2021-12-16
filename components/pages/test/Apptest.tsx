import React from "react";
import { Button, Icon } from "@material-ui/core";
import TestHeader from "./TestHeader";
import Afficher from "./Afficher";
import Ajouter from "./Ajouter";




const Customer: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div  >
      <div >
      <TestHeader open={open} setOpen={setOpen} />
      <Afficher/>
       <Ajouter open={open} setOpen={setOpen}></Ajouter>
    </div>
    </div>
  );
};

export default Customer;
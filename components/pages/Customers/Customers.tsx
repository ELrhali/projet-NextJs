import React from "react";
import { Button, Icon } from "@material-ui/core";

import CustomerHeader from "./CustomerHeader";
import AddCustomers from "./AddCustomers";
import CustomerTable from "./CustomerTable";


const Customer: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div  >
      <div >
      <CustomerHeader open={open} setOpen={setOpen} />
      <CustomerTable/>
       <AddCustomers open={open} setOpen={setOpen}></AddCustomers>
    </div>
    </div>
  );
};

export default Customer;
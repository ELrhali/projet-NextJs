import React from "react";
import { Button, Icon } from "@material-ui/core";
import AccountsTable from "./AccountsTable";
import AddAccount from "./AddAccount";
import AccountsHeader from "./AccountsHeader";

const Accounts: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <AccountsHeader open={open} setOpen={setOpen} />
      <AccountsTable />
      <AddAccount open={open} setOpen={setOpen}></AddAccount>
    </div>
  );
};

export default Accounts;

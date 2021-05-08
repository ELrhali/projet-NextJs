import { Button } from "@material-ui/core";
import React from "react";

interface AccountsHeaderProps {
  open: boolean;
  setOpen: Function;
}

const AccountsHeader: React.FC<AccountsHeaderProps> = ({ open, setOpen }) => {
  function openDialog() {
    setOpen(true);
  }
  return (
    <div className="p-5 bg-gray-50 shadow-lg border-gray-600 flex flex-row justify-between content-center items-center">
      <div></div>
      <Button
        onClick={openDialog}
        variant="contained"
        color="primary"
        className="p-2"
      >
        Add Account
      </Button>
    </div>
  );
};

export default AccountsHeader;

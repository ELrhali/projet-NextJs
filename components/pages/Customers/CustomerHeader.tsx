import { Button } from "@material-ui/core";
import React from "react";

interface CustomersHeaderProps {
  open: boolean;
  setOpen: Function;
}              

const CustomersHeader: React.FC<CustomersHeaderProps> = ({ open, setOpen }) => {
  function openDialog() {
    setOpen(true);
  }
  return (
    <div className="mx-8 flex flex-row-reverse content-center items-center">
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

export default CustomersHeader;

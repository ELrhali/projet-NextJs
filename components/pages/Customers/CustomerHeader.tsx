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
    <div className="p-5   flex flex-row-reverse content-center items-center">     <br/>
      <Button
        onClick={openDialog}
        variant="contained"
        color="primary"
        className="p-2"
      >
        Add Customer
      </Button>
    </div>
    
  );
};

export default CustomersHeader;

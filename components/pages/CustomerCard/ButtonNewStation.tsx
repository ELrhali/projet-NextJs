import { Button } from "@material-ui/core";
import React from "react";

interface CustomersHeaderProps {
  open: boolean;
  setOpen: Function;
}              

const ButtonNewStation: React.FC<CustomersHeaderProps> = ({ open, setOpen }) => {
  function openDialog() {
    setOpen(true);
  }
  return (
 
     
      <Button
        onClick={openDialog}
        variant="contained"
        color="primary"
        className="p-2"
      >
        Add Station
      </Button>
  );  
};

export default ButtonNewStation;

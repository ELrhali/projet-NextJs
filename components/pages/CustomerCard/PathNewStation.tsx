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
 
     <div>
      <Button
        onClick={openDialog}
        variant="contained"
        color="primary"
       
        className="p-2 text-sm"

      >
        <p className="text-xs">Add Station</p>
      </Button>
      </div>
  );  
};

export default ButtonNewStation;

import { Button } from "@material-ui/core";
import React from "react";

interface CustomersHeaderProps {
  open: boolean;
  setOpen: Function;
}              

const VehiculeHeader: React.FC<CustomersHeaderProps> = ({ open, setOpen }) => {
  function openDialog() {
    setOpen(true);
  }
  return (
    <div className="p-5 bg-gray-50 shadow-lg border-gray-600 flex flex-row-reverse content-center items-center">
      <div></div>
      <Button
        onClick={openDialog}
        variant="contained"
        color="primary"
        className="p-2"
      >
        Add Vehicule
      </Button>
    </div>
  );
};

export default VehiculeHeader;

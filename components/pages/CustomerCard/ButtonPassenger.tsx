import { Button } from "@material-ui/core";
import React from "react";
import { start } from "repl";

interface CustomersHeaderProps {
  open: boolean;
  setOpen: Function;
}              

const ButtonPassenger: React.FC<CustomersHeaderProps> = ({ open, setOpen }) => {
  function openDialog() {
    setOpen(true);
  }
  return (
      
    <div className="mx-8 flex flex-row justify-between content-center items-center  ">
      <div >
      <p className="text-gray-700 text-xl ">Passengers</p>
     </div>
      <div >
      <Button
        onClick={openDialog}
        variant="contained"
        color="primary"
        className="p-2"
      >
        New Passenger
      </Button>
      </div>
     
    </div>
  );
};

export default ButtonPassenger;
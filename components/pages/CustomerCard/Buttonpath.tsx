import { Button } from "@material-ui/core";
import React from "react";

interface PathHeaderProps {
  open: boolean;
  setOpen: Function;
}

const Buttonpaths: React.FC<PathHeaderProps> = ({ open, setOpen }) => {
  function openDialog() {
    setOpen(true);
  }
  return (
 
    <div className="mx-8 flex flex-row justify-between content-center items-center  ">
      <div >
      <p className="text-gray-700 text-xl ">Paths</p>
     </div>
      <div >
      <Button
        onClick={openDialog}
        variant="contained"
        color="primary"
        className="p-2"
      >
        New Path
      </Button>
      </div>
     
    </div>
  );
};

export default Buttonpaths;

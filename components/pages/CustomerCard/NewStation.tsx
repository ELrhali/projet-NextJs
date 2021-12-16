import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {  LinearProgress } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import MapsPath from "./MapsPath";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,  
    },
    textfield: {
      width:'45ch',
      marginLeft:theme.spacing(3),
      marginRight:theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);
interface AddCustomerProps{
    open : boolean ;
    setOpen :Function ;

}
const AddStation: React.FC<AddCustomerProps> = ({open , setOpen}) => {
  const [Name ,setName]=useState("");
  const [Time,setTime]=useState("");

  const [Passenger,setPassenger]=useState("");
  const [Adresse,setAdresse]=useState("");

  const [loading, setLoading] = useState(false);

  const classes = useStyles();
  //fermer table 
  function handleClose() {
    setOpen(false);
  }
  async function addcustomer(){
    setLoading(true);
    console.log();
    setLoading(false);
    setOpen(false);
  }
  return(
    <Dialog 
     open={open}
     onClose={handleClose}
     fullWidth
    maxWidth="md"
    aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Station</DialogTitle>
      <DialogContent >
        <div>
      <form className={classes.root} noValidate autoComplete="off">
      <TextField
         className={classes.textfield}
          autoFocus
          margin="dense"
          id="Name"
          multiline
          label="Name"
          onChange={({ target }) => setName(target.value)} 
          type="text"
        >
          </TextField>
      
        <TextField
         className={classes.textfield}
          autoFocus
          margin="dense"
          id="Time"
          multiline
          label="Time"
          onChange={({ target }) => setTime(target.value)}
          type="text"
        
        />
        <TextField
        fullWidth
          select
          autoFocus
          margin="dense"
          id="Passenger"
          multiline
          label="Passengers"
          onChange={({ target }) => setPassenger(target.value)}
          type="text"
        />
         <TextField
        fullWidth
          autoFocus
          margin="dense"
          id="Addressstation"
          multiline
          label="Address"
          onChange={({ target }) => setAdresse(target.value)}
          type="text"
        />
        
        </form></div>
        <div className="mt-10">
       <MapsPath />
        </div>
        
      </DialogContent>
      

      <DialogActions>
        <Button disabled={loading}    variant="contained" onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button
          disabled={loading}
          onClick={addcustomer}
          variant="contained"
          color="primary"
        >
          Confirm
        </Button>
      </DialogActions>
      {loading && <LinearProgress />}
    </Dialog>
  );
};


export default AddStation;
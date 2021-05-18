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
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';

const currencies = [
  {
    value: 'AA',
    label: 'aa',
  },
  {
    value: 'BB',
    label: 'bb',
  },
  {
    value: 'CC',
    label: 'cc',
  },
  {
    value: 'DD',
    label: 'ee',
  },
];
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(3),
        width: '40ch',
      },
      flexGrow: 1,  
      
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
const AddVehicule: React.FC<AddCustomerProps> = ({open , setOpen}) => {
  const [NumbreVehicule ,setNumbreVehicule]=useState("");
  const [MatriculeVehicule,setMatriculeVehicule]=useState("");

  const [MarqueVehicule,setMarqueVehicule]=useState("");
  const [AssuranceVehicule,setAssuranceVehicule]=useState("");

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
        <DialogTitle id="form-dialog-title">New Vehicule</DialogTitle>
      <DialogContent >
        <div>
      <form className={classes.root} noValidate autoComplete="off">
      <TextField
          select
          autoFocus
          margin="dense"
          id="TypeCustomer"
          multiline
          label="Type Customer"
          onChange={({ target }) => setNumbreVehicule(target.value)}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </TextField>
      
        <TextField
          autoFocus
          margin="dense"
          id="NameCustomer"
          multiline
          label="Name Customer "
          onChange={({ target }) => setMatriculeVehicule(target.value)}
          type="text"
        
        />
        <TextField
          autoFocus
          margin="dense"
          id="AddressCustomer"
          multiline
          label="Address Customer"
          onChange={({ target }) => setMarqueVehicule(target.value)}
          type="text"
          
          
        />
       
        <TextField
          autoFocus
          fullWidth
          margin="dense"
          multiline
          id="PhoneCustomer"
          label="Phone Customer"
          //variant="filled" background
          onChange={({ target }) => setAssuranceVehicule(target.value)}
          type="text"
        />
     
        
        
        </form></div>
        <div >
        <input type="text " 
        placeholder="Add note"
         style={{ height: 200, width: '100%' ,background:'#EFEFEF'}}
        /></div>
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
          Add Vehicule
        </Button>
      </DialogActions>
      {loading && <LinearProgress />}
    </Dialog>
  );
};


export default AddVehicule;
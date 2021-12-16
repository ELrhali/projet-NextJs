import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import {  LinearProgress } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: '40ch',
      },
      flexGrow: 1,  
      
    },
    address: {
        width: '90ch',
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

};
const NewPassenger: React.FC<AddCustomerProps> = ({open , setOpen}) => {
  const [FirstNamePassenger ,setFirstNamePassenger]=useState("");
  const [LastNamePassenger,setLastNamePassenger]=useState("");

  const [RfidId,setRfidId]=useState("");
  const  [PhonePassenger,setPhonePassenger]=useState("");
  const  [AdressePassenger,setAdressePassenger]=useState("");
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
        <DialogTitle id="form-dialog-title">New Passanger</DialogTitle>
      <DialogContent >
        <div>
      <form className={classes.root} noValidate autoComplete="off">
      <TextField
          
          autoFocus
          margin="dense"
          id="FirstNamePassenger"
          multiline
          label="First Name"
          onChange={({ target }) => setFirstNamePassenger(target.value)} 
        //   helperText="Please select your currency"
        >
          {/* {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))} */}
          </TextField>
      
        <TextField
          autoFocus
          margin="dense"
          id="NamePassenger"
          multiline
          label="Last Name "
          onChange={({ target }) => setLastNamePassenger(target.value)}
          type="text"
        
        />
        <TextField
          autoFocus
          margin="dense"
          id="RfidId"
          multiline
          label="RFID ID"
          onChange={({ target }) => setRfidId(target.value)}
          type="text"

        />
       
        <TextField
          autoFocus
          fullWidth
          margin="dense"
          multiline
          id="PhonePassenger"
          label="Phone"
          //variant="filled" background
          onChange={({ target }) => setPhonePassenger(target.value)}
          type="text"
        />
        </form></div>
        <div className={classes.address}> 
        <TextField
        //   autoFocus
          fullWidth
          margin="dense"
          id="AdressePassenger"
          label="Address"
          onChange={({ target }) => setAdressePassenger(target.value)}
          type="text"
        />
        </div>
        {/* <div >
        <textarea cols={4}
        rows={20}
        placeholder="Add note"
         style={{  width: '100%' ,background:'#EFEFEF'}}
        /></div> */}
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
export default NewPassenger;
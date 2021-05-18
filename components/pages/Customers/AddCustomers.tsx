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
const AddCustomers: React.FC<AddCustomerProps> = ({open , setOpen}) => {
  const [typeCustomer ,setTypeCustomer]=useState("");
  const [NameCustomer,setNameCustomer]=useState("");

  const [AddressCustomer,setAddressCustomer]=useState("");
  const [CityCustomer,setCityCustomer]=useState("");
  const [PhoneCustomer,setPhoneCustomer]=useState("");
  const [EmailCustomer,setEmailCustomer]=useState("");
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
        <DialogTitle id="form-dialog-title">Add Accountss</DialogTitle>
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
          onChange={({ target }) => setTypeCustomer(target.value)}
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
          onChange={({ target }) => setNameCustomer(target.value)}
          type="text"
        
        />
        <TextField
          autoFocus
          margin="dense"
          id="AddressCustomer"
          multiline
          label="Address Customer"
          onChange={({ target }) => setAddressCustomer(target.value)}
          type="text"
          
          
        />
        <TextField
          autoFocus
          margin="dense"
          id="CityCustomer"
          label="City Customer"
          onChange={({ target }) => setCityCustomer(target.value)}
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
          onChange={({ target }) => setPhoneCustomer(target.value)}
          type="text"
        />
          <TextField
          autoFocus
          fullWidth
          margin="dense"
          id="EmailCustomer"
          label="Email Customer"
          onChange={({ target }) => setEmailCustomer(target.value)}
          type="email"
        />
        
        
        </form></div>
        <div >
        <input type="text " 
        placeholder="Add note"
         style={{ height: 200, width: '100%' ,background:'#EFEFEF'}}
        /></div>
      </DialogContent>
      

      <DialogActions>
        <Button disabled={loading}  variant="contained" color="secondary" onClick={handleClose} >
          Cancel
        </Button>
        <Button
          disabled={loading}
          onClick={addcustomer}
          variant="contained"
          color="primary"
        >
          Add Customer
        </Button>
      </DialogActions>
      {loading && <LinearProgress />}
    </Dialog>
  );
};


export default AddCustomers;
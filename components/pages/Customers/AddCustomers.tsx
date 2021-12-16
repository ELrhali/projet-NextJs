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
import { gql, useMutation } from '@apollo/client';
interface RocketInventory  {
  id: number;
  email: String, 
  nom_client: String,
   note_client:String, 
   tel_client: String, 
   type_client: String, 
   ville_client: String, 
   address_client: String,
   image_client: String,
   zip : number;
} 
interface RocketInventoryData {
  client: RocketInventory [];
}
const USER_MUTATION = gql`
mutation addClient( $email: String, 
$nom_client: String,
 $note_client:String, 
 $tel_client: String, 
 $type_client: String, 
 $ville_client: String, 
 $address_client: String,
 $image_client: String,
 $zip :String) {
  insert_client
  (objects: {
    email: $email, 
    nom_client: $nom_client,
     note_client: $note_client, 
     tel_client: $tel_client, 
     type_client: $type_client, 
     ville_client:$ville_client, 
     image_client:$image_client,
     address_client: $address_client,
     zip: $zip}) {
    affected_rows
  }
}

`;

const currencies = [
  {
    value: 'Individue ',
    label: 'individue ',
  },
  {
    value: 'Société',
    label: 'société',
  },
  
];
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
     
      flexGrow: 1,  
      
    },
    textfiled1: {
      margin: theme.spacing(3),
      width: '40ch',
    },
    textfiled : {
      width: '20ch',
      margin: theme.spacing(3),
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
  const [client, { error, data }] = useMutation<RocketInventory>(USER_MUTATION)
  const [typeCustomer ,setTypeCustomer]=useState("");
  const [NameCustomer,setNameCustomer]=useState("");

const [ZipCustomer,setZipCustomer]=useState("");
  const [AddressCustomer,setAddressCustomer]=useState("");
  const [CityCustomer,setCityCustomer]=useState("");
  const [PhoneCustomer,setPhoneCustomer]=useState("");
  const [EmailCustomer,setEmailCustomer]=useState("");
  const [ImageCustomer,setImageCustomer]=useState("");
  const [AddNote,setAddNote]=useState("");
  const [loading, setLoading] = useState(false);

  const classes = useStyles();
  //fermer table 
  function handleClose() {
    setOpen(false);
  }

  const addcustomer =() =>{
  
    client({
      variables: {
        type_client: typeCustomer ,
        nom_client: NameCustomer,
        note_client: AddNote ,
        zip: ZipCustomer,
        tel_client: PhoneCustomer,
        address_client : AddressCustomer ,
        ville_client : CityCustomer ,
        email : EmailCustomer ,
        image_client : ImageCustomer,
      }
      
    })
  if( error){
    console.log(error);
  }
  console.log(data);
  setOpen(false);
  setLoading(true);
  setLoading(false);
  }
  ;
  return(
    <Dialog 
     open={open}
     onClose={handleClose}
     fullWidth
        maxWidth="md"
    aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Customer</DialogTitle>
      <DialogContent >
        <div>
      <form className={classes.root} noValidate autoComplete="off">
      <TextField
       className={classes.textfiled1}
          select
          autoFocus
          margin="dense"
          id="TypeCustomer"
          multiline
          label="Type Customer"
          onChange={({ target }) => setTypeCustomer(target.value)}
          helperText=" select  type Customer"
        >
          {currencies.map((option) => (
            
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </TextField>
      
        <TextField
         className={classes.textfiled1}
          autoFocus
          margin="dense"
          id="NameCustomer"
          multiline
          label="Name Customer "
          onChange={({ target }) => setNameCustomer(target.value)}
          type="text"
        
        />
        <TextField
         className={classes.textfiled1}
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
          className={classes.textfiled}
          label="City "
          onChange={({ target }) => setCityCustomer(target.value)}
          type="text"
          
        />
          <TextField
          autoFocus
          className={classes.textfiled}
          margin="dense"
          id="ZipCustomer"
          label="ZIP "
          onChange={({ target }) => setZipCustomer(target.value)}
          type="text"
          
        />
        <TextField
         className={classes.textfiled1}
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
           className={classes.textfiled1}
          autoFocus
          fullWidth
          margin="dense"
          id="EmailCustomer"
          label="Email Customer"
          onChange={({ target }) => setEmailCustomer(target.value)}
          type="email"
          placeholder="exemple@gmail.com"
        />
        <TextField
         className={classes.textfiled1}
          autoFocus
          margin="dense"
          id="ImageCustomer"
          multiline
          label="Link Image"
          onChange={({ target }) => setImageCustomer(target.value)}
          type="text"
        
        />
      
        
        
        </form></div>
        <div >
        <textarea cols={4}
        rows={8}
        id="AddNote"
        onChange={({ target }) => setAddNote(target.value)}
        placeholder="Add note"
         style={{  width: '100%' ,background:'#EFEFEF'}}
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
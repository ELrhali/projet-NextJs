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
import { gql, useMutation } from "@apollo/client";
interface RocketInventory  {
  numero_bus: number, 
  matricule: String,
   marque:String, 
   assurance: String, 
   note: String, 
} 
interface RocketInventoryData {
  client: RocketInventory [];
}
const vehicule_MUTATION = gql`
mutation Addvehicule( $numero_bus: Int, 
$matricule: String,
 $marque:String, 
 $assurance: String, 
 $note: String, 
) {
  insert_bus
  (objects: {
    numero_bus:  $numero_bus, 
    matricule:  $matricule,
     marque:$marque, 
     assurance:  $assurance, 
     note:  $note }) {
    affected_rows
  }
}

`;

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
  const [bus, { error, data }] = useMutation<RocketInventoryData>(vehicule_MUTATION)

  const [NumbreVehicule ,setNumbreVehicule]=useState("");
  const [MatriculeVehicule,setMatriculeVehicule]=useState("");

  const [MarqueVehicule,setMarqueVehicule]=useState("");
  const [AssuranceVehicule,setAssuranceVehicule]=useState("");
  const [AddNote,setAddNote]=useState("");

  const [loading, setLoading] = useState(false);

  const classes = useStyles();
  //fermer table 
  function handleClose() {
    setOpen(false);
  }
  const Addvehicule =() =>{
  
    bus({
      variables: {
        numero_bus: NumbreVehicule ,
        matricule: MatriculeVehicule,
        marque: MarqueVehicule ,
        assurance: AssuranceVehicule,
        note: AddNote,
    
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
        <DialogTitle id="form-dialog-title">New Vehicule</DialogTitle>
      <DialogContent >
        <div>
      <form className={classes.root} noValidate autoComplete="off">
      <TextField
          autoFocus
          margin="dense"
          id="NumbreVehicule"
          multiline
          label="Numbre Vehicule "
          onChange={({ target }) => setNumbreVehicule(target.value)}
          type="text"
        
        />  
      
        <TextField
          autoFocus
          margin="dense"
          id="MatriculeVehicule"
          multiline
          label="Matricule "
          onChange={({ target }) => setMatriculeVehicule(target.value)}
          type="text"
        
        />
        <TextField
          autoFocus
          margin="dense"
          id="MarqueVehicule"
          multiline
          label="Marque"
          onChange={({ target }) => setMarqueVehicule(target.value)}
          type="text"
          
          
        />
       
        <TextField
          autoFocus
          fullWidth
          margin="dense"
          multiline
          id="AssuranceVehicule"
          label="Assurance"
          //variant="filled" background
          onChange={({ target }) => setAssuranceVehicule(target.value)}
          type="text"
        />
     
        
        
        </form></div>
        <div >
        <textarea cols={4}
        rows={10}
        placeholder="Add note"
        onChange={({ target }) => setAddNote(target.value)}
         style={{  width: '100%' ,background:'#EFEFEF'}}
        /></div>
      </DialogContent>
      

      <DialogActions>
        <Button disabled={loading}    variant="contained" onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button
          disabled={loading}
          onClick={Addvehicule}
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
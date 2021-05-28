import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import {  LinearProgress } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
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
      marginLeft: 20, 
      
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
const Newpath: React.FC<AddCustomerProps> = ({open , setOpen}) => {
  const [Name ,setName]=useState("");
  const [Type,setType]=useState("");

  const [From,setFrom]=useState("");
  const [To,setTo]=useState("");
  const [StartAt,setStartAt]=useState("");
  const [EndAt,setEndAt]=useState("");

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
        <DialogTitle id="form-dialog-title text-xl text-gray-600">New Path</DialogTitle>
      <DialogContent >
        <div>
      <form className={classes.root} noValidate autoComplete="off">
      <TextField
          autoFocus
          margin="dense"
          id="Name"
          multiline
          label="Name "
          onChange={({ target }) => setName(target.value)}
          type="text"
        
        />
      <TextField
          select
          autoFocus
          margin="dense"
          id="Type"
          multiline
          label="Type"
          onChange={({ target }) => setType(target.value)}
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
          id="From"
          multiline
          label="From"
          onChange={({ target }) => setFrom(target.value)}
          type="text"
          
          
        />
       
       <TextField
          autoFocus
          margin="dense"
          id="To"
          multiline
          label="To"
          onChange={({ target }) => setTo(target.value)}
          type="text"
          
          
        />
         <TextField
          autoFocus
          margin="dense"
          id="StartAt"
          multiline
          label="Start At"
          onChange={({ target }) => setStartAt(target.value)}
          type="text"
          
          
        />
           <TextField
          autoFocus
          margin="dense"
          id="EndAt"
          multiline
          label="End At"
          onChange={({ target }) => setEndAt(target.value)}
          type="text"
          
          
        />
     
        
        
        </form></div>
       
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


export default Newpath;
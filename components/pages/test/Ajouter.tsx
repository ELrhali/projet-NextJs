import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import {  Button, LinearProgress } from "@material-ui/core";


const USER_MUTATION = gql`
  mutation test($phone: Int  , $prenom: String
    ) {
      insert_test( objects: {
      phone: $phone,
    prenom: $prenom })
      {
        returning {
          id
        } 
    }
  }
`;

interface RocketInventory {
  id: number;
  prenom: string;
  phone: number;
 
}

interface NewRocketDetails {
  prenom: string;
  phone: number;
  
}
interface AddCustomerProps{
  open : boolean ;
  setOpen :Function ;

}
const Ajouter: React.FC<AddCustomerProps> = ({open , setOpen}) => {
  const [prenom, setprenom] = useState("");
  const [phone, setphone] = useState("");


  const [test, { error, data }] = useMutation<{test :RocketInventory}>(USER_MUTATION)
  // >(USER_MUTATION, {
  //   variables: { rocket: { prenom, phone: +phone} }
  // });
const addUsers =() =>{
  
  test({
    variables: {
      prenom: prenom ,
      phone: phone
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
const [loading, setLoading] = useState(false);


//fermer table 
function handleClose() {
  setOpen(false);
}
// async function addcustomer(){
//   setLoading(true);
//   console.log();
//   setLoading(false);
//   setOpen(false);
// };
  return (
    <Dialog 
    open={open}
    onClose={handleClose}
    fullWidth
       maxWidth="md"
   aria-labelledby="form-dialog-title">
       <DialogTitle id="form-dialog-title">New </DialogTitle>
     <DialogContent >
       <div>
     <form  noValidate autoComplete="off">
 
     
       <TextField
      
         autoFocus
         margin="dense"
        
         multiline
         label="prenom "
         type=" text"
         onChange={e => setprenom(e.target.value)}
       
       />
    
       <TextField
         autoFocus
         margin="dense"
        
       
         label="Phone "
         type="number"
            
         onChange={e => setphone(e.target.value)}
         
       />
    
 
       
       
        </form></div>
      
     </DialogContent>
     

     <DialogActions>
       <Button disabled={loading}  variant="contained" color="secondary" onClick={handleClose} >
         Cancel
       </Button>
       <Button
         disabled={loading}
         onClick={addUsers}
         variant="contained"
         color="primary"
       >
         Add test
       </Button>
     </DialogActions>
     {loading && <LinearProgress />}
   </Dialog>


  );
};
export default Ajouter ;


  //  {/* <div>
  //       {error ? <p>Oh no! {error.message}</p> : null}
  //       {data && data.test ? <p>Saved!</p> :  null}
  //     <h3>Add a Rocket</h3>
  //    <form>

  //       <p>
  //         <label>prenom    :</label>
  //         <input
  //            type=" text"
  //           onChange={e => setprenom(e.target.value)}
  //         />
  //       </p>
  //       <p>
  //         <label>phone    :</label>
  //         <input
  //           type="number"
            
  //           onChange={e => setphone(e.target.value)}
  //         />
  //       </p>
        
  //       <button className="bg-green-400" onClick={addUsers}>
  //         Add
  //       </button>
  //       </form>
  //   </div> */}
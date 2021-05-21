import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Avatar, Icon, Typography } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TwitterIcon from '@material-ui/icons/Twitter';
import Toolbar from '@material-ui/core/Toolbar';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Edit';
import { TextField } from '@material-ui/core';
import { useState } from 'react';


const AddCustomers: React.FC = () => {
    const [typeCustomer ,setTypeCustomer]=useState("");
    const [NameCustomer,setNameCustomer]=useState("");
  
    const [AddressCustomer,setAddressCustomer]=useState("");
    const [PhoneCustomer,setPhoneCustomer]=useState("");
    const [EmailCustomer,setEmailCustomer]=useState("");
    const [loading, setLoading] = useState(false);
  
  
  
    return(
        <div className="bg-white ">
        
        <Grid container spacing={2} className=" px-10 pb-10">
          <Grid item xs={11} className="relative " >
            <p className="absolute bottom-0 left-0 text-xl  text-gray-800">General Infos</p>
          </Grid>
          <Grid item xs={1} className="relative ">
                 
                 <IconButton className=" absolute bottom-0 right-0">
                   <EditIcon  />
                 </IconButton>
                 

          </Grid>
        <Grid item xs={4}>


<TextField
 fullWidth
  autoFocus
   
    id="NameCustomer"
    multiline
    label="Name  "
    onChange={({ target }) => setNameCustomer(target.value)}
    type="text"
 
/>



</Grid>

<Grid item xs={4}>


<TextField
 fullWidth
  autoFocus
  
    id="TypeCustomer"
    multiline
    label="Type "
    onChange={({ target }) => setTypeCustomer(target.value)}
    type="text"
 
/>



</Grid>

<Grid item xs={4}>


<TextField
 fullWidth
  autoFocus
    id="PhoneCustomer"
    multiline
    label="GSM "
    onChange={({ target }) => setPhoneCustomer(target.value)}
    type="text"
 
/>



</Grid>

<Grid item xs={8}>


<TextField
  fullWidth
  autoFocus
    id="NameCustomer"
   
    label="Address "
    onChange={({ target }) => setAddressCustomer(target.value)}
    type="text"
 
/>



</Grid>

<Grid item xs={4}>


<TextField
fullWidth
  autoFocus
    id="EmailCustomer"
    multiline
    label="Email "
    onChange={({ target }) => setEmailCustomer(target.value)}
    type="email"
 
/>



</Grid>


  </Grid>
  
 
 
           </div>
    );
};


export default AddCustomers;
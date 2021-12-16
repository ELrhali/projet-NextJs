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
import QUERY_Client from '../query/QueryClient';
import { useQuery } from '@apollo/client';

interface RocketInventory  {
  id_client: number;
  email: String, 
  nom_client: String,
   note_client:String, 
   tel_client: String, 
   type_client: String, 
   ville_client: String, 
   address_client : String,
   image_client: String,
   zip : number
} 
interface RocketInventoryData {
  length: number;
  client: RocketInventory [];
}

const AddCustomers: React.FC = () => {
  const { data, loading, error } = useQuery<RocketInventoryData>(QUERY_Client);

    const [typeCustomer ,setTypeCustomer]=useState("");
    const [NameCustomer,setNameCustomer]=useState("");
  
    const [AddressCustomer,setAddressCustomer]=useState("");
    const [PhoneCustomer,setPhoneCustomer]=useState("");
    const [EmailCustomer,setEmailCustomer]=useState("");
 
  
  
  
    return(
        <div className="bg-white ">
            <div className="px-10 flex flex-row justify-between content-center items-center">
          
          <p className=" text-xl  text-gray-700">General Infos</p>
      
        
               
               <IconButton className=" ">
                 <EditIcon  />
               </IconButton>
               

        
        </div>
        <Grid container spacing={2} className=" px-10 pb-10">
      
        <Grid item xs={4}>


<TextField
 fullWidth
  autoFocus
  defaultValue="renault "
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
  defaultValue="socité"
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
    defaultValue="0671253694"
/>



</Grid>

<Grid item xs={8}>


<TextField
  fullWidth
  autoFocus
    id="AddressCustomer"
    defaultValue="tanger med 2135N"
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
    defaultValue="renult@gmail.com"
/>



</Grid>


  </Grid>
  
 
 
           </div>
    );
};


export default AddCustomers;
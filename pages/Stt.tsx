import React from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { Avatar, Icon, Typography } from '@material-ui/core';

import { gql, useQuery } from '@apollo/client';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(3),
     margin: 'auto',
      maxWidth: 520,
    },
    image: {
      width: 120,
      height: 120,
    },
    img: {
      marginLeft: 10,
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
      width: theme.spacing(9),
      height: theme.spacing(9),
    },
    autobus: { 
      fontSize: 28,
    },
    avatar: { 
    //  padingLeft:theme.spacing(6),
    },
    searchInput: {
      fontSize: theme.typography.fontSize,
    },
    busnumber :{
        fontWeight : "bold",
        color :theme.palette.grey[1000] ,

    },

  }),
);


interface RocketInventory  {
  id: number;
  email: String, 
  nom_client: String,
   note_client:String, 
   tel_client: String, 
   type_client: String, 
   ville_client: String, 
   zip : String,
   address_client: String
} 
interface RocketInventoryData {
  client: RocketInventory [];
}
const QUERY = gql`
query AffichierClient {
  client {
    nom_client
    address_client
    email
    tel_client
  }
}
`;

 function index () {
  
    const { data, loading, error } = useQuery<RocketInventoryData>(QUERY);

    if (loading) {
      return <h2>Loading.....</h2>;
    }
  
    if (error) {
      console.error(error);
      return null;
    }
  

console.log(data);
const classes = useStyles();

  return (
    <div  className={classes.root}>
    { data.client.map((row , i) => (
      <Grid item xs={6} key={i}>
          {/* <Paper className={classes.paper}> */}
           
           
             <Grid item lg={3}>
                 <Avatar  src="1.png "  />
             </Grid>
    <Grid item xs>
    <Typography gutterBottom >
    {row.nom_client}
    </Typography>
    <Typography variant="body2" gutterBottom color="textSecondary">
    Address : {row.address_client}
    </Typography>
    <Typography variant="body2"  gutterBottom color="textSecondary">
    Mobile : {row.tel_client}
    </Typography>
  
</Grid>

</Grid>

                  
             
           

)
    )}
    
    </div>
    )};

export default index;





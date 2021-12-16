import React from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { IconButton } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Edit';
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import TablePagination from '@material-ui/core/TablePagination';
import Grid from '@material-ui/core/Grid';
import { Avatar, Icon, Typography } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TwitterIcon from '@material-ui/icons/Twitter';
import ActiveLink from 'components/layouts/ActiveLink';
import { useQuery, gql, useMutation } from '@apollo/client';
import QUERY_Client from '../query/QueryClient';

 
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
const REMOVE_TODO = gql`
mutation removeTodo ($nom_client: String!) {
  delete_client(where: { nom_client: {_eq: $nom_client}}) {
    affected_rows
  }
}
`;

const Customer: React.FC = () => {
  const { data, loading, error } = useQuery<RocketInventoryData>(QUERY_Client);
  const [removeTodo] = useMutation<RocketInventoryData>(REMOVE_TODO);

    const classes = useStyles();
    const [chercher, setChercher] = React.useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(6);
  const handleChangePage = (event, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  function deleteContactPermanenlty({nom_client}){
    removeTodo({
      variables: {
        nom_client,
      },  
    });
      }
  if (loading) {
    return <h2>Loading.....</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }


console.log(data);
    return (
        <div className={classes.root}>
        <Grid container spacing={3}>
        <Grid item xs={6}> 
          <Typography variant="h4" color="textSecondary"  component="h4" >
                Customers
              </Typography>
              </Grid>

          <Grid item xs={6}>
          
        <Toolbar>
          <Grid container spacing={2} alignItems="center" className="bg-white">
            <Grid item>
              <SearchIcon className="text-gray-400" />
            </Grid>
            <Grid item xs>
              <TextField
              //  fullWidth
                placeholder="Search Name..."
                onChange={({ target }) => setChercher(target.value)}
                InputProps={{
                  disableUnderline: true,
                  className: classes.searchInput,
                }}
              />
      
            </Grid>
            </Grid>
            </Toolbar>
      
  </Grid>
  {data.client.filter((row)=>{
                if(chercher == ""){
                  return row
                }else if ( row.nom_client.toString().includes(chercher.toLowerCase())){
                  return row 

                }
              }).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row , i) => (
              <Grid item xs={6} key={i}>
              <div className={classes.root}>
         <Paper className={classes.paper}>
           <Grid container spacing={2}>
           <Grid item lg={3}>
           
                <Avatar  src={row.image_client  } className={classes.img} />
              
            </Grid>
             <Grid item xs={12} sm container>
                 <Grid item xs>
                   <Typography   variant="button" component="h2" gutterBottom className={classes.busnumber}>
                   {row.nom_client}
                   </Typography>
                   <Typography variant="body2" gutterBottom color="textSecondary">
                   Address : {row.address_client}
                   </Typography>
                   <Typography variant="body2"  gutterBottom color="textSecondary">
                   Mobile : {row.tel_client}
                   </Typography>
                 
               </Grid>
               <Grid  >
                <Toolbar  >
                {/* row.id_client */}
                  <ActiveLink activeClassName="" href={"/customercard/"+6}>
                  <IconButton >
                 <  EditIcon  />
                 </IconButton>
            
           </ActiveLink>
           <IconButton onClick={() => deleteContactPermanenlty(row)} >
                  <HighlightOffIcon />
                  </IconButton>
                   </Toolbar>
                   
               </Grid>
             </Grid>
           </Grid>
           
           <Divider />
           <div className="flex justify-center md:h-4 pt-2">
                <IconButton href="https://www.instagram.com/"> <InstagramIcon color="disabled" /> </IconButton>
                  <IconButton href="https://twitter.com/" > <TwitterIcon color="disabled" /></IconButton>
                  <IconButton href="https://www.facebook.com/"><FacebookIcon color="disabled"/></IconButton>
                  <IconButton href="https://www.gmail.com/"><MailOutlineIcon color="disabled"/></IconButton>
          </div>
          </Paper>
          </div>
          </Grid>
            ))}
           
            
         
     
      <div className="bg-gray-100 w-full">
      <TablePagination
       rowsPerPageOptions={[ { label: 'All', value: -1 }]}
       colSpan={3}
    
       //shape="rounded"
       count={20}
       rowsPerPage={rowsPerPage}
       page={page}
       component="div"

       SelectProps={{
         inputProps: { 'aria-label': 'rows per page' },
         native: true,
       }}
       onChangePage={handleChangePage}
       onChangeRowsPerPage={handleChangeRowsPerPage}
  
      />
      </div>
        </Grid>
        </div>
    );
  };
  export default Customer;

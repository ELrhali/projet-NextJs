import React from 'react';
import { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Avatar, Button, Typography } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Edit';
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import TablePagination from '@material-ui/core/TablePagination';
import  {gql, useMutation, useQuery} from '@apollo/client';


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
  numero_bus: number;
  marque: String, 
  assurance: String,
  note:String, 
  image_bus :String,
   
   matricule : number

} 
interface RocketInventoryData {
  length: number;
  bus: RocketInventory [];
}
const QUERY_Vehicule = gql`
query AffichierVehicule {
  bus {
    assurance
    marque
    matricule
    note
    numero_bus
    image_bus 
  }
}
`;
const REMOVE_TODO = gql`
mutation removeTodo ($numero_bus: Int!) {
  delete_bus(where: { numero_bus: {_eq: $numero_bus}}) {
    affected_rows
  }
}
`;

const Vehicule: React.FC = () => {
  const { data, loading, error } = useQuery<RocketInventoryData>(QUERY_Vehicule);
  const [removeTodo] = useMutation<RocketInventoryData>(REMOVE_TODO);
    const classes = useStyles();
    const [chercher, setChercher] = React.useState("");

    const [ postNum, setPostNum] = useState(5); // Default number of posts dislplayed
    function lessClick() {
      setPostNum(prevPostNum => prevPostNum -3)
  };
    function handleClick() {
      setPostNum(prevPostNum => prevPostNum + 3) // 3 is the number of posts you want to load per click
    };
    const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(6);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };


  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  function deleteContactPermanenlty({numero_bus}){
removeTodo({
  variables: {
    numero_bus,
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


    return (
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={6}> 
            <Typography variant="h4" color="textSecondary" component="h4" >
                Vehicules
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
              placeholder="Search numero bus..."
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
  {data.bus.filter((row)=>{
                if(chercher == ""){
                  return row
                }else if ( row.numero_bus.toString().includes(chercher.toLowerCase())){
                  return row 

                }
              }).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row , i)  => (
               <Grid item xs={6} key={i}>
             <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item lg={3}>
           
                <Avatar alt="image bus" src={row.image_bus} className={classes.img} />
              
            </Grid>
            <Grid item xs={12} sm container>
                <Grid item xs>
                  <Typography  gutterBottom className={classes.busnumber}>
                      
                   Bus Number : {row.numero_bus}
                  </Typography>
                  <Typography variant="body2" gutterBottom color="textSecondary">
                   Matricule : {row.matricule}
                  </Typography>
                  <Typography variant="body2"  gutterBottom color="textSecondary">
                  marque :  {row.marque}
                  </Typography>
                  {/* <Typography variant="body2"  gutterBottom color="textSecondary">
                  assurance :  {row.assurance}
                  </Typography> */}
                </Grid>
  
             
              <Grid item >
               <Toolbar >
               {/* <Button
          // disabled={loading}
          onClick={() => deleteContactPermanenlty(row)}
       
        >
          Delete 
        </Button> */}
        <IconButton onClick={() => deleteContactPermanenlty(row)} >
                   <HighlightOffIcon  />
                 </IconButton>
                 
                 <IconButton>
                   <EditIcon />
                 </IconButton>
                 
                  </Toolbar>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
          </Grid>
            ))}      
      </Grid>
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
        </div>
    );
  };
  export default Vehicule;
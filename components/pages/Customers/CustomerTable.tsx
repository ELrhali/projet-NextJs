import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button } from '@material-ui/core';
import { useState } from 'react';
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

function createData(image :string, nombre, adresse, phone : number ) {
  return { image, nombre, adresse, phone  };
}

const rows = [
  createData( "1.png ", 11, 'tanger ...', 22),
  createData( "4.png ", 11, '', 22),
  createData( '4.png' , 35, '', 36),
  createData( '3.png' , 36, '', 52),
  createData( '4.png' , 35, '', 36),
  createData( "1.png ", 11, '', 22),
  createData( '4.png' , 35, '', 36),
  createData( '4.png' , 36, '', 52),
  createData( '3.png' , 36, '', 52),
  createData( '3.png' , 36, '', 52),
];
const Customer: React.FC = () => {
    const classes = useStyles();
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
  
    return (
        <div className={classes.root}>
        <Grid container spacing={3}>
        <Grid item xs={6}> 
          <Typography variant="h4" color="textSecondary" component="h4" >
                Vehicule 
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
                InputProps={{
                  disableUnderline: true,
                  className: classes.searchInput,
                }}
              />
            </Grid>
            </Grid>
            </Toolbar>
      
  </Grid>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <Grid item xs={6} key={row.nombre}>
              <div className={classes.root}>
         <Paper className={classes.paper}>
           <Grid container spacing={2}>
             <Grid item lg={3}>
                 <Avatar alt={row.image} src={row.image} className={classes.img} />
             </Grid>
             <Grid item xs={12} sm container>
                 <Grid item xs>
                   <Typography gutterBottom className={classes.busnumber}>
                   Bus Number : {row.nombre}
                   </Typography>
                   <Typography variant="body2" gutterBottom color="textSecondary">
                   Address : {row.adresse}
                   </Typography>
                   <Typography variant="body2"  gutterBottom color="textSecondary">
                   Mobile : {row.phone}
                   </Typography>
                 
               </Grid>
               <Grid  >
                <Toolbar  >
                 
                  <ActiveLink activeClassName="" href="/customercard">
                  <IconButton>
                 <  EditIcon  />
                 </IconButton>
            
           </ActiveLink>
           <IconButton>
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
       count={rows.length}
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

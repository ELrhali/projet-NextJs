import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Avatar, Typography } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Edit';
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
       // width: 300,
      flexGrow: 1,
      marginTop: theme.spacing(2),
    },
 

  }),
);
const Vehicule: React.FC = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    return (
   
     
        
      <div className={classes.root} >
        <Grid container spacing={10}>
          

       
        <Grid item xs={12} >
            
        <Paper >
          <Grid container spacing={1}>
            <Grid item>
           
                <IconButton ><TrendingUpIcon className="text-green-500 " /></IconButton>
              
            </Grid>
            <Grid item xs={6} sm container>
              <Grid item xs container direction="column" spacing={3}>
                <Grid item xs>
                <Typography variant="body2" >
                      49
                      </Typography>
                      <Typography variant="body2" >
                      Total Trips
                      </Typography>
                </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                
                 <IconButton>
                   <MoreHorizIcon />
                 </IconButton>
                 
              </Grid>
            
          </Grid>
        </Paper>
    
          </Grid>

          <Grid item xs={12} >
            
            <Paper >
              <Grid container spacing={1}>
                <Grid item>
               
                    <IconButton ><TrendingUpIcon className="text-blue-500 " /></IconButton>
                  
                </Grid>
                <Grid item xs={6} sm container>
                  <Grid item xs container direction="column" spacing={3}>
                    <Grid item xs>
                    <Typography variant="body2" color="primary">
                      3
                      </Typography>
                      <Typography variant="body2" >
                      Total Path
                      </Typography>
                     
                    </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={3}>
                    
                     <IconButton>
                       <MoreHorizIcon />
                     </IconButton>
                     
                  </Grid>
                
              </Grid>
            </Paper>
        
              </Grid>
              <Grid item xs={12} >
            
            <Paper >
              <Grid container spacing={1}>
                <Grid item>
               
                    <IconButton ><TrendingUpIcon className="text-red-500 " /></IconButton>
                  
                </Grid>
                <Grid item xs={6} sm container>
                  <Grid item xs container direction="column" spacing={3}>
                    <Grid item xs>
                      <Typography variant="body2" color="secondary" >
                      8
                      </Typography>
                      <Typography variant="body2" >
                      Total Pssengers
                      </Typography>
                     
                    </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={3}>
                    
                     <IconButton>
                       <MoreHorizIcon />
                     </IconButton>
                     
                  </Grid>
                
              </Grid>
            </Paper>
        
              </Grid>

        
        
        </Grid>
        </div>
     
    
    );
  };
  export default Vehicule;
  
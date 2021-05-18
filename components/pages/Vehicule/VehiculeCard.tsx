import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import { Avatar, Typography } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import Toolbar from '@material-ui/core/Toolbar';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Edit';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(3),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
    autobus: { 
      fontSize: 28,
    },
    avatar: { 
    //  padingLeft:theme.spacing(6),
    },

  }),
);
const Vehicule: React.FC = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    return (
   
     
        
      <div className={classes.root}>=
        <Grid container spacing={3}>
       
  
        <Grid item xs={6}>
             <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
           
                <Avatar alt="Bus" src="Bus.png" className={classes.img} />
              
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={3}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Bus number
                  </Typography>
                  <Typography variant="body2" gutterBottom color="textSecondary">
                    Matricule
                  </Typography>
                  <Typography variant="body2"  gutterBottom color="textSecondary">
                    Mobile : 0674865850
                  </Typography>
                </Grid>
  
              </Grid>
              <Grid item>
               <Toolbar>
                 <IconButton>
                   <HighlightOffIcon />
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
          <Grid item xs={6}>
          <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
           
                <Avatar alt="Bus" src="Bus2.jpg" className={classes.img} />
              
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={3}>
                <Grid item xs>
                  <Typography  gutterBottom variant="subtitle1">
                    Bus numberss
                  </Typography>
                  <Typography variant="body2" gutterBottom color="textSecondary">
                    Matricule
                  </Typography>
                  <Typography variant="body2"  gutterBottom color="textSecondary">
                    Mobile : 0674865850
                  </Typography>
                </Grid>
  
              </Grid>
              <Grid item>
               <Toolbar>
                 <IconButton>
                   <HighlightOffIcon />
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
          <Grid item xs={6}>
          <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
           
                <Avatar alt="Bus" src="Bus3.jpg" className={classes.img} />
              
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={3}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Bus number
                  </Typography>
                  <Typography variant="body2" gutterBottom color="textSecondary">
                    Matricule
                  </Typography>
                  <Typography variant="body2"  gutterBottom color="textSecondary">
                    Mobile : 0674865850
                  </Typography>
                </Grid>
  
              </Grid>
              <Grid item>
               <Toolbar>
                 <IconButton>
                   <HighlightOffIcon />
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
          <Grid item xs={6}>
          <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
           
                <Avatar alt="Bus" src="Bus2.jpg" className={classes.img} />
              
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={3}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Bus number
                  </Typography>
                  <Typography variant="body2" gutterBottom color="textSecondary">
                    Matricule
                  </Typography>
                  <Typography variant="body2"  gutterBottom color="textSecondary">
                    Mobile : 0674865850
                  </Typography>
                </Grid>
  
              </Grid>
              <Grid item>
               <Toolbar>
                 <IconButton>
                   <HighlightOffIcon />
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
          <Grid item xs={6}>
          <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
           
                <Avatar alt="Bus" src="Bus3.jpg" className={classes.img} />
              
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={3}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Bus number
                  </Typography>
                  <Typography variant="body2" gutterBottom color="textSecondary">
                    Matricule
                  </Typography>
                  <Typography variant="body2"  gutterBottom color="textSecondary">
                    Mobile : 0674865850
                  </Typography>
                </Grid>
  
              </Grid>
              <Grid item>
               <Toolbar>
                 <IconButton>
                   <HighlightOffIcon />
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
          <Grid item xs={6}>
          <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
           
                <Avatar alt="Bus" src="Bus.png" className={classes.img} />
              
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={3}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    Bus number
                  </Typography>
                  <Typography variant="body2" gutterBottom color="textSecondary">
                    Matricule
                  </Typography>
                  <Typography variant="body2"  gutterBottom color="textSecondary">
                    Mobile : 0674865850
                  </Typography>
                </Grid>
  
              </Grid>
              <Grid item>
               <Toolbar>
                 <IconButton>
                   <HighlightOffIcon />
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
        
        </Grid>
        </div>
     
    
    );
  };
  export default Vehicule;
  
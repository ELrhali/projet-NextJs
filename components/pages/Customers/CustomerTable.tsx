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


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
    //   padding: theme.spacing(3),
      margin: 'auto',
      maxWidth: 600,
      
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
    searchInput:{
        color :'secondary',
    },
    avatar: { 
    //  padingLeft:theme.spacing(6),
    },

  }),
);
const Customer: React.FC = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    return (
      <div className={classes.root}>
        
        <Grid container spacing={3}>
                <Grid item xs={6}>
               dgg
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
                  className:classes.searchInput,
                 
                }}
              />
            </Grid>
            </Grid>
            </Toolbar>

  </Grid>
           

        <Grid item xs={6}>
             <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
                <Avatar alt="Bus" src="SebnMa.png" className={classes.img} />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={3}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    SEBN-MA
                  </Typography>
                  <Typography variant="body2" gutterBottom color="textSecondary">
                    address
                  </Typography>
                  <Typography variant="body2"  gutterBottom color="textSecondary">
                    Mobile : 0627370869
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
          <Divider />

          <div className="flex justify-center">
                <IconButton href="https://www.instagram.com/"> <InstagramIcon /> </IconButton>
                  <IconButton href="https://twitter.com/" > <TwitterIcon /></IconButton>
                  <IconButton href="https://www.facebook.com/"><FacebookIcon/></IconButton>
                  <IconButton href="https://www.gmail.com/"><MailOutlineIcon/></IconButton>
          </div>
                  
        </Paper>
        
      </div>
          </Grid>
          <Grid item xs={6}>
             <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
                <Avatar alt="Bus" src="SebnMa.png" className={classes.img} />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={3}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    SEBN-MA
                  </Typography>
                  <Typography variant="body2" gutterBottom color="textSecondary">
                    address
                  </Typography>
                  <Typography variant="body2"  gutterBottom color="textSecondary">
                    Mobile : 0627370869
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
          <Divider />

          <div className="flex justify-center">
                <IconButton href="https://www.instagram.com/"> <InstagramIcon /> </IconButton>
                  <IconButton href="https://twitter.com/" > <TwitterIcon /></IconButton>
                  <IconButton href="https://www.facebook.com/"><FacebookIcon/></IconButton>
                  <IconButton href="https://www.gmail.com/"><MailOutlineIcon/></IconButton>
          </div>
                  
        </Paper>
        
      </div>
          </Grid>
          <Grid item xs={6}>
             <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
                <Avatar alt="Bus" src="SebnMa.png" className={classes.img} />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={3}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    SEBN-MA
                  </Typography>
                  <Typography variant="body2" gutterBottom color="textSecondary">
                    address
                  </Typography>
                  <Typography variant="body2"  gutterBottom color="textSecondary">
                    Mobile : 0627370869
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
          <Divider />

          <div className="flex justify-center">
                <IconButton href="https://www.instagram.com/"> <InstagramIcon /> </IconButton>
                  <IconButton href="https://twitter.com/" > <TwitterIcon /></IconButton>
                  <IconButton href="https://www.facebook.com/"><FacebookIcon/></IconButton>
                  <IconButton href="https://www.gmail.com/"><MailOutlineIcon/></IconButton>
          </div>
                  
        </Paper>
        
      </div>
          </Grid>
          <Grid item xs={6}>
             <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
                <Avatar alt="Bus" src="SebnMa.png" className={classes.img} />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={3}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    SEBN-MA
                  </Typography>
                  <Typography variant="body2" gutterBottom color="textSecondary">
                    address
                  </Typography>
                  <Typography variant="body2"  gutterBottom color="textSecondary">
                    Mobile : 0627370869
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
          <Divider />

          <div className="flex justify-center">
                <IconButton href="https://www.instagram.com/"> <InstagramIcon /> </IconButton>
                  <IconButton href="https://twitter.com/" > <TwitterIcon /></IconButton>
                  <IconButton href="https://www.facebook.com/"><FacebookIcon/></IconButton>
                  <IconButton href="https://www.gmail.com/"><MailOutlineIcon/></IconButton>
          </div>
                  
        </Paper>
        
      </div>
          </Grid>
          <Grid item xs={6}>
             <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
                <Avatar alt="Bus" src="SebnMa.png" className={classes.img} />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={3}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    SEBN-MA
                  </Typography>
                  <Typography variant="body2" gutterBottom color="textSecondary">
                    address
                  </Typography>
                  <Typography variant="body2"  gutterBottom color="textSecondary">
                    Mobile : 0627370869
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
          <Divider />

          <div className="flex justify-center">
                <IconButton href="https://www.instagram.com/"> <InstagramIcon /> </IconButton>
                  <IconButton href="https://twitter.com/" > <TwitterIcon /></IconButton>
                  <IconButton href="https://www.facebook.com/"><FacebookIcon/></IconButton>
                  <IconButton href="https://www.gmail.com/"><MailOutlineIcon/></IconButton>
          </div>
                  
        </Paper>
        
      </div>
          </Grid>
          <Grid item xs={6}>
             <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
                <Avatar alt="Bus" src="SebnMa.png" className={classes.img} />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={3}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    SEBN-MA
                  </Typography>
                  <Typography variant="body2" gutterBottom color="textSecondary">
                    address
                  </Typography>
                  <Typography variant="body2"  gutterBottom color="textSecondary">
                    Mobile : 0627370869
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
          <Divider />

          <div className="flex justify-center">
                <IconButton href="https://www.instagram.com/"> <InstagramIcon /> </IconButton>
                  <IconButton href="https://twitter.com/" > <TwitterIcon /></IconButton>
                  <IconButton href="https://www.facebook.com/"><FacebookIcon/></IconButton>
                  <IconButton href="https://www.gmail.com/"><MailOutlineIcon/></IconButton>
          </div>
                  
        </Paper>
        
      </div>
          </Grid>
          <Grid item xs={6}>
             <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
                <Avatar alt="Bus" src="SebnMa.png" className={classes.img} />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={3}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    SEBN-MA
                  </Typography>
                  <Typography variant="body2" gutterBottom color="textSecondary">
                    address
                  </Typography>
                  <Typography variant="body2"  gutterBottom color="textSecondary">
                    Mobile : 0627370869
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
          <Divider />

          <div className="flex justify-center">
                <IconButton href="https://www.instagram.com/"> <InstagramIcon /> </IconButton>
                  <IconButton href="https://twitter.com/" > <TwitterIcon /></IconButton>
                  <IconButton href="https://www.facebook.com/"><FacebookIcon/></IconButton>
                  <IconButton href="https://www.gmail.com/"><MailOutlineIcon/></IconButton>
          </div>
                  
        </Paper>
        
      </div>
          </Grid>
          <Grid item xs={6}>
             <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
                <Avatar alt="Bus" src="SebnMa.png" className={classes.img} />
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={3}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    SEBN-MA
                  </Typography>
                  <Typography variant="body2" gutterBottom color="textSecondary">
                    address
                  </Typography>
                  <Typography variant="body2"  gutterBottom color="textSecondary">
                    Mobile : 0627370869
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
          <Divider />

          <div className="flex justify-center">
                <IconButton href="https://www.instagram.com/"> <InstagramIcon /> </IconButton>
                  <IconButton href="https://twitter.com/" > <TwitterIcon /></IconButton>
                  <IconButton href="https://www.facebook.com/"><FacebookIcon/></IconButton>
                  <IconButton href="https://www.gmail.com/"><MailOutlineIcon/></IconButton>
          </div>
                  
        </Paper>
        
      </div>
          </Grid>
        </Grid>
        </div>
     
    
    );
  };
  export default Customer;
  
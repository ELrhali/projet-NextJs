import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import SearchIcon from '@material-ui/icons/Search';
import { TextField } from '@material-ui/core';
import { Badge } from '@material-ui/core';
import { Menu } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import Divider from '@material-ui/core/Divider';

import AccountCircle from '@material-ui/icons/AccountCircle';



    const Header = () => {
     
      const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
      const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
    
      const isMenuOpen = Boolean(anchorEl);
      const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    
      const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
      };
    
      const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
      };
    
      const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
      };
      const menuId = 'primary-search-account-menu';
      const renderMenu = (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          id={menuId}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}    >
            <a href="/">Profileeee</a>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}> <a href="/accounts">My account</a></MenuItem>
         
        </Menu>
        
      );
      const mobileMenuId = 'primary-search-account-menu-mobile';
      // pour les mune ...
      const renderMobileMenu = (
        <Menu
          anchorEl={mobileMoreAnchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          id={mobileMenuId}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMobileMenuOpen}
          onClose={handleMobileMenuClose}
        ><MenuItem>
            <IconButton aria-label="show 11 new notifications" color="inherit">
            <Badge variant="dot" color="error">
                  <NotificationsIcon className="text-gray-400"/>
                  </Badge>
            </IconButton>
            <p>Notifications</p>
          </MenuItem>
      <MenuItem>
            <IconButton aria-label="show 4 new mails" color="inherit">
              
              <Badge variant="dot" color="error">
                  <ForumIcon className="text-gray-400"/>
                  </Badge>
            </IconButton>
            <p>Messages</p>
          </MenuItem>
          
          <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
           <AccountCircle className="text-gray-400"/>
          </IconButton>
            <p>Profile</p>
          </MenuItem>
        </Menu>
      );
  return (
    <React.Fragment>
        
      <AppBar  position="sticky" elevation={0}>
        <Toolbar className="md:w-auto bg-gradient-to-r from-gray-50  via-white to-gray-50 sticky">
        <Grid  container spacing={1}  className="bg-white  items-center sm:w-auto">
          
         
            <Grid item >
              <SearchIcon className="text-gray-400 " />
            </Grid>
            <Grid item xs >
              <TextField
              fullWidth
                placeholder="Search Name..."
                InputProps={{
                  disableUnderline: true,
                 // className: classes.searchInput,
                }}
              />
            </Grid>
            </Grid>
          <Grid container spacing={3} alignItems="center">
           
            <Grid item xs />
            
            <Grid item className=" hidden md:flex">
              <Tooltip title="Alerts • No alerts">
                
                <IconButton color="inherit">
                <Badge variant="dot" color="error">
                  <ForumIcon className="text-gray-400"/>
                  </Badge>
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item className=" hidden md:flex">
              <Tooltip title="Alerts • No alerts">
                <IconButton color="inherit">
                <Badge variant="dot" color="error">
                  <NotificationsIcon className="text-gray-400"/>
                  </Badge>
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item className="hidden md:flex">
              <IconButton 
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit" >
                <Avatar src="my.jpeg" alt="My Avatar" />
              </IconButton>
            </Grid>
            <Grid item className=" flex md:hidden">
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
             <Avatar src="my.jpeg" alt="My Avatar" />
            </IconButton>
            </Grid>
          </Grid>
         
        </Toolbar>
      </AppBar>
 
      {renderMenu}
      {renderMobileMenu}
    </React.Fragment>
  );
};

export default Header;
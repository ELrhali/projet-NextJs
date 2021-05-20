import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import HelpIcon from '@material-ui/icons/Help';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import SearchIcon from '@material-ui/icons/Search';
import { TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Badge } from '@material-ui/core';
import { Menu } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';

const styles = (theme: Theme) =>
createStyles({

});


interface HeaderProps extends WithStyles<typeof styles> {
  onDrawerToggle: () => void;}
function Header(props: HeaderProps) {
  const {  onDrawerToggle } = props;
     
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
  return (
    <React.Fragment>
        
      <AppBar  position="sticky" elevation={0}>
        <Toolbar className="bg-blue-50 sticky">
        <Grid  container spacing={1}  className="bg-white  items-center sm:w-auto">
        <Hidden smUp>
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={onDrawerToggle}
                  //className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item xs />
         
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
          <Grid container spacing={1} alignItems="center">
           
            <Grid item xs />
           
            <Grid item>
              <Tooltip title="Alerts • No alerts">
                <IconButton color="inherit">
                <Badge variant="dot" color="error">
                  <NotificationsIcon className="text-gray-400"/>
                  </Badge>
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
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
          </Grid>
         
        </Toolbar>
      </AppBar>
 
      {renderMenu}
    </React.Fragment>
  );
}

export default Header;
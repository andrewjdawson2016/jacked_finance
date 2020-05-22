
import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

function AppBarMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton color='inherit' onClick={handleClick}>
        <MenuIcon/>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} component={Link} to={"about"}>About</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to={"suggest"}>Suggest</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to={"login"}>Log In</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to={"signup"}>Sign Up</MenuItem>
      </Menu>
    </div>
  );
}

export default AppBarMenu;
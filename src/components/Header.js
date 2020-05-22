import React from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles, Box, Hidden } from '@material-ui/core';
import AppBarMenu from './AppBarMenu'
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  header: {
    flex: 1,
    textDecoration: 'none',
  },
  root: {
    marginBottom: 100,
  }
})

function Header() {
const classes = useStyles()
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography
          component={Link}
          to={"/"}
          color="inherit"
          variant="h5"
          className={classes.header}
        >Jacked Finance</Typography>
        <Hidden smDown>
          <Button component={Link} to={"/about"} color="inherit">About</Button>
          <Button component={Link} to={"/suggest"} color="inherit">Suggest</Button>
          <Box ml={3}>
            <Button component={Link} to={"/login"} variant="contained">Log In</Button>
          </Box>
          <Box ml={3}>
            <Button component={Link} to={"/signup"} variant="contained">Sign Up</Button>
          </Box>
        </Hidden>
        <Hidden mdUp>
          <Box ml={3}>
            <AppBarMenu/>
          </Box>
        </Hidden>

      </Toolbar>
    </AppBar>
  )
}

export default Header;
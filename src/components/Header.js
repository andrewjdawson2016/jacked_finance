import React from 'react';
import { AppBar, Toolbar, Typography, Button, makeStyles, Box, Hidden } from '@material-ui/core';
import AppBarMenu from './AppBarMenu'

const useStyles = makeStyles({
  header: {
    flex: 1,
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
        <Typography variant="h5" className={classes.header}>Jacked Finance</Typography>
        <Hidden smDown>
          <Button color="inherit">About</Button>
          <Button color="inherit">Suggest</Button>
          <Box ml={3}>
            <Button variant="contained">Login</Button>
          </Box>
          <Box ml={3}>
            <Button variant="contained">Sign Up</Button>
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
import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  header: {
    flex: 1,
    textDecoration: "none",
  },
  root: {
    marginBottom: 100,
  },
});

function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography color="inherit" variant="h5" className={classes.header}>
          Jacked Finance
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

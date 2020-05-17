import React from 'react';
import { Card, CardContent, makeStyles, Typography, Button, CardActions } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexFlow: "column",
    alignItems: "stretch",
    height: "300px",
  },

  description: {
    flexGrow: "1",
    overflow: "auto",
    margin: "5px",
  },

  footer: {
    display: "flex",
    justifyContent: "flex-end",
  }
})

function ModelCard(props) {
  const classes = useStyles()

  return (
    <Card>
      <CardContent className={classes.container}>
        <Typography variant="h4">{props.model.name}</Typography>
        <Typography className={classes.description}>{props.model.description}</Typography>
        <CardActions className={classes.footer}>
          <Button variant="contained">Blog</Button>
          <Button variant="contained" color="primary">Model</Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default ModelCard;
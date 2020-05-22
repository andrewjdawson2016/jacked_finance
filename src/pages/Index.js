import React from 'react';
import { Grid } from '@material-ui/core';
import ModelsIndex from '../components/ModelsIndex'

function Index() {
  return (
    <Grid container>
      <Grid item xs={1} md={2}/>
      <Grid item xs={10} md={8}>
        <ModelsIndex />
      </Grid>
      <Grid item xs={1} md={2}/>
  </Grid>
  )
}

export default Index;

import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './Header'
import ModelsIndex from './ModelsIndex'

function App() {
  return (
    <Grid container direction="column">
      <Header />
      <Grid container>
        <Grid item xs={1} md={2}></Grid>
        <Grid item xs={10} md={8}>
          <ModelsIndex />
        </Grid>
        <Grid item xs={1} md={2}></Grid>
      </Grid>
    </Grid>
  );
}

export default App;
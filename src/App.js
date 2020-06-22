import { Grid } from "@material-ui/core";
import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  return (
    <Grid container direction="column">
      <Header />
      <Grid container>
        <Grid item xs={1} md={2} />
        <Grid item xs={10} md={8}>
          <Form />
        </Grid>
        <Grid item xs={1} md={2} />
      </Grid>
    </Grid>
  );
}

export default App;

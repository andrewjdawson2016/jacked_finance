import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './components/Header';
import Login from './pages/Login';
import Index from './pages/Index';
import Signup from './pages/Signup';
import About from './pages/About';
import Suggest from './pages/Suggest';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux';

function App() {
  return (
    <Router>
      <Grid container direction="column">
        <Header />
        <Route exact={true} path="/" component={Index}/>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/suggest" component={Suggest} />
        <Route path="/about" component={About}/>
      </Grid>
    </Router>
  );
}

export default App;
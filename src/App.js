import React, { useState } from 'react';
import theme from './ui/Themes';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
// import GridLayout from './component/Grid/Grid'
import Login from './components/NavBar/Login';
import Vendors from './components/NavBar/Vendors';
import Blog from './components/NavBar/Blog';
import Home from './components/NavBar/Home';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {/* <BrowserRouter> */}
        <Navbar />

        <Switch>
          <Route path='/' component={Home} exact={true} />
          <Route path='/login' component={Login} exact={true} />
          <Route path='/vendors' component={Vendors} exact={true} />
          <Route path='/blog' component={Blog} exact={true} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

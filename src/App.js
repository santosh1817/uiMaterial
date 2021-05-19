import React, { useState } from 'react';
import theme from './ui/Themes';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
// import GridLayout from './component/Grid/Grid'
import Login from './components/NavBar/Login';
import Vendors from './components/NavBar/Vendors';
import Blog from './components/NavBar/Blog';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleCallback = (childData) => {
    // this.setState({ data: childData });
    setIsAuthenticated(childData);
  };
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {/* <BrowserRouter> */}
        <Navbar  />

        <Switch>
          <Route path='/login' component={Login} exact={true} />
          <Route path='/vendors' component={Vendors} exact={true} />
          <Route path='/blog' component={Blog} exact={true} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

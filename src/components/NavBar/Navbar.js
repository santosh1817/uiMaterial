import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
// import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useSelector, useDispatch } from 'react-redux';
import { setAuth } from '../../redux/login/loginActions';

import PhotoIcon from '@material-ui/icons/Photo';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import StoreIcon from '@material-ui/icons/Store';
import BookIcon from '@material-ui/icons/Book';
import logo from '../../assests/logo.png';
import Vendors from './Vendors';
import Photos from './Photos';
import Wedding from './Wedding';
import Blog from './Blog';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: '8em',
    [theme.breakpoints.down('md')]: {
      height: '7em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '5.5em',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function Navbar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [vendorHover, setVendorHover] = useState(false);
  const [photosHover, setPhotosHover] = useState(false);
  const [weddingHover, setWeddingHover] = useState(false);
  const [blogHover, setBlogHover] = useState(false);
  const [vendorColor, setVendorColor] = useState('#ffffff');
  const [weddingColor, setWeddingColor] = useState('#ffffff');
  const [photosColor, setPhotosColor] = useState('#ffffff');
  const [blogColor, setBlogColor] = useState('#ffffff');
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [style, setStyle] = useState({ display: 'none' });

  const isAuthenticated = useSelector((state) => state.auth.auths);
  const dispatch = useDispatch();
  // const [value, setValue] = useState(Number);

  const handleChange = (e, newvalue) => {
    console.log('n', newvalue);
    setValue(newvalue);
  };
  // const handleVe = (e) => {
  //   setVendorHover(true);

  //   setVendorColor('#FFFF00');
  // };
  return (
    <div className={classes.root}>
      <AppBar position='static' style={{ background: '#800000' }}>
        <Toolbar disableGutters={true}>
          <Button className={classes.logoContainer} disableRipple>
            <Link to='/'>
              <img alt='company logo' className={classes.logo} src={logo} />
            </Link>
          </Button>
          <Tabs
            value={value}
            onChange={handleChange}
            variant='scrollable'
            scrollButtons='on'
            indicatorColor='primary'
            // textColor='white'
            backgroundColor='#801A17'
            background='#801A17'
            aria-label='scrollable force tabs example'
          >
            <Tab
              label='Vendors'
              style={{ 'background-color': value === 0 ? 'yellow' : '#801A17' }}
              component={Link}
              to={{ pathname: '/vendors', isAuthenticated: isAuthenticated }}
              icon={<StoreIcon />}
            />

            <Tab
              style={{ 'background-color': value === 1 ? 'yellow' : '#801A17' }}
              label={<span style={{ color: weddingColor }}>Wedding</span>}
              icon={<ShoppingBasket />}
            />
            <Tab
              style={{ 'background-color': value === 2 ? 'yellow' : '#801A17' }}
              label={<span style={{ color: photosColor }}>Photos</span>}
              icon={<BookIcon />}
            />
            <Tab
              style={{ 'background-color': value === 3 ? 'yellow' : '#801A17' }}
              label={<span style={{ color: blogColor }}>Blog</span>}
              icon={<PhotoIcon />}
            />
          </Tabs>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>

            <InputBase
              placeholder='Search…'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

          {isAuthenticated ? (
            <Button
              color='######'
              onClick={() => {
                // setIsAuthenticated(false);
                dispatch(setAuth(false));
                props.history.push('/login');
              }}
            >
              <Link to='/login'>Click to Logout</Link>
            </Button>
          ) : (
            <Button
              color='secondary'
              // onClick={() => {
              //   // setIsAuthenticated(true);
              //   dispatch(setAuth(true));
              // }}
            >
              <Link to='/login'>Click to Login</Link>
            </Button>
          )}
        </Toolbar>
      </AppBar>

      {/* <div
        style={{
          border: '1px solid gray',
          width: 300,
          height: 300,
          padding: 10,
          margin: 100,
        }}
        onMouseEnter={(e) => {
          setStyle({ display: 'block' });
        }}
        onMouseLeave={(e) => {
          setStyle({ display: 'none' });
        }}
      ></div> */}
      {blogHover === true ? <Blog /> : null}
      {vendorHover === true ? <Vendors /> : null}
      {photosHover === true ? <Photos /> : null}
      {weddingHover === true ? <Wedding /> : null}
    </div>
  );
}
export default withRouter(Navbar);

import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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

export default function Navbar() {
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

  const handleChange = (e, newvalue) => {
    setValue(newvalue);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static' style={{ background: '#800000' }}>
        <Toolbar disableGutters={true}>
          <Button className={classes.logoContainer} disableRipple>
            <img alt='company logo' className={classes.logo} src={logo} />
          </Button>
          <Tabs
            value={value}
            onChange={handleChange}
            variant='scrollable'
            scrollButtons='on'
            indicatorColor='primary'
            // textColor='white'
            aria-label='scrollable force tabs example'
          >
            <Tab
              onMouseEnter={(e) => {
                setVendorHover(true);
                setVendorColor('#FFFF00');
              }}
              onMouseLeave={(e) => {
                setVendorHover(false);
                setVendorColor('#ffffff');
              }}
              label={<span style={{ color: vendorColor }}>Vendors</span>}
              icon={<StoreIcon />}
            />

            <Tab
              onMouseEnter={(e) => {
                console.log('hello', e.target.value);
                setWeddingHover(true);
                setWeddingColor('#FFFF00');
              }}
              onMouseLeave={(e) => {
                setWeddingHover(false);
                setWeddingColor('#ffffff');
              }}
              label={<span style={{ color: weddingColor }}>Wedding</span>}
              icon={<ShoppingBasket />}
            />
            <Tab
              onMouseEnter={(e) => {
                console.log('hello', e.target.value);
                setPhotosHover(true);
                setPhotosColor('#FFFF00');
              }}
              onMouseLeave={(e) => {
                setPhotosHover(false);
                setPhotosColor('#FFFFFF');
              }}
              label={<span style={{ color: photosColor }}>Photos</span>}
              icon={<BookIcon />}
            />
            <Tab
              onMouseEnter={(e) => {
                console.log('hello', e.target.value);
                setBlogHover(true);
                setBlogColor('#FFFF00');
              }}
              onMouseLeave={(e) => {
                setBlogHover(false);
                setBlogColor('#FFFFFF');
              }}
              label={<span style={{ color: blogColor }}>Blog</span>}
              icon={<PhotoIcon />}
            />
          </Tabs>

          {/* <Typography className={classes.title} variant="h6" noWrap>
          
          </Typography> */}
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
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
      {blogHover === true ? <Blog /> : null}
      {vendorHover === true ? <Vendors /> : null}
      {photosHover === true ? <Photos /> : null}
      {weddingHover === true ? <Wedding /> : null}
    </div>
  );
}

import React, { useEffect, useState } from 'react';
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
  const [hoverStatus, setHoverStatus] = useState('false');

  const handleChange = (e, newvalue) => {
    setValue(newvalue);
  };

  useEffect(() => {
    console.log('hover', hoverStatus);
  }, []);

  //   const tabs=(
  //       <React.Fragment>
  //           <Tabs value={value}
  //                       onChange={handleChange}
  //                       className={classes.tabContainer}
  //                       indicatorColor="primary">
  //                           <Tab className={classes.tab}
  //                             component={Link}
  //                             label="Vendors"
  //                             to="/vendors"/>
  //                         <Tab className={classes.tab}
  //                             component={Link}
  //                             label="Weddings"
  //                             to="/weddings"/>
  //           </Tabs>
  //       </React.Fragment>
  //   )

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
            textColor='white'
            aria-label='scrollable force tabs example'
          >
            <Tab
              onMouseEnter={() => {
                console.log('hello');
                setHoverStatus(true);
              }}
              onMouseLeave={() => {
                console.log('hello');
                setHoverStatus(false);
              }}
              label='Vendors'
              icon={<StoreIcon />}
            />
            <Tab label='Photos' icon={<PhotoIcon />} />
            <Tab label='Wedding' icon={<ShoppingBasket />} />
            <Tab label='Blog' icon={<BookIcon />} />
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
      {hoverStatus == true ? <Vendors /> : null}
    </div>
  );
}

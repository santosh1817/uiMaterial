import React,{useEffect,useState} from 'react'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { setAuth } from '../../redux/login/loginActions';
import { BrowserRouter, Switch, Route ,Link} from 'react-router-dom';
const Vendors=(props)=>{

  
  const isAuthenticated = useSelector((state) => state.auth.auths);
  const dispatch = useDispatch();

  useEffect(() => {
    
  },[])
 
  let path=""

  return(
   
    <Grid
    container
    direction='row'
    justify='center'
   
    >
      <Box
        boxShadow={20}
        bgcolor="background.paper"
        m={1}
        p={1}
        style={{ width: '70rem', height: '50rem',backgroundColor:'grey' }}
        
      >

      {isAuthenticated?(
        <h1><Link to={'/blog'}>Blog</Link> </h1>
      ):(
        <h1><Link to={'/login'}>Blog</Link> </h1>
      )

      }    
        
        <h2>open heading</h2>
          {/* <Button color='inherit'>
            <Link to={`/login`}>h1 button </Link>
          </Button> */}

        </Box>
    </Grid>
   
  )


}

export default Vendors
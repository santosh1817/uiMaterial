import React, { useState,useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { setAuth } from '../../redux/login/loginActions';
const Login =(props)=>{
    
    // const [auth,setAuth]=useState(false)

    const [alert,setALert]=useState('')
    const dispatch = useDispatch();
    const handleClick=()=>{
      dispatch(setAuth(true));
      setALert('Successfully Logged In ')
      setTimeout(() => {
        props.history.push('/vendors')
      }, 2000);
      

    }

    useEffect(() => {
      console.log(props.location.state) 
     
    }, [])
    return(
        <>
        <h1>welcome to login</h1>
        <Button color='primary'onClick={()=>{
         handleClick() 
        }}>Click to Login</Button>
        {alert && <h1>{alert}</h1>}
        </>
    )
}
export default Login
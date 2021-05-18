import React from 'react'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';
const Blog=()=>{


 


  return(
    <>
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
        
      >{<h1>Welcome to Blog</h1>}</Box>
    </Grid>
    </>
  )


}

export default Blog
import React from 'react'
import Navbar from '../components/common/navbar'
import Box from '@mui/material/Box';

function DeafultLayout(props) {
  return ( 
        <Box direction="column" sx={{bgcolor:'#e6ffff'}}>
          <Navbar/> 
          {props.children}
        </Box>
  )
}

export  {DeafultLayout}
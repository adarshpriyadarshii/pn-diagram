import { Typography } from '@mui/material'
import React from 'react'
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';

function About() {
  return (
    <div>
        <Typography variant='h2' marginLeft='15px'>
            About
        </Typography>
        <Typography variant="paragraph" marginLeft='15px'>
            <Typography variant='h3' margin='15px'>
              <AcUnitOutlinedIcon fontSize='large'/> Introduction
              <ol>
                <li>Precedence Network Analysis (PNA)</li>
                <li>Precedence Diagramming Method (PDM)</li>
                <li>Improved version of Activity-on-Node Network</li>
                <li>First appeared around 1964 in the user’s manual for
                    an IBM 1440 Computer program
                </li>
              </ol>
            </Typography>   
        </Typography>
    </div>
  )
}

export default About
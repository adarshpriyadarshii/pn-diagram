import React from 'react'
import prof_pic from '../../assets/prof_samadhiya.jpg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Box }from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

function Contact() {
  return (
    <Box justifyContent="center" alignItems="center" >
        <Typography variant='h2' marginLeft='15px'>
          Contact
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center" >
          <Card sx={{ display: 'flex',maxWidth: 550, background:'#d2effa', color:'#023961'}}>
              <CardMedia
                component="img"
                sx={{ width: 200 }}
                image={prof_pic}
                alt="Live from space album cover"
              />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h3">
                  N.K. Samadhiya
                  </Typography>
                  <Typography variant="h4" color="text.secondary" component="div">
                    Professor
                  </Typography>
                  <Box direction= 'column-reverse'>
                    <Typography variant="h5" component="div">
                    <IconButton aria-label="mail">
                      <MailOutlineSharpIcon />
                    </IconButton>
                      <a 
                        href="mailto:narendra.samadhiya@ce.iitr.ac.in" 
                        style={{ 
                          color: '#023961', 
                          textDecoration: 'none' 
                        }}>
                        narendra.samadhiya[at]ce.iitr.ac.in
                      </a>
                    </Typography>
                    <Typography variant="h5" component="div">
                    <IconButton aria-label="phone">
                      <LocalPhoneOutlinedIcon />
                    </IconButton>
                      01332-285467
                    </Typography>
                  </Box>
                </CardContent>
              </Box>
          </Card>
        </Box>
        
    </Box>
  )
}

export default Contact
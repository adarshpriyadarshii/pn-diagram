import React from 'react'
import prof_pic from '../../assets/prof_samadhiya.jpg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Box, Grid, Stack }from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

function Contact() {
  const students=[
    {
      name: "Adarsh Priyadarshi",
      e_no: "20411002",
      email : "adarsh_p[at]ce.iitr.ac.in",
      no: "9631187333"
    },
    {
      name: "Prem Chhangani",
      e_no: "20411025",
      email : "prem_c[at]ce.iitr.ac.in",
      no: "7976128665"
    },
    {
      name: "Vaibhav Kumar",
      e_no: "20113180",
      email : "vaibhav_k1[at]ce.iitr.ac.in",
      no: "9350121202"
    },
    {
      name: "Tushar Yadav ",
      e_no: "20118099",
      email : "tushar_y[at]ce.iitr.ac.in",
      no: "9119292745"
    },
  ]
  return (
    <Box justifyContent="center" >
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
                  <Typography component="div" variant="h4">
                  Dr. N.K. Samadhiya
                  </Typography>
                  <Typography variant="h5" color="text.secondary" component="div">
                    Professor
                  </Typography>
                  <Box direction= 'column-reverse'>
                    <Typography variant="h5" component="div">
                    
                      <MailOutlineSharpIcon />
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
                      <LocalPhoneOutlinedIcon />
                      01332-285467
                    </Typography>
                  </Box>
                </CardContent>
              </Box>
          </Card>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
        <Stack direction='row'>
          {
            students.map((stu)=>{
              return(
                <Box margin={2} key={stu.e_no}>
                  <Card  sx={{ display: 'flex',background:'#daecf2', color:'#023961'}} >
                    <CardContent>
                        <Typography component="div" variant="h5">
                          {stu.name}
                        </Typography>
                        <Typography variant="h6" color="text.secondary" component="div">
                          {stu.e_no}
                        </Typography>
                        <Box direction= 'column-reverse'>
                          <Typography variant="h6" component="div">
                          <IconButton aria-label="mail">
                            <MailOutlineSharpIcon />
                          </IconButton>
                              {stu.email}
                          </Typography>
                          <Typography variant="h6" component="div">
                          <IconButton aria-label="phone">
                            <LocalPhoneOutlinedIcon />
                          </IconButton>
                            {stu.no}
                          </Typography>
                        </Box>
                    </CardContent>
                  </Card>
                </Box>
              )
            })
          }
          </Stack>
        </Box>
    </Box>
  )
}

export default Contact
import { Typography } from '@mui/material'
import React from 'react'
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';

function About() {
  return (
    <div>
        <Typography variant='h1' marginLeft='15px'>
            About
        </Typography>
        <br></br>
        <Typography variant='h3' marginLeft='15px' sx={{color:"#3e5ede",fontFamily:"Macondo, cursive"}}>
            About the PN Diagram :-
        </Typography>
        <br></br>
        <Typography variant="h6" marginLeft='15px'>
        Precedence Networking diagrams, or activity-on-node diagrams,
        are a type of project management tool used to visualize the
        relationship between different tasks or activities in a project,
        making it easier to plan and manage complex projects. It is often 
        used in the field of construction management and engineering,
         but its application can also be extended to other industries. 
        </Typography>
        <br></br>
        <Typography variant="h6" marginLeft='15px'>
        The PN diagram consists of boxes or nodes that represent tasks or activities in a project.
        Arrows are used to connect the nodes to show the relationship between tasks.
        The arrows indicate which task must be completed before another task can begin.
        The direction of the arrow represents the flow of the project.
        The PN diagram provides a visual representation of the project, making it easier to understand and manage.
        </Typography>
        <br></br>
        <Typography variant="h6" marginLeft='15px'>
        Types of Dependencies in Precedence Diagram
        <ol>
          1.	Finish-to-Start (FS): Step A needs to be finished before step B can be finished.<br></br>
          2.	Finish-to-Finish (FF): Step A needs to be finished before step B can be finished.<br></br>
          3.	Start-to-Finish (SF): Step A needs to be started before step B can be finished.<br></br>
          4.	Start-to-Start (SS): Step A needs to be started before step B can be started.<br></br>
        </ol>
        </Typography>
        <br></br>
        <Typography variant='h3' marginLeft='15px' sx={{color:"#3e5ede",fontFamily:"Macondo, cursive"}}>
        Workflow :-
        </Typography>
        <br></br>
        <Typography variant="h6" marginLeft='15px'>
        Here Are The Steps to use the website and to operate it.<br></br>
        Firstly open the Website and you will be in the home section by default.
        On this you will see 2 other options too , one is About Section and the Other one is Contact section.
        </Typography>
        <br></br>
        <Typography variant="h6" marginLeft='15px'>
        As we can see in the Home  page that it will ask Activity ,
        there you will type the activity or the node you want to Add to your 
        PN network and then In the Duration section fill the Duration and 
        then in the last section type the number of nodes on which it depends.
        After that click on the ‘Add’ button.
        </Typography>
        <br></br>
        <Typography variant="h6" marginLeft='15px'>
        Further add other activities and then add the dependencies using 
        ‘Add relationship’ and then ‘Add’ button.
        </Typography>
        <br></br>
        <Typography variant="h6" marginLeft='15px'>
        And then similarly we create our network and in the lasy
        when we will add all the nodes then click on the ‘show’
        button and we will get our results consisting of Early start,
        Early Finish , Latest Start , Latest Finish. 
        </Typography>
    </div>
  )
}

export default About
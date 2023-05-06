import * as React from 'react';
import { useState } from 'react';
import {Card,CardContent,Grid,CardMedia, Button, CardActionArea, CardActions, Input, Typography, Checkbox, FormControlLabel } from '@mui/material';
import pnDiagram from '../../assets/pn-diagram.jpg'
import { useNavigate } from 'react-router-dom';

export default function InputTab({activities,setActivities}) {
    let navigate=useNavigate();

    const [name,setName]=useState('');
    const [duration,setDuration]=useState(0);
    const [no_dependencies,setNDependencies]=useState(0);
    const [dependencies,setDependencies]=useState('');
    const [ff,setFF]=useState(false);
    const [ff_dur,setFF_dur]=useState(0);
    const [fs,setFS]=useState(false);
    const [fs_dur,setFS_dur]=useState(0);
    const [sf,setSF]=useState(false);
    const [sf_dur,setSF_dur]=useState(0);
    const [ss,setSS]=useState(false);
    const [ss_dur,setSS_dur]=useState(0);
    const [rel,setRel]=useState([]);
    const addNode=()=>{
        const newActivity={
            name:name,
            duration:duration,
            dependencies: dependencies.split(',').filter(c => /^[A-Z]+$/.test(c)),
            no_dependencies:no_dependencies,
            rel: rel,
        }
        setActivities([...activities,newActivity]);
        setName('');
        setDuration(0);
        setDependencies('');
        setNDependencies(0);
        setFF(false);
        setFF_dur(0);
        setFS(false);
        setFS_dur(0);
        setSF(false);
        setSF_dur(0);
        setSS(false);
        setSS_dur(0);
        setRel([]);
    }

    const addRel=(name)=>{
        const newRel={  
            name:name,
            ff: ff,
            ff_dur: ff_dur,
            fs: fs,
            fs_dur: fs_dur,
            sf: sf,
            sf_dur: sf_dur,
            ss: ss,
            ss_dur: ss_dur,
        }
        setRel([...rel,newRel]);
        setFF(false);
        setFF_dur(0);
        setFS(false);
        setFS_dur(0);
        setSF(false);
        setSF_dur(0);
        setSS(false);
        setSS_dur(0);
    }

    const showNodes=()=>{
        console.log(activities);
        navigate('/algo')
    }

  return (
    <Grid container sx={{  justifyContent:'center'}} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Card sx={{ maxWidth: 350, bgcolor:'#cceeff', marginTop:'15px'}}>
            
                <CardMedia
                component="img"
                height="180"
                image={pnDiagram}
                />
                <CardContent >
                    <Grid container sx={{color:'black',justifyContent:'center'}}>
                        <Typography variant='h4'>P-N Diagram</Typography>
                    </Grid>
                </CardContent>
            
                    <Grid container 
                    spacing={{ xs: 2, md: 3 }} 
                    columns={{ xs: 4, sm: 8, md: 12 }} 
                    sx={{color:'black'}}
                    >
                        <Grid item >
                            <Typography variant='h6'>Activity</Typography>
                        </Grid>
                        <Grid item xs={2} sm={4} md={4}>
                            <Input
                                name='activity'
                                value={name}
                                onChange={e=>setName(e.target.value)}
                            ></Input>
                        </Grid>
                    </Grid>
                    <Grid container 
                    spacing={{ xs: 2, md: 3 }} 
                    columns={{ xs: 4, sm: 8, md: 12 }} 
                    direction='row' sx={{color:'black'}}
                    >
                        <Grid item >
                            <Typography variant='h6'>Duration</Typography>
                        </Grid>
                        <Grid item xs={2} sm={4} md={4}>
                            <Input 
                                type='number'
                                name='duration'
                                value={duration}
                                onChange={e=>setDuration(e.target.value)}
                            ></Input>
                        </Grid>
                    </Grid>
                    <Grid container 
                    spacing={{ xs: 2, md: 3 }} 
                    columns={{ xs: 4, sm: 8, md: 12 }} 
                    direction='row' sx={{color:'black'}}
                    >
                        <Grid item >
                            <Typography variant='h6'>No. of Activities It Depends on</Typography>
                        </Grid>
                        <Grid item xs={2} sm={4} md={4}>
                            <Input
                                name='no_nodes'
                                type='number'
                                value={no_dependencies}
                                onChange={e=>setNDependencies(e.target.value)}
                            ></Input>
                        </Grid>
                    </Grid>
                    {no_dependencies>0?
                    (<>
                        <Grid container 
                        spacing={{ xs: 2, md: 3 }} 
                        columns={{ xs: 4, sm: 8, md: 12 }} 
                        direction='row' sx={{color:'black'}}
                        >
                            <Grid item >
                                <Typography variant='h6'>Activities It Depends on</Typography>
                            </Grid>
                            <Grid item xs={2} sm={4} md={4}>
                                <Input
                                    name='nodes'
                                    value={dependencies}
                                    onChange={e=>setDependencies(e.target.value)}
                                ></Input>
                            </Grid>
                        </Grid>
                        {dependencies.split(',').filter(c => /^[A-Z]+$/.test(c)).map(dep=>(
                            <Grid container 
                                spacing={{ xs: 2, md: 3 }} 
                                columns={{ xs: 4, sm: 8, md: 12 }} 
                                direction='row' sx={{color:'black'}}
                                key={dep}
                            >
                                <Grid item xs={2} sm={4} md={4}>
                                    <Typography variant='h6'>Relationships with '{dep}'</Typography>
                                </Grid>
                                <Grid item >
                                    <Grid >
                                        <FormControlLabel 
                                            label="FF"
                                            name='ff'
                                            value={ff} 
                                            control={<Checkbox 
                                                onChange={()=>setFF(!ff)}
                                                checked={ff}
                                                />} 

                                            />
                                        {ff?<Input 
                                                type='number'
                                                name='ff_dur'
                                                value={ff_dur}
                                                onChange={e=>setFF_dur(e.target.value)}
                                            />:<Input disabled type='number' value={ff_dur}/>}
                                    </Grid>
                                    <Grid >
                                        <FormControlLabel 
                                            label="FS"
                                            name='fs'
                                            value={fs} 
                                            control={<Checkbox 
                                                onChange={()=>setFS(!fs)}
                                                checked={fs}
                                                />} 

                                            />
                                        {fs?<Input 
                                                type='number'
                                                name='fs_dur'
                                                value={fs_dur}
                                                onChange={e=>setFS_dur(e.target.value)}
                                            />:<Input disabled type='number'value={fs_dur}/>}
                                    </Grid>
                                    <Grid >
                                        <FormControlLabel 
                                            label="SF" 
                                            name='sf'
                                            value={sf}
                                            control={<Checkbox 
                                                onChange={()=>setSF(!sf)}
                                                checked={sf}
                                                />} 

                                        />
                                        {sf?<Input 
                                            type='number'
                                            name='sf_dur'
                                            value={sf_dur}
                                            onChange={e=>setSF_dur(e.target.value)}   
                                        />:<Input disabled type='number' value={sf_dur}/>}
                                    </Grid>
                                    <Grid >
                                        <FormControlLabel 
                                            label="SS" 
                                            name='ss'
                                            value={ss}
                                            control={<Checkbox 
                                                onChange={()=>setSS(!ss)}
                                                checked={ss}
                                            />}

                                        />
                                        {ss?<Input 
                                            type='number'
                                            name='ss_dur'
                                            value={ss_dur}
                                            onChange={e=>setSS_dur(e.target.value)}
                                        />:<Input disabled type='number' value={ss_dur}/>}
                                        
                                    </Grid>
                                    <Grid container sx={{flexDirection:'row-reverse'}}>
                                        <Button 
                                            size="medium" 
                                            color="primary" 
                                            variant="contained"
                                            onClick={()=>addRel(dep)} 
                                        >
                                        Add Relationship
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))}
                        </>
                    ):(null)
                    }
                    
            <CardActions >
                    <Button 
                        size="medium" 
                        color="primary" 
                        variant="contained" 
                        sx={{flexDirection:'row'}}
                        onClick={showNodes}
                    >
                    Show
                    </Button>
                <Grid container sx={{flexDirection:'row-reverse'}}>
                    <Button 
                        size="medium" 
                        color="primary" 
                        variant="contained"
                        onClick={addNode} 
                    >
                    Add
                    </Button>
                </Grid>
                
            </CardActions>
            </Card>
    </Grid>
  );
}
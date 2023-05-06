import { Button } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import {Grid,Box,Stack} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';


function OutputTab({activities,setActivities,data,setData}) {
    let navigate=useNavigate();

    const handleChange=()=>{
        console.log(activities)
        setActivities([]);
        console.log(data)
        setData([]);
        console.log(data)
        navigate('/')
    }

    const data1=data;
    
    const edges = activities.flatMap((activity, index) => {
        return activity.rel?.map((source) => {
            return {
                id: `${source.name}-${activity.name}`,
                source: source.name,
                target: activity.name,
                label: `
                    ${source.ff?"FF":""} ${source.ff_dur?source.ff_dur:""}
                    ${source.fs?" FS":""} ${source.fs_dur?source.fs_dur:""}
                    ${source.sf?" SF":""} ${source.sf_dur?source.sf_dur:""}
                    ${source.ss?" SS":""} ${source.ss_dur?source.ss_dur:""}
                `,
                type: 'step'
            };
        });
    });

    const nodes = activities.map((activity, index) => {
        return {
            id: activity.name,
            type: 'default',
            className: 'annotation',
            data: {
            label: (
                <>
                <h1>{activity.name}</h1>
                <h3>Duration : {activity.duration}</h3>
                
                 {
                    data1.filter((data)=>data.name==activity.name).map((data1)=>{
                        return(
                            <Box sx={{ width: '100%' }} key={data1.name}>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                                        <Grid item xs={12}>
                                        Float: {parseInt(data1.LS-data1.ES)}
                                        </Grid>
                                        
                                        <Grid item xs={6}>
                                        ES : {data1.ES}
                                        </Grid>
                                        <Grid item xs={6}>
                                        EF : {data1.EF}
                                        </Grid>
                                        <Grid item xs={6}>
                                        LS : {data1.LS}
                                        
                                        </Grid>
                                        <Grid item xs={6}>
                                        LF : {data1.LF}
                                        </Grid>
                                </Grid>        
                            </Box>
                    )  
                    })
                }
                
                </>
            ),
            },
            position: { 
                x: index % 2 === 0 ? -(index * 200) : (index * 200), 
                y: index * 100 
            },
            
        };
    });
    
  return (
    <>
        
        <h1 margin={2}>Output</h1>
        <Box display="flex" justifyContent="center" alignItems="center" margin='15px'>
            <Button onClick={()=>handleChange()} variant="contained">Try Another Input</Button>
        </Box>
        <div style={{ width: '100%', height: '90vh'}}>
        <ReactFlow nodes={nodes} edges={edges} fitView>
            <Background />
            <Controls />
        </ReactFlow>
        </div>
    </>
    
  )
}

export  {OutputTab}
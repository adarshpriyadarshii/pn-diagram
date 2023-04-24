import { Button } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';


function OutputTab({activities,setActivities}) {
    let navigate=useNavigate();

    const handleChange=()=>{
        console.log(activities)
        //setActivities([]);
        console.log(activities)
        navigate('/algo')
    }

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
            data: { label: activity.name },
            position: { 
                x: index % 2 === 0 ? index * 100 : -(index * 100), 
                y: index * 100 
            },
            
        };
    });
    
  return (
    <>
        <div>
            <h1 onClick={handleChange}>Output</h1>
            <button onClick={()=>console.log(activities.length)}>Click</button>
        </div>
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
import React,{useState} from 'react'
import { Button, Box,Typography,CircularProgress,Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const v7 = new Array(10000).fill([]).map(() => new Array(3).fill(0));
const v9 = new Array(10000).fill([]).map(() => new Array());
const dura = new Map();
const m5 = new Map();
const m6 = new Map();
const vis = new Map();
const m9 = new Map();
const v = new Array(100).fill([]).map(() => new Array());
const v1 = new Array(100).fill([]).map(() => new Array());
const las = [];

const v2 = new Map();

function forpass(x, par) {
  if (m5[x] === 0) {
    v7[x][0] = 0;
  }

  if (m5[x] !== 0) {
    let max1 = 0;
    for (let k = 0; k < v2[[x, par]]?.length; k++) {
      if (v2[[x, par]][k][0] === "FF") {
        max1 = Math.max(max1, v2[[x, par]][k][1] + v7[par][2] - dura[x]);
      }
      if (v2[[x, par]][k][0] === "FS") {
        max1 = Math.max(max1, v2[[x, par]][k][1] + v7[par][2]);
      }
      if (v2[[x, par]][k][0] === "SF") {
        max1 = Math.max(max1,v2[[x, par]][k][1] + v7[par][0] - dura[x]);
      }
      if (v2[[x, par]][k][0] === "SS") {
        max1 = Math.max(max1, v2[[x, par]][k][1] + v7[par][0]);
      }
    }

    if (v2[[x, par]]?.length === 0) {
      v9[x].push(v7[par][2]);
    } else {
      v9[x].push(max1);
    }
    if (v9[x]?.length !== m5[x]) {
      return;
    }
  }
  if (m5[x] !== 0) {
    let max1 = 0;
    for (let i = 0; i < v9[x]?.length; i++) {
      max1 = Math.max(max1, v9[x][i]);
    }
    v7[x][0] = max1;
  }
  v7[x][1] = dura[x];
  v7[x][2] = v7[x][0] + v7[x][1];
  vis.set(x, 1);

  for (let i = 0; i < v1[x]?.length; i++) {
    if (v1[x]?.length - m5[x] === 0) {
      las.push(x);
    }
    if (vis[v1[x][i]] === 1) {
      continue;
    }
    forpass(v1[x][i], x);
  }
}
function backpass(x, par, no) {
  if (par === no) {
    v7[x][5] = v7[x][2];
    v7[x][3] = v7[x][5] - v7[x][1];
  }
  if (par !== no && par !== -1) {
    let min1 = Infinity;
    for (let k = 0; k < v2[[x, par]]?.length; k++) {
      if (v2[[x, par]][k][0] === "FF") {
        min1 = Math.min(min1, -v2[[x, par]][k][1] + v7[par][5]);
      }
      if (v2[[x, par]][k][0] === "FS") {
        min1 = Math.min(min1, -v2[[x, par]][k][1] + v7[par][3]);
      }
      if (v2[[x, par]][k][0] === "SF") {
        min1 = Math.min(min1, -v2[[x, par]][k][1] + v7[par][5] + dura[x]);
      }
      if (v2[[x, par]][k][0] === "SS") {
        min1 = Math.min(min1, -v2[[x, par]][k][1] + v7[par][3] + dura[x]);
      }
    }
    if (v2[[x, par]]?.length === 0) {
      v9[x].push(v7[par][3]);
    } else {
      v9[x].push(min1);
    }
    if (v9[x]?.length !== m9[x]) {
      return;
    }
  }
  if (par !== no && par !== -1) {
    let min1 = Infinity;
    for (let i = 0; i < v9[x]?.length; i++) {
      min1 = Math.min(min1, v9[x][i]);
    }
    v7[x][5] = min1;
  }
  v7[x][3] = v7[x][5] - v7[x][1];
  vis[x] = 1;
  for (let i = 0; i < v1[x]?.length; i++) {
    if (vis[v1[x][i]] === 1) {
      continue;
    }
    backpass(v1[x][i], x, no);
  }
}

function Algorithm({activities,setActivities,data,setData}) {
  let navigate=useNavigate();

  const [output,setOutput]=useState([]);

  const algo=(activities)=>{
    let node, i, dur, rel, j, dep, prel, k, y;
    let x;
    //console.log(" Hello , A Warm Welcome to PN Predictor ");
    //console.log(" Please Enter the number of nodes ");
    //node = parseInt(prompt());
    node=activities.length
    //console.log(node)
    for (i = 0; i < node; i++) {
      //console.log("Enter the duration of " + (i + 1) + " node");
      //dur = parseInt(prompt());
      //console.log(parseInt(activities[i].name.charCodeAt(0))-65)
      dur = parseInt(activities[i].duration);
      //console.log(dur)
      dura[i] = dur;
      m6[i] = dur;
    }
    for (i = 0; i < node; i++) {
      //console.log(" Enter the number of nodes  on which " + (i + 1) + "  depends upon");
      //rel = parseInt(prompt());
      rel = parseInt(activities[i].no_dependencies);
      //console.log(rel)
      m5[i] = rel;
      //console.log("Enter the node on which it depends :-");
      for (j = 0; j < rel; j++) {
        //console.log(j + 1 + " node:- ");
        //dep = parseInt(prompt());
        dep = parseInt(activities[i].rel[j].name.charCodeAt(0))-65;
        v1[i].push(dep);
        v1[dep].push(i);
        //console.log("Enter the number of Precedence Relationship");
        //prel = parseInt(prompt());
        let v4 = [];
        // for (k = 0; k < prel; k++) {
        //   console.log("Enter " + (k + 1) + " relation");
        //   x = prompt();
        //   y = parseInt(prompt());
        //   v4.push([x, y]);
        // }
        if(activities[i].rel[j].ff){v4.push(["FF",parseInt(activities[i].rel[j].ff_dur)])}
        if(activities[i].rel[j].fs){v4.push(["FS",parseInt(activities[i].rel[j].fs_dur)])}
        if(activities[i].rel[j].sf){v4.push(["SF",parseInt(activities[i].rel[j].sf_dur)])}
        if(activities[i].rel[j].ss){v4.push(["SS",parseInt(activities[i].rel[j].ss_dur)])}
        v2[[i, dep]] = v4;
        v2[[dep, i]] = v4;
      }
    }
    let v6 = [];
    for (i = 0; i <= node + 3; i++) {
      m9[i] = v1[i].length - m5[i];
      for (j = 0; j < 6; j++) {
        v7[i].push(0);
      }
    }
    forpass(0, -1);
    vis.clear();
    for (i = 0; i < las.length; i++) {
      v1[las[i]].push(node + 2);
      v1[node + 2].push(las[i]);
    }
    for (i = 0; i <= node + 3; i++) {
      v9[i] = [];
    }
    backpass(node + 2, -1, node + 2);
    var a=[];
    for (i = 0; i < node; i++) {
      const newOutput={
        name:String.fromCharCode(i+65),
        EF:v7[i][2],
        ES:v7[i][0],
        LF:v7[i][5],
        LS:v7[i][3],
      }
      //console.log(newOutput)
      a.push(newOutput)
      //setOutput([...output,newOutput])
      //console.log(a)
      //console.log(output)
      console.log(" for " + i + " node zero ind " + "Early Start:- " + v7[i][0] + " Duration " + v7[i][1] + " Early Finish " + v7[i][2] + " Latest Start " + v7[i][3] + " Latest Finish " + v7[i][5]);
    }
    console.log(data);
    setData(a);
    console.log(a);
    console.log(data);
    a=[];
    setOutput([]);
    navigate('/output');
    
  }
  return (
    <>
        <Typography variant='h3' marginLeft='15px'>
            Confirmation Page
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center" >
          <Stack direction='column'>
            <Box display="flex" justifyContent="center" alignItems="center" marginBottom='15px'>
              <CircularProgress color="inherit"/>
            </Box>
            
            <Box display="flex" justifyContent="center" alignItems="center" margin='15px'>
              <Button onClick={()=>algo(activities)} variant="contained">Run the Algorithm</Button>
            </Box>
            
          </Stack>
        </Box>
    </>
    
  )
}

export default Algorithm
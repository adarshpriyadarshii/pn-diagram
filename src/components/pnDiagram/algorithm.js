import React from 'react'
import { Button } from '@mui/material';

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
    for (let k = 0; k < v2[[x, par]].length; k++) {
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

    if (v2[[x, par]].length === 0) {
      v9[x].push(v7[par][2]);
    } else {
      v9[x].push(max1);
    }
    if (v9[x].length !== m5[x]) {
      return;
    }
  }
  if (m5[x] !== 0) {
    let max1 = 0;
    for (let i = 0; i < v9[x].length; i++) {
      max1 = Math.max(max1, v9[x][i]);
    }
    v7[x][0] = max1;
  }
  v7[x][1] = dura[x];
  v7[x][2] = v7[x][0] + v7[x][1];
  vis.set(x, 1);

  for (let i = 0; i < v1[x].length; i++) {
    if (v1[x].length - m5[x] === 0) {
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
    for (let k = 0; k < v2[[x, par]].length; k++) {
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
    if (v2[[x, par]].length === 0) {
      v9[x].push(v7[par][3]);
    } else {
      v9[x].push(min1);
    }
    if (v9[x].length !== m9[x]) {
      return;
    }
  }
  if (par !== no && par !== -1) {
    let min1 = Infinity;
    for (let i = 0; i < v9[x].length; i++) {
      min1 = Math.min(min1, v9[x][i]);
    }
    v7[x][5] = min1;
  }
  v7[x][3] = v7[x][5] - v7[x][1];
  vis[x] = 1;
  for (let i = 0; i < v1[x].length; i++) {
    if (vis[v1[x][i]] === 1) {
      continue;
    }
    backpass(v1[x][i], x, no);
  }
}

function Algorithm({activities,setActivities}) {

  let node=activities.length, i, dur, rel, j, dep;
//   console.log(" Hello , A Warm Welcome to PN Predictor ");
//   console.log(" Please Enter the number of nodes ");
//   node = parseInt(prompt());
{
    activities.map((activity,index)=>{
        dur=activity.duration;
        dura[index]=dur;
        m6[index]=dur;
    })
}
//   for (i = 0; i < node; i++) {
//     console.log("Enter the duration of " + (i + 1) + " node");
//     dur = parseInt(prompt());
//     dura[i] = dur;
//     m6[i] = dur;
//   }
{
    activities.map((activity,index)=>{
        rel=activity.no_dependencies;
        m5[index]=rel;
        {
          activity.rel?.map((source,idx)=>{
            dep=idx;
            v1[index].push(dep);
            v1[dep].push(index);
            let v4 = [];
            {source.ff?v4.push(["FF",source.ff_dur]):v4.push(null)}
            {source.fs?v4.push(["FS",source.fs_dur]):v4.push(null)}
            {source.sf?v4.push(["SF",source.sf_dur]):v4.push(null)}
            {source.ss?v4.push(["SS",source.ss_dur]):v4.push(null)}
            v2[[index,idx]]=v4;
            v2[[idx,index]]=v4;
          })
        }
    })
}
  // for (i = 0; i < node; i++) {
  //   // console.log(" Enter the number of nodes  on which " + (i + 1) + "  depends upon");
  //   // rel = parseInt(prompt());
  //   // m5[i] = rel;
  //   console.log("Enter the node on which it depends :-");
  //   for (j = 0; j < rel; j++) {
  //     console.log(j + 1 + " node:- ");
  //     dep = parseInt(prompt());
  //     v1[i].push(dep);
  //     v1[dep].push(i);
  //     console.log("Enter the number of Precedence Relationship");
  //     prel = parseInt(prompt());
  //     let v4 = [];
  //     for (k = 0; k < prel; k++) {
  //       console.log("Enter " + (k + 1) + " relation");
  //       x = prompt();
  //       y = parseInt(prompt());
        
  //       v4.push([x, y]);
  //     }
  //     v2[[i, dep]] = v4;
  //     v2[[dep, i]] = v4;
      
  //   }
  // }
  let v6 = [];
  for (i = 0; i <= node + 3; i++) {
     if(i>node){
         m9[i]=0;
     }else{
       m9[i] = v1[i].length - m5[i];  
     }
    
    console.log(i + " node " + m9[i]);
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
  for (i = 0; i < node; i++) {
    console.log(" for " + i + " node zero ind " + "Early Start:- " + v7[i][0] + " Duration " + v7[i][1] + " Early Finish " + v7[i][2] + " Latest Start " + v7[i][3] + " Latest Finish " + v7[i][5]);
  }

  return (
    <>
        <div>Algorithm</div>
        <Button >Click</Button>
    </>
    
  )
}

export default Algorithm
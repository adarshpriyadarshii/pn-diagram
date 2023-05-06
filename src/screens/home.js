import React,{ useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../components/common/about'
import Contact from '../components/common/conatct'
import InputTab from '../components/pnDiagram/inputTab'
import {DeafultLayout as Layout} from '../layouts/default'
import {OutputTab} from '../components/pnDiagram/outputTab'
import Algorithm from '../components/pnDiagram/algorithm'

function Home() {
  const [activities,setActivities]=useState([]);
  const [data,setData]=useState([]);
  const props={activities,setActivities,data,setData}
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout>{<InputTab {...props}/>}</Layout>}/>
          <Route path="/about" element={<Layout>{<About/>}</Layout>}/>
          <Route path="/contact" element={<Layout>{<Contact/>}</Layout>}/>
          <Route path="/output" element={<Layout>{<OutputTab {...props}/>}</Layout>}/>
          <Route path="/algo" element={<Layout>{<Algorithm {...props}/>}</Layout>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Home
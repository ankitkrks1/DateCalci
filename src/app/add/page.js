

"use client"

import Typography from "@mui/material/Typography";

import AddDT from '../components/AddDT'
import SubDT from '../sub/page'
import Style from '../page.module.css'
import NavBar from "../components/NavBar"
const Add = ()=>{


  return (
    
    <div className={Style.center}>
       <NavBar/>
      <Typography variant="h2" gutterBottom>
      This is Date Calculator
      </Typography>

      <AddDT/>
    
    </div>
  )
}

export default Add



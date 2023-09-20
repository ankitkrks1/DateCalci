
"use client"
import Typography from "@mui/material/Typography";

import SubDT from "../components/SubDT"
import Style from '../page.module.css'

import NavBar from "../components/NavBar"
const Sub = ()=>{


  return (
    
    <div className={Style.center}>
   
      <NavBar />
 

      <Typography variant="h2" gutterBottom>
        This is Date Calculator
      </Typography>
      <SubDT />

  </div>
  )
}

export default Sub



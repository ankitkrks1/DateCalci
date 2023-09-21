
"use client"
import Typography from "@mui/material/Typography";

import SubDT from "../components/SubDT"
import Style from '../page.module.css'

import NavBar from "../components/NavBar"
const Sub = ()=>{


  return (
    <>
      <NavBar />
      <div className={Style.center}>
        <SubDT />
      </div>
    </>
  );
}

export default Sub



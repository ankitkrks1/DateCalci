"use client"
import IST2BST from './components/IST2BST';
import BST2IST from './components/BST2IST'

import Text from "./components/Text";
import Typography from "@mui/material/Typography";

import AddDT from './components/AddDT'
import SubDT from './sub/page'
import Style from './page.module.css'
import NavBar from './components/NavBar'

const Home = ()=>{


  return (
    
    <div className={Style.center}>
      <NavBar/>
      <Typography variant="h2" gutterBottom>
      This is Date Calculator
      </Typography>
      <IST2BST/><br></br>
      <BST2IST/>
    </div>
  )
}

export default Home



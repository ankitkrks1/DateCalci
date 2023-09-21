"use client";
import Typography from "@mui/material/Typography";

import DiffDT from "../components/DiffDtT";
import Style from "../page.module.css";

import NavBar from "../components/NavBar";
const Sub = () => {
  return (
    <>
      <NavBar />
      <div className={Style.center}>
        <DiffDT />
      </div>
    </>
  );
};

export default Sub;

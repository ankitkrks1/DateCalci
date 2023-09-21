"use client";

import Typography from "@mui/material/Typography";

import AddDT from "../components/AddDT";
import SubDT from "../sub/page";
import Style from "../page.module.css";
import NavBar from "../components/NavBar";
const Add = () => {
  return (
    <>
      {" "}
      <NavBar />
      <div className={Style.center}>
        <AddDT />
      </div>
    </>
  );
};

export default Add;

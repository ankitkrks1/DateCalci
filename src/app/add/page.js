"use client";

import Typography from "@mui/material/Typography";

import AddDT from "../components/AddDT";
import SubDT from "../sub/page";
import Style from "../page.module.css";

const Add = () => {
  return (
    <>
      {" "}

      <div className={Style.center}>
        <AddDT />
      </div>
    </>
  );
};

export default Add;

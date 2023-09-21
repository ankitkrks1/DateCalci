
"use client"
import ValuesToCal from "../components/ValuesToCal";
import { useState } from "react";
import DateInput from "../components/DateInput";
import dayjs from "dayjs";
import Button from "../components/Button";
import styles from "./adddt.module.css";
import Typography from "@mui/material/Typography";

const DiffDT = () => {
  const [formValues, setFormValues] = useState({
    Date: "",
    Month: "",
    Year: "",
    H: "",
    M: "",
    S: "",
  });

  const date = Date.now();
  const [value, setValue] = useState(dayjs(date));
  const [value2, setValue2] = useState(dayjs(date));

  const [diff, setDiff] = useState({
    Y: "0",
    M: "0",
    Dt: "0",
    h: "0",
    min: "0",
    s: "0",
  });

  const [conv, setConv] = useState("");

  const handleSub = () => {
    const D = new Date(value);
    const d = new Date(value2);
   
    const Y = Math.abs(D.getFullYear() - d.getFullYear());
    const M =Math.abs( D.getMonth() - d.getMonth());
    const Dt = Math.abs(D.getDate() - d.getDate());

    const min =  Math.abs(D.getMinutes() - d.getMinutes());
    const h = Math.abs(D.getHours() - d.getHours());
    const s = Math.abs(D.getSeconds() - d.getSeconds());

    // console.log(Y,M,Dt,h,min,s)
    setDiff(prevS =>{
        return ({ Y, M, Dt, h, min, s })
    });
    console.log({ Y, M, Dt, h, min, s });
  };
  return (
    <>
  <Typography variant="h2" gutterBottom>
    Diff Date -
  </Typography>
  <div className={styles.container}>
    {/* First Element - Full Width with Padding */}
    <div className={styles.fullWidthWithPadding}>
      <DateInput
        label={"Enter Date & Time"}
        value={value}
        setValue={setValue}
      />
    </div>

    {/* Second Element - Full Width with Padding */}
    <div className={styles.fullWidthWithPadding}>
      <DateInput
        label={"Enter Date & Time"}
        value={value2}
        setValue={setValue2}
      />
    </div>

    {/* Last Element - Centered */}
    <div className={styles.centered}>
      <Button name={"Subtract"} onClick={handleSub} />
    </div>
  </div>
  <Typography variant="h4" gutterBottom>
    {`${diff.Y} Years - ${diff.M} Months - ${diff.Dt} Days - ${diff.h} Hours - ${diff.min} Mins - ${diff.s} Seconds`}
  </Typography>
</>
  );
};

export default DiffDT;

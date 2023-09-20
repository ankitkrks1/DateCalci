import DateInput from "./DateInput";
import dayjs from "dayjs";
import { useState } from "react";

import styles from '../page.module.css'
import Typography from "@mui/material/Typography";
import Button from './Button'

const IST2BST = () => {
  const date = Date.now();
  const [value, setValue] = useState(dayjs(date));
  const [conv, setConv] = useState();

  const ist2bst = (val) => {
    const conv = val.toLocaleString();
    const ts = Date.parse(val);
    const nD = new Date(ts);
    const bst = nD.toLocaleString("en-US", { timeZone: "Europe/London" });
    // console.log(Date.parse(bst))
    setConv(bst + " BST");
  };
  return (
    <div className={styles.gridContainer}>
    <div className={styles.gridItem}>
      <DateInput label={"IST"} value={value} setValue={setValue} />
    </div>
    <div className={styles.gridItem}>
      <Button name={"IST-2-BST"} onClick={() => ist2bst(value)} />
    </div>
    {/* This div takes two columns */}
    <div className={`${styles.gridItem} ${styles.doubleWidth}`}>
      <Typography variant="h4" gutterBottom>
        {conv}
      </Typography>
    </div>
  </div>
  );
};

export default IST2BST;

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

  const bst2ist = (val) => {
    const conv = val.toLocaleString();
    const ts = Date.parse(val);
    const nD = new Date(ts);
    const istOffsetMinutes = 330; // 5 hours and 30 minutes

    // Check if the BST date falls within the DST period
  const bstYear = nD.getFullYear();
  const dstStart = new Date(`03/31/${bstYear} 01:00:00 GMT+0000`);
  const dstEnd = new Date(`10/31/${bstYear} 01:00:00 GMT+0000`);

  if (nD >= dstStart && nD < dstEnd) {
    // BST is in DST, so apply the DST offset
    nD.setMinutes(nD.getMinutes() + 330 + 60 -60 -60); // 5 hours and 30 minutes + 1 hour DST
  } else {
    // BST is not in DST, apply the regular IST offset
    nD.setMinutes(nD.getMinutes() + 330); // 5 hours and 30 minutes
  }
    
  // Apply the offset to the BST Date object
    // nD.setMinutes(nD.getMinutes() + istOffsetMinutes);
    const bst = nD.toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
    console.log(nD)
    setConv(bst + " IST");
  };
  return (
    <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <DateInput label={"BST"} value={value} setValue={setValue} />
        </div>
        <div className={styles.gridItem}>
          <Button name={"BST-2-IST"} onClick={() => bst2ist(value)} />
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

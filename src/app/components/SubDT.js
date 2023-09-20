import ValuesToCal from "../components/ValuesToCal";
import { useState } from "react";
import DateInput from "../components/DateInput";
import dayjs from "dayjs";
import Button from "../components/Button";
import styles from "./adddt.module.css";
import Typography from "@mui/material/Typography";

const SubDT = () => {
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
  const [conv, setConv] = useState("");

  const handleSub = () => {
    const inputDate = new Date(value);
    inputDate.setFullYear(
      parseInt(inputDate.getFullYear()) - parseInt(formValues.Year)
    );
    inputDate.setMonth(
      parseInt(inputDate.getMonth()) - parseInt(formValues.Month)
    );
    inputDate.setDate(
      parseInt(inputDate.getDate()) - parseInt(formValues.Date)
    );
    inputDate.setHours(parseInt(inputDate.getHours()) - parseInt(formValues.H));
    inputDate.setMinutes(
      parseInt(inputDate.getMinutes()) - parseInt(formValues.M)
    );
    inputDate.setSeconds(
      parseInt(inputDate.getSeconds()) - parseInt(formValues.S)
    );
    setConv(inputDate.toLocaleString());
    console.log(inputDate);
  };
  return (
    <>
    <Typography variant="h2" gutterBottom>
      Sub Date -
      </Typography>
      <div className={styles.container}>
        {/* First Element - Full Width */}
        <div className={styles.fullWidth}>
          <DateInput label={"Enter Date & Time"} value={value} setValue={setValue} />
        </div>

        {/* Second Element - As It Is */}
        <div>
          <ValuesToCal setFormValues={setFormValues} />
        </div>

        {/* Last Element - Centered */}
        <div className={styles.centered}>
          <Button name={"Subtract"} onClick={handleSub} />
        </div>
      </div>

      <Typography variant="h4" gutterBottom>
        {conv}
      </Typography>
    </>
  );
};

export default SubDT;

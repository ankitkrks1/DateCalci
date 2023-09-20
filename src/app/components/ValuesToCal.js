
import dayjs from "dayjs";
import { useState } from "react";
import Input from './Input'
import styles from '../page.module.css'

const ValuesToCal = ({formValues, setFormValues}) =>{
    const date = Date.now();
    const [value, setValue] = useState(dayjs(date));

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    };
  
    
    return (
        <div className={styles.gridContainerAdd}>
        
        <Input label={'Date'} name="Date" onChange={handleInputChange} />
      <Input label={'Month'} name="Month" onChange={handleInputChange} />
      <Input label={'Year'} name="Year" onChange={handleInputChange} />
      <Input label={'H'} name="H" onChange={handleInputChange} />
      <Input label={'M'} name="M" onChange={handleInputChange} />
      <Input label={'S'} name="S" onChange={handleInputChange} />
      </div>
    )
}

export default ValuesToCal
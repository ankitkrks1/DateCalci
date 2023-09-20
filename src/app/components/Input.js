import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({onChange,label,name}) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" name={name} label={label} variant="outlined" onChange={onChange} type='number' sx={{width:"auto"}} required={true} />
      
    </Box>
  );
}
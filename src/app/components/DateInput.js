"use client";
import * as React from "react";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export default function DateTimeFieldValue({label, value, setValue }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateTimeField", "DateTimeField"]} >
        <DateTimePicker
          label={label}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

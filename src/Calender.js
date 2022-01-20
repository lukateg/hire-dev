import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "./context";

const Calender = () => {
  const { getDateRange } = useGlobalContext();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    // const range = getDateRange(start, end);
    getDateRange(start, end);
  };
  // function getDateRange(date1, date2) {
  //   return new Date(date2 - date1).getDate();
  // }
  // const day1 = startDate;

  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      minDate={new Date()}
      selectsRange
      inline
    />
  );
};
export default Calender;

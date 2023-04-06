import React from "react";
import { useState, useContext } from "react";
import { DataContext } from "../Contexts/DataContext";
import AddInput from "./AddInput";

function WeekDay(props) {
  const { dummyData, setDummyData } = useContext(DataContext);
  console.log(dummyData.weekLogs);

  function addLog() {
    console.log("add log");
  }
  return (
    <div className="day-card">
      <p>{props.day}</p>

      {dummyData.weekLogs.map(
        (log, index) => log.day == props.day && <p key={index}>{log.task}</p>
      )}
      <AddInput action={addLog} txt="Add week log..." />
    </div>
  );
}

export default WeekDay;

import React from 'react'
import { useContext } from "react";
import { DataContext } from "../Contexts/DataContext";
import AddInput from './AddInput';
import Task from './Task';

function TodoComponent() {
    const { dummyData, setDummyData } = useContext(DataContext);

  function addTask() {
    console.log("add task");
  }

  function deleteTask() {
    console.log("delete task");
  }
  return (
    <div className='todo-container'>
        <h3>To Do</h3>
       
      {dummyData.todos.map(
        (task, index) => <Task {...task} action={deleteTask} key={index} />
      )}
      <AddInput action={addTask} txt="Add task..." />
    </div>
  )
}

export default TodoComponent
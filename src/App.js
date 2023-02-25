
import React, { useState } from "react";
import AddForm from "./components/AddForm";
import UpdateForm from "./components/UpdateForm";
import  ToDo from "./components/ToDO"
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  const [toDo, setToDo] = useState([
    // { id: 1, title: "first", status: false },
    // { id: 2, title: "second", status: false },
  ]);

  //temp state
  const [newTask, setNewTask] = useState(""); //for using hold temp. data
  const [updateTask, setUpdateTask] = useState(""); //update data

  //addtask
  const addTask = () => {
    if(newTask){
      const count = toDo.length + 1;
      const newobj = {id:count , title: newTask, status: false}
      // update value of toDo
      setToDo([...toDo,newobj]); 
      //  task will be empty */}
      setNewTask('');
    }
  };
  //for delete task
  const deleteTask = (id) => {
    const newTask = toDo.filter(task => task.id !== id)
    setToDo(newTask);
  };
  // mark task done
  const markTask = (id) => {
    const newTask= toDo.map(task=>{
      if(task.id === id){
        return({...task, status:!task.status})
      }
      return task;
    })
    setToDo(newTask);
  };
  //cancel update
  const cancelUpdateTask = () => {
    setUpdateTask('');
  };

  //change task for update
  const changeTask = (e) => {
    let newTask ={
      id:updateTask.id,
      title:e.target.value,
      status:updateTask.status? true : false, 
    }
    setUpdateTask(newTask);
  };

  //update task
  const update = () => {
    let records= [...toDo].filter(task => task.id !== updateTask.id);
    let updatedRecords= [...records,updateTask]
    setToDo(updatedRecords);
    setUpdateTask('');
  };

  return (
    <div className="container App">
      <h2>To Do List App</h2>
      {updateTask && updateTask ?
        (<UpdateForm
          updateTask={updateTask}
          cancelUpdateTask={cancelUpdateTask}
          update={update} 
          changeTask={changeTask}/>)
          :
          (<AddForm
          newTask={newTask} 
           setNewTask = {setNewTask}
            addTask ={addTask}
          />)}

      {/*display todo*/}
      {toDo && toDo.length ? "" : "task is not added...!"}
            <ToDo
            toDo={toDo}
            markTask={markTask} 
            setUpdateTask={setUpdateTask}
            deleteTask={deleteTask}
            />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
//import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Homepage from './components/Homepage';
import AddTask from './components/AddTask';
import AllTasks from './components/AllTasks';
import Favourites from './components/Favourites';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {

  const [fields, setFields] = useState({
    taskName: '',
    taskDesc: '',
    taskDate: '',
    favourite: false,
  })

  const [list, setList] = useState([]);

  useEffect(() => {
    let listOfTask = JSON.parse(localStorage.getItem("tasks"));

    if (listOfTask === null || listOfTask === undefined){
      localStorage.setItem("tasks", ["No task added"]);
    }else{
      setList((JSON.parse(localStorage.getItem("tasks"))))
    }
    
  },[]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(list));
  },[list]);

  function AddField(event) {

    let { value, name } = event.target;

    if(name === "favourite"){
      if (document.getElementById('favourite').checked){
        value = true;
      }else{
        value = false;
      }
    }

    setFields((preValue) => {
      return {
        ...preValue,
        [name]: value
      }
    })
  }

  function AddList(event){
    event.preventDefault();
    if (fields.taskName === ''){
      alert('Task Name is required');
      return false;
    }
    if (fields.taskDate === '') {
      alert('Task Date is required');
      return false;
    }

    setList((oldVal) => {
      return [...oldVal, fields]
    })
    
    // if(list.length !== 0){
    //   setList((oldVal) => {
    //     return [...oldVal, fields]
    //   })
    // }else{
    //   setList(fields)
    // }
    
    setFields({
      taskName: '',
      taskDesc: '',
      taskDate: '',
      favourite: false,
    })

    if(document.getElementById('favourite').checked) {
      document.getElementById('favourite').checked = false;
    }

    //addToLocalStorage()
    alert('New task has been added successfully');
    //console.log(list);
  }

  // function addToLocalStorage(){
  //   localStorage.setItem("tasks", JSON.stringify(list));
  // }


  return (
    <div className="main_wrapper">
      <div className='wrapper_side_main'>
        <Sidebar />
        <div className="main">
          {/* <Header /> */}

          <Switch>
            <Route exact path='/'><Homepage taskList={list} /></Route>
            <Route exact path='/favourites'><Favourites taskList={list} /></Route>
            <Route exact path='/add-task'><AddTask field={fields} setFields={AddField} setList={AddList}/></Route>
            <Route exact path='/all-tasks'><AllTasks taskList={list} /></Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;

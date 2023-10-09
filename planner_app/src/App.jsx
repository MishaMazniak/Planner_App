import React from "react"
import {useState, useEffect} from "react"
import NavBar from "./components/NavBar/NavBar"
import TaskForm from "./components/TaskForm/TaskForm"
import AllTasks from "./components/AllTasks/AllTasks"
import "./App.scss"

function App() {
  const [tasks, setTasks] = useState([])
  // Get all tasks from dataBase (Firebase)
  useEffect(() => {
    fetch(
      "https://planner-cd1a2-default-rtdb.europe-west1.firebasedatabase.app/myTasks.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const tasksArrey = []
        for (const key in data) {
          tasksArrey.push({...data[key], id: key})
        }
        setTasks(tasksArrey)
      })
  }, [tasks])
  return (
    <>
      <NavBar></NavBar>
      <TaskForm></TaskForm>
      <AllTasks tasks={tasks}></AllTasks>
    </>
  )
}

export default App

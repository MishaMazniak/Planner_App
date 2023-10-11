import React from "react"
import {useState, useEffect} from "react"
import NavBar from "./components/NavBar/NavBar"
import TaskForm from "./components/TaskForm/TaskForm"
import AllTasks from "./components/AllTasks/AllTasks"
import {Routes, Route} from "react-router-dom"
import AboutUs from "./components/AboutUs"
import NotFound from "./components/NotFound"
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
      <Routes>
        <Route path="/" element={<AllTasks tasks={tasks}></AllTasks>}></Route>
        <Route
          path="/AllTasks/AllTasks"
          element={<AllTasks tasks={tasks}></AllTasks>}
        ></Route>
        <Route path="/AboutUs" element={<AboutUs></AboutUs>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  )
}

export default App

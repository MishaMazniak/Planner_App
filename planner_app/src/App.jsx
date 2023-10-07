import React from "react"
import {useState, useEffect} from "react"
import NavBar from "./components/NavBar/NavBar"
import NewTask from "./components/NewTask/NewTask"
// import AllTasks from "./components/NavBar/AllTasks/AllTasks"
import TaskToday from "./components/TaskToday/TaskToday"
import {useDispatch} from "react-redux"
import {addTask} from "./redux/task"
import "./App.scss"

function App() {
  const dispatch = useDispatch()
  const [tasks, setTasks] = useState([])
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

        tasksArrey.forEach((task) => {
          dispatch(
            addTask({
              myTask: task.task,
              date: task.date,
              id: task.id,
              idDate: task.idDate,
              status: task.status
            })
          )
        })
      })
  }, [])
  return (
    <>
      <NavBar></NavBar>
      <NewTask></NewTask>
      <TaskToday tasks={tasks}></TaskToday>
      {/* <AllTasks></AllTasks> */}
    </>
  )
}

export default App

import "./taskForm.scss"
import React from "react"
import {useState, useEffect} from "react"
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import {addTask} from "../../redux/task"

const NewTask = React.memo(() => {
  const dispatch = useDispatch()
  // Start input data
  const [taskInput, setTaskInput] = useState("")
  const [dateInput, setDateInput] = useState("")
  // Data task from redux
  const editTaskRedux = useSelector((state) => state.task.myTask)
  const editDateRedux = useSelector((state) => state.task.date)
  const idTaskRedux = useSelector((state) => state.task.id)
  // Add data redax in state
  const [editTaskInput, setEditTaskInput] = useState(editTaskRedux)
  const [editDateInput, setEditDateInput] = useState(editDateRedux)
  const [newIdTask, setNewIdTask] = useState(idTaskRedux)

  useEffect(() => {
    setEditTaskInput(editTaskRedux)
    setEditDateInput(editDateRedux)
    setNewIdTask(idTaskRedux)
  }, [editTaskRedux, editDateRedux])

  // Submit for input form (add new task in database (Firebase))
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(
      "https://planner-cd1a2-default-rtdb.europe-west1.firebasedatabase.app/myTasks.json",
      {
        method: "POST",
        body: JSON.stringify({
          task: taskInput,
          date: dateInput,
          status: "dontDone"
        })
      }
    )
    // Clear inputs
    setTaskInput("")
    setDateInput("")
  }

  // Edit data in task
  function correctTask(e) {
    e.preventDefault()
    fetch(
      `https://planner-cd1a2-default-rtdb.europe-west1.firebasedatabase.app/myTasks/${newIdTask}.json`,
      {
        method: "PUT",
        body: JSON.stringify({
          task: editTaskInput,
          date: editDateInput,
          status: "dontDone"
        })
      }
    )
    // Clear inputs
    setEditTaskInput("")
    setEditDateInput("")

    // Clear data in redux
    dispatch(
      addTask({
        myTask: "",
        date: "",
        id: ""
      })
    )
  }
  return (
    <div className="input-task ">
      {editTaskInput === "" ? (
        <form className="row my-5" onSubmit={handleSubmit}>
          <div className="col-md-5 col-sm-12 my-2 offset-md-1">
            <input
              type="text"
              className="form-control border-primary"
              placeholder="Your task"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              required
            ></input>
          </div>
          <div className="col-md-3 col-sm-12 my-2">
            <input
              type="date"
              className="form-control border-primary"
              placeholder="Username"
              value={dateInput}
              onChange={(e) => setDateInput(e.target.value)}
              required
            ></input>
          </div>
          <button
            className="btn btn-success col-md-1 col-sm-12 my-2"
            type="submit"
          >
            Add
          </button>
        </form>
      ) : (
        <form className="row my-5" onSubmit={correctTask}>
          <span className="fs-6">Edit your task</span>
          <div className="col-md-5 col-sm-12 my-2 offset-md-1">
            <input
              type="text"
              className="form-control border-primary"
              placeholder="Your task"
              value={editTaskInput}
              onChange={(e) => setEditTaskInput(e.target.value)}
            ></input>
          </div>
          <div className="col-md-3 col-sm-12 my-2">
            <input
              type="date"
              className="form-control border-primary"
              placeholder="Username"
              value={editDateInput}
              onChange={(e) => setEditDateInput(e.target.value)}
            ></input>
          </div>
          <button
            className="btn btn-success col-md-1 col-sm-12 my-2"
            type="submit"
          >
            Change
          </button>
        </form>
      )}
    </div>
  )
})
export default NewTask

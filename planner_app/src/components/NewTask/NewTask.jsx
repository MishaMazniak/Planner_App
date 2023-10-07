import "./newTask.scss"
import React, {useState} from "react"

function NewTask() {
  const [taskInput, setTaskInput] = useState("")
  const [dateInput, setDateInput] = useState("")

  const d = new Date(dateInput)
  const idDate = d.getTime()

  const handleSubmit = (e) => {
    // e.preventDefault()
    fetch(
      "https://planner-cd1a2-default-rtdb.europe-west1.firebasedatabase.app/myTasks.json",
      {
        method: "POST",
        body: JSON.stringify({
          task: taskInput,
          date: dateInput,
          idDate: idDate,
          status: "dontDone"
        })
      }
    )
    // Clear inputs
    setTaskInput("")
    setDateInput("")
    console.log(idDate)
  }
  return (
    <div className="input-task ">
      <form className="row my-5" onSubmit={handleSubmit}>
        <div className="col-md-5 col-sm-12 my-2 offset-md-1">
          <input
            type="text"
            className="form-control border-primary"
            placeholder="Your task"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          ></input>
        </div>
        <div className="col-md-3 col-sm-12 my-2">
          <input
            type="date"
            className="form-control border-primary"
            placeholder="Username"
            value={dateInput}
            onChange={(e) => setDateInput(e.target.value)}
          ></input>
        </div>
        <button
          className="btn btn-primary col-md-1 col-sm-12 my-2"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  )
}
export default NewTask

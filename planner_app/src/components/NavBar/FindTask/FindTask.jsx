import "./findTask.scss"
import React from "react"
import {useState} from "react"
import {useDispatch} from "react-redux"
import {addDate} from "../../../redux/date"

function FindTask() {
  const dispatch = useDispatch()
  const [dateFind, setDateFind] = useState("")

  // Transfer date in AllTasks and TaskToday
  function addDateTask() {
    if (dateFind === "") alert("Select a date")
    else {
      dispatch(
        addDate({
          date: dateFind
        })
      )
      // Clear inputs
      setDateFind("")
    }
  }
  return (
    <>
      <input
        className="border-primary rounded-4 me-3"
        type="date"
        value={dateFind}
        onChange={(e) => setDateFind(e.target.value)}
      ></input>
      <button className="btn btn-success" onClick={addDateTask}>
        Find task ...
      </button>
    </>
  )
}
export default FindTask

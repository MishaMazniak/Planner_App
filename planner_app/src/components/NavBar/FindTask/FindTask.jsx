import "./findTask.scss"
import React from "react"
import {useState} from "react"
import {useDispatch} from "react-redux"
import {addDate} from "../../../redux/date"

function FindTask() {
  const dispatch = useDispatch()
  const [dateFind, setDateFind] = useState("")

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
        className="form-control ms-5"
        type="date"
        value={dateFind}
        onChange={(e) => setDateFind(e.target.value)}
      ></input>
      <button
        className="form-control btn btn-outline-primary my-1"
        onClick={addDateTask}
      >
        Find a task ...
      </button>
    </>
  )
}
export default FindTask

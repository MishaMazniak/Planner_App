import del from "../../assets/delete-icon.png"
import done from "../../assets/done-icon.png"
import dontDone from "../../assets/dont-done-icon.png"
import edit from "../../assets/edit-icon.png"
import transfer from "../../assets/transfer-icon.png"
import {useSelector} from "react-redux"
import React, {useState} from "react"
import "./taskToday.scss"

function TaskToday(props) {
  const dateTodayRedux = useSelector((state) => state.task.date)
  const taskRedux = useSelector((state) => state.task.myTask)

  function delTask(id) {
    fetch(
      `https://planner-cd1a2-default-rtdb.europe-west1.firebasedatabase.app/myTasks/${id}.json`,
      {
        method: "DELETE"
      }
    )
  }
  function statusTask(id) {
    console.log(id)
  }
  return (
    <div className="my-tasks">
      {props.tasks.map((el) => (
        <div className="position-relative wrap-task my-5">
          <span>{el.date}</span>
          <img
            src={del}
            alt="img-x"
            id={el.id}
            className="position-absolute top-0 end-0 img-del"
            onClick={(e) => delTask(e.target.id)}
          ></img>
          <img
            src={dontDone}
            alt="img-done"
            className="position-absolute top-0 start-0 img-done"
            onClick={(e) => statusTask(e.target.src)}
          ></img>
          <img
            src={edit}
            alt="img-edit"
            className="position-absolute bottom-0 start-0 img-edit"
          ></img>
          <img
            src={transfer}
            alt="img-transfer"
            className="position-absolute bottom-0 end-0 img-transfer"
          ></img>
          <p className="text-task">{el.task}</p>
        </div>
      ))}
    </div>
  )
}
export default TaskToday

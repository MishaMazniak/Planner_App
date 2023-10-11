import del from "../../../assets/delete-icon.png"
import done from "../../../assets/done-icon.png"
import dontDone from "../../../assets/dont-done-icon.png"
import edit from "../../../assets/edit-icon.png"
import React from "react"
import {useDispatch} from "react-redux"
import {addTask} from "../../../redux/task"
import {useSelector} from "react-redux"
import "./taskToday.scss"

function TaskToday(props) {
  const dispatch = useDispatch()
  // Date from input in FindTask and ListTasks for sorting tasks by date
  const dateForSaveRedux = useSelector((state) => state.date.date)

  // Transfer data to input in TaskForm
  function editTask(el) {
    dispatch(
      addTask({
        myTask: el.task,
        date: el.date,
        id: el.id
      })
    )
  }
  return (
    <div className="row my-tasks">
      {props.tasks.map((el) =>
        dateForSaveRedux === el.date ? (
          <div key={el.id} className="position-relative my-3 mx-3 wrap-task">
            <span>{el.date}</span>
            <img
              src={del}
              alt="img-x"
              id={el.id}
              className="position-absolute top-0 end-0 img-del"
              onClick={(e) => props.delTask(e.target.id)}
            ></img>
            {el.status === "dontDone" ? (
              <img
                src={dontDone}
                alt="img-dontDone"
                className="position-absolute top-0 start-0 img-done"
                onClick={() => props.statusTask(el)}
              ></img>
            ) : (
              <img
                src={done}
                alt="img-dont"
                id={el.id}
                className="position-absolute top-0 start-0 img-done"
                onClick={(e) => statusTask(e.target.id)}
              ></img>
            )}
            <img
              src={edit}
              alt="img-edit"
              className="position-absolute bottom-0 start-50 translate-middle-x img-edit"
              onClick={() => editTask(el)}
            ></img>
            <p className="text-task">{el.task}</p>
          </div>
        ) : null
      )}
    </div>
  )
}
export default TaskToday

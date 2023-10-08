import "./allTasks.scss"
import React from "react"
import done from "../../assets/done-icon.png"
import dontDone from "../../assets/dont-done-icon.png"
import del from "../../assets/delete-icon.png"
import TaskToday from "./TaskToday/TaskToday"
import {useSelector} from "react-redux"
import {useDispatch} from "react-redux"
import {addDate} from "../../redux/date"

function AllTasks(props) {
  const dispatch = useDispatch()
  const dateForChangePaigRedux = useSelector((state) => state.date.date)

  // sort the tasks by date
  const sortedTasks = props.tasks.slice().sort((a, b) => {
    return new Date(a.date) - new Date(b.date)
  })
  // Delete task past clicked on "X"
  function delTask(id) {
    fetch(
      `https://planner-cd1a2-default-rtdb.europe-west1.firebasedatabase.app/myTasks/${id}.json`,
      {
        method: "DELETE"
      }
    )
  }
  // Show the tasks on this day
  function choosedDay(date) {
    dispatch(
      addDate({
        date: date
      })
    )
  }
  return (
    <div className="tasks">
      {dateForChangePaigRedux === "" ? (
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th scope="col">Task</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {sortedTasks.map((el) => (
              <tr key={el.id} className="task">
                <td onClick={() => choosedDay(el.date)}>{el.task}</td>
                <td onClick={() => choosedDay(el.date)}>{el.date}</td>
                {el.status === "dontDone" ? (
                  <td>
                    <img
                      src={dontDone}
                      alt="img-dontDone"
                      className="img-done"
                    ></img>
                    <img
                      src={del}
                      alt="img-del"
                      id={el.id}
                      className="img-done"
                      onClick={(e) => delTask(e.target.id)}
                    ></img>
                  </td>
                ) : (
                  <td>
                    <img src={done} alt="img-done" className="img-done"></img>
                    <img
                      src={del}
                      alt="img-del"
                      id={el.id}
                      className="img-done"
                      onClick={(e) => delTask(e.target.id)}
                    ></img>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <TaskToday tasks={props.tasks} delTask={delTask}></TaskToday>
      )}
    </div>
  )
}
export default AllTasks

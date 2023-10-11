import "./allTasks.scss"
import React from "react"
import TaskToday from "./TaskToday/TaskToday"
import ListTasks from "./ListTasks/ListTasks"
import {useSelector} from "react-redux"

function AllTasks(props) {
  // Date from input in FindTask or clicked in ListTasks
  const dateForChangePaigRedux = useSelector((state) => state.date.date)

  // Delete task for page ListaTasks and TaskToday
  function delTask(id) {
    let askDel = confirm("You really want to delete task?")
    if (askDel) {
      fetch(
        `https://planner-cd1a2-default-rtdb.europe-west1.firebasedatabase.app/myTasks/${id}.json`,
        {
          method: "DELETE"
        }
      )
    }
  }
  // Change color icon status
  function statusTask(el) {
    fetch(
      `https://planner-cd1a2-default-rtdb.europe-west1.firebasedatabase.app/myTasks/${el.id}.json`,
      {
        method: "PUT",
        body: JSON.stringify({
          task: el.task,
          date: el.date,
          status: "done"
        })
      }
    )
  }
  return (
    <div className="tasks">
      {dateForChangePaigRedux === "" ? (
        <ListTasks
          tasks={props.tasks}
          delTask={delTask}
          statusTask={statusTask}
        ></ListTasks>
      ) : (
        <TaskToday
          tasks={props.tasks}
          delTask={delTask}
          statusTask={statusTask}
        ></TaskToday>
      )}
    </div>
  )
}
export default AllTasks

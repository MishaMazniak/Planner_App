import done from "../../../assets/done-icon.png"
import dontDone from "../../../assets/dont-done-icon.png"
import del from "../../../assets/delete-icon.png"
import {useDispatch} from "react-redux"
import {addDate} from "../../../redux/date"

function ListTasks(props) {
  const dispatch = useDispatch()
  // Sort the tasks by date
  const sortedTasks = props.tasks.slice().sort((a, b) => {
    return new Date(a.date) - new Date(b.date)
  })
  // Show the tasks on this day
  function choosedDay(date) {
    dispatch(
      addDate({
        date: date
      })
    )
  }
  return (
    <>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th scope="col">Tasks</th>
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
                    onClick={() => props.statusTask(el)}
                  ></img>
                  <img
                    src={del}
                    alt="img-del"
                    id={el.id}
                    className="img-done"
                    onClick={(e) => props.delTask(e.target.id)}
                  ></img>
                </td>
              ) : (
                <td>
                  <img
                    src={done}
                    alt="img-done"
                    className="img-done"
                    onClick={() => props.statusTask(el)}
                  ></img>
                  <img
                    src={del}
                    alt="img-del"
                    id={el.id}
                    className="img-done"
                    onClick={(e) => props.delTask(e.target.id)}
                  ></img>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default ListTasks

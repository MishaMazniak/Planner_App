import done from "../../../assets/done-icon.png"
import "./allTasks.scss"

function AllTasks() {
  return (
    <div className="row wrap-tasks">
      <span>date</span>
      <div className="col-md-6 col-lg-6 offset-lg-3 block-tasks">
        <div className="position-relative my-task">
          <div className="text-task">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates beatae
            </p>
          </div>
          <img
            src={done}
            alt="img-done"
            className="position-absolute top-0 end-0 img-done"
          ></img>
        </div>
      </div>
    </div>
  )
}
export default AllTasks

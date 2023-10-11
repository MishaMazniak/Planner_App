import logo from "../../assets/planner-logo.png"
import FindTask from "./FindTask/FindTask"
import {useDispatch} from "react-redux"
import {addDate} from "../../redux/date"
import {Link} from "react-router-dom"
import "./navBar.scss"

function NavBar() {
  const dispatch = useDispatch()
  // Clear date in redux for show all tasks
  function allTasks() {
    dispatch(
      addDate({
        date: ""
      })
    )
  }
  return (
    <div className="my-nav-style border border-primary">
      <nav className="navbar navbar-expand-sm bg-body-tertiary my-nav-style">
        <div className="container-fluid">
          <Link to="../AboutUs" className="navbar-brand me-5 logo-planner">
            <img src={logo} alt="logo-shop"></img>
            Planner
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse container my-nav-style-but"
            id="navbarNavAltMarkup"
          >
            <div className="row col">
              <div className="navbar-nav col-sm-5 offset-sm-2 col-md-10 offset-md-3 col-lg-8 offset-lg-6 ps-2 my-all">
                <Link
                  to="../AllTasks/AllTasks"
                  className="btn btn-success my-3"
                  aria-current="page"
                  onClick={allTasks}
                >
                  All Tasks
                </Link>
                <div className="d-flex py-3 px-3">
                  <FindTask></FindTask>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default NavBar

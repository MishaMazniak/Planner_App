import logo from "../../assets/planner-logo.png"
import FindTask from "./FindTask/FindTask"
import "./navBar.scss"

function NavBar() {
  return (
    <div className="my-nav-style border border-primary">
      <nav className="navbar navbar-expand-sm bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand me-5">
            <img src={logo} alt="logo-shop" className="logo-planner"></img>
            Planner
          </span>
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
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <button
                className="btn btn-outline-primary mx-5 my-1"
                aria-current="page"
              >
                All Tasks
              </button>
              <div className="input-group">
                <FindTask></FindTask>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default NavBar

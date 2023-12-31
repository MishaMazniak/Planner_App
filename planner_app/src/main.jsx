import React from "react"
import ReactDOM from "react-dom/client"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.js"
import App from "./App.jsx"
import {Provider} from "react-redux"
import store from "./redux/store"
import {BrowserRouter} from "react-router-dom"
import "./index.scss"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

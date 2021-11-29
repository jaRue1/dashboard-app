import React from "react"
import "./app.css"
import Sidebar from "./components/sidebar/Sidebar.jsx"
import Topbar from "./components/topbar/Topbar.jsx"
import Home from "./pages/home/Home"
import UserList from "./pages/userList/UserList"
import { BrowserRouter as Router, Route ,Switch } from "react-router-dom"
function App() {
  return (
    <Router className="app">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/users" component={UserList}/>
        </Switch>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App

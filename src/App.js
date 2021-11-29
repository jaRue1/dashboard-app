import React from "react"
import "./app.css"
import Sidebar from "./components/sidebar/Sidebar.jsx"
import Topbar from "./components/topbar/Topbar.jsx"
function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others">Other Pages</div>
      </div>
    </div>
  )
}

export default App

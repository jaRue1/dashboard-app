import React from "react"
import "./app.css"
import Sidebar from "./components/sidebar/Sidebar.jsx"
import Topbar from "./components/topbar/Topbar.jsx"
import Home from "./pages/home/Home"
function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home/>
      </div>
    </div>
  )
}

export default App

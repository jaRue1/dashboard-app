import { BrowserRouter as Router, Route ,Switch } from "react-router-dom"
import React from "react"
import "./app.css"
import Sidebar from "./components/sidebar/Sidebar.jsx"
import Topbar from "./components/topbar/Topbar.jsx"
import Home from "./pages/home/Home"
import UserList from "./pages/userList/UserList"
import User from "./pages/user/User"
import NewUser from "./pages/newUser/NewUser"
import ProductList from "./pages/productList/ProductList"
import Product from "./pages/product/Product"
import NewProduct from "./pages/newProduct/NewProduct"

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
          <Route exact path="/user/:userId" component={User}/>
        </Switch>
        <Switch>
          <Route exact path="/newUser" component={NewUser}/>
        </Switch>
        <Switch>
          <Route exact path="/products" component={ProductList}/>
        </Switch>
        <Switch>
          <Route exact path="/product/:productId" component={Product}/>
        </Switch>
        <Switch>
          <Route exact path="/newproduct" component={NewProduct}/>
        </Switch>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App

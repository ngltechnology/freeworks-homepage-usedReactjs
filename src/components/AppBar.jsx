import React from "react"
import { Link } from "react-router-dom"

import logo from "./FREEWORKS.png"
import "./styles/Header.scss"

const AppBar = () => {
  const linkStyles = {
    textDecoration:"none",
    color: "white"
  }
  return (
    <div className="appbar">
      <div className="innerApp">
        <Link to="/"><img src={logo} alt="logo" /></Link>
        <ul>
          <Link style={linkStyles} to="/service"><li>Service</li></Link>
          <Link style={linkStyles} to="/company"><li>Company</li></Link>
          <Link style={linkStyles} to="/vision"><li>Vision</li></Link>
          <Link style={linkStyles} to="/design"><li>Design</li></Link>
        </ul>
      </div>
    </div>
  )
}
export default AppBar;

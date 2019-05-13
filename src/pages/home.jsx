import React from "react"
import { Link } from "react-router-dom"

import AppBar from "../components/AppBar.jsx"
import "./styles/home.scss"

export default () => {
  return(
    <React.Fragment>
      <AppBar />
      <div className="HomeApp">
        <div className="content">
          <div className="left">
            <Link><p>Partnerとして働く</p></Link>
          </div>
          <div className="right">
            <Link><p>法人Partnerとして依頼する</p></Link>

          </div>
        </div>
        <div className="content">
          <div className="left">
            hello
          </div>
          <div className="right">
            hello
          </div>
        </div>

        <div className="content">
          <div className="left">
          </div>
          <div className="right">
            
          </div>
        </div>

      </div>
    </React.Fragment>
  )
}

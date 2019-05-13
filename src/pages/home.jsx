import React from "react"
import { Link } from "react-router-dom"

import AppBar from "../components/AppBar.jsx"
import "./styles/home.scss"
import topimage from "../components/topimage.png"

export default () => {
  return(
    <React.Fragment>
      <AppBar />
      <div className="HomeApp">
        <img src={topimage} alt="topimage"/>
        <div className="content">
          <Link>
            <div className="left a1">
              <p>個人Partnerとして<br/>仕事を受ける</p>
            </div>
          </Link>
          <Link>
            <div className="right a2">
              <p>法人Partnerとして<br/>仕事を依頼する</p>
            </div>
          </Link>
        </div>
        <div style={{height:100}} />
      </div>
    </React.Fragment>
  )
}

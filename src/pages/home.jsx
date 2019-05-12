import React from "react"

import AppBar from "../components/AppBar.jsx"
import "./styles/home.scss"

export default () => {
  return(
    <React.Fragment>
      <AppBar />
      <div className="HomeApp">
        <div className="content">
          <div className="left">
            <button className="leftButton">Partnerとして働く</button>
                      </div>
          <div className="right">
            <button className="rightButton">法人Partnerとして依頼する</button>

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

import React from "react"
import { Link } from "react-router-dom"

import AppBar from "../components/AppBar.jsx"
import "./styles/home.scss"
import topimage from "../components/topimage.png"

import { withStyles, Card } from "@material-ui/core"
import fwmovie from "./large.MOV"

const styles = {
  card: {
    margin: "50px",
    width: "400px",
    height: "400px",
    textAlign: "center",
  }
}

const HomeApp = props => {
  const { classes } = props
  return(
    <React.Fragment>
      <AppBar />
      <div className="HomeApp">
        <video src={fwmovie} style={{width: "1000px"}} autoplay loop controls />
        <img src={topimage} alt="topimage"/>
        <div className="content">
          <Link to="/service">
            <div className="left a1">
              <Card className={classes.card}>
                <h2>個人Partnerとして<br/>仕事を受ける</h2>
              </Card>        
            </div>
          </Link>
          <Link to="/service">
            <div className="right a2">
              <Card className={classes.card}>
                <h3>法人Partnerとして<br/>仕事を依頼する</h3>
              </Card>
            </div>
          </Link>
        </div>
        <div style={{height:100}} />
      </div>
    </React.Fragment>
  )
}

export default withStyles(styles)(HomeApp);

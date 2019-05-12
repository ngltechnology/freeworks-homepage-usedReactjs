import React from "react"
import {Link} from "react-router-dom"

import logo from "./FREEWORKS.png"
import "./styles/Footer.scss"

export default () => { 
  const _renderList = (n, url, title) => {
    const styles = {
      color: "white",
      textDecoration:"none"
    }
    const lists = [
      [
        ["/servise/startup","はじめよう"],
        ["/servise/shering_economy","シェアリングエコノミー"],
        ["/servise/release_planning","リリースプラン"]
      ],
      [
        ["/company/most_precious","いちばん大切なこと"],
        ["/company/notice","ニュースリリース"],
        ["/company/blog","ブログ"]
      ],
      [
        ["/policy/privacy","プライバシーポリシー"],
        ["/policy/term","利用規約"],
        ["/policy/technology","テクノロジー"],
        ["/policy/accesibility","アクセシビリティ"]
      ]
    ]
    return (
      <React.Fragment>
        <Link style={styles} to={url}><li className="listHead">{title}</li></Link>
          {lists[n].map((list,i) => (
            <Link key={i} style={styles} to={list[0]}><li>{list[1]}</li></Link>
          ))}
      </React.Fragment>  
    )
  }

  return (
    <footer>
      <div className="innerFooter">
        <img className="logo" src={logo} alt="logo" />
        <ul className="uiLeft">
          {_renderList(0,"/servise","Servise")}
        </ul>  
        <ul className="ulCenter">
          {_renderList(1,"/company","About Us")}
				</ul>	
			  <ul className="uiRight">
          {_renderList(2,"/policy","Policy")}
        </ul>
      </div>
      <div className="footerBottom"> 
        <p>copylight: 2019 Freeworks LLC.</p>
      </div>
    </footer>
  )
}

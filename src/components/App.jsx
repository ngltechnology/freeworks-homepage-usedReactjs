import React from 'react';
import {Route} from "react-router-dom"
import '../styles/App.scss';

import Footer from "./Footer.jsx"
import Home from "../pages/home.jsx"
import Service from "../pages/servise.jsx"
import Company from "../pages/company.jsx"
import Vision from "../pages/vision.jsx"
import Design from "../pages/design.jsx"

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/service" component={Service} />
      <Route path="/company" component={Company} />
      <Route path="/vision" component={Vision} />
      <Route path="/design" component={Design} />
      <Footer />
    </div>
  );
}

export default App;

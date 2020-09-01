import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from "./Pages/Home/Home"
import Services from './Pages/Services/Services';
import Signup from './Pages/Signup/Signup';
import Products from "./Pages/Products/Products"

function App() {
  return (
    <React.Fragment >
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
 
    </React.Fragment>
  );
}

export default App;

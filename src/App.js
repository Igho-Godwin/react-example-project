import React,{Component} from 'react';

import './App.css';
import Home from './Home.js';
import Navbar from './Navbar.js';
import Contact from './Contact.js';
import About from './About.js';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
class App extends Component {

  state={
      
      nav_hail:'Wow'

  }

  changeHailing = (e) =>{

    let data = e.target.value;
    this.setState({nav_hail:data});
  }

  
  render(){
  return (
    <Router>
        <Navbar nav_hail={this.state.nav_hail} />
        <br></br>
           
       <Switch>
         <Route exact path='/'  render={(props) => <Home {...props} text={this.state.nav_hail} changeHailing={e => this.changeHailing(e)} />} />
         <Route exact path='/contact' render={(props) => <Contact {...props} text={this.state.nav_hail} />}  />
         <Route exact path='/about' render={(props) => <About {...props} text={this.state.nav_hail} />}  />
       </Switch>
  
   </Router>
  );
  }
}

export default App;

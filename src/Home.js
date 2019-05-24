import React,{Component} from 'react';

/*
import logo from './logo.svg';
import './App.css';
*/

class Home extends Component {
  
  
  render(){
  return (
  
        <div>
          {this.props.text} THIS IS THE HOME PAGE
          <br></br><br></br>
          <div>
            Change Hailing &nbsp; <input type='text' ref='hailing' placeholder='Hailing'  onKeyUp={this.props.changeHailing} />
          </div> 
        </div>
  );
  }
}

export default Home;

import React,{Component} from 'react';
import './App.css';


class About extends Component {
  
  
  render(){
      
     return (
        <div>
          <h1>{this.props.text} This is About Us Page </h1>
        </div>
      );
  }
}

export default About;



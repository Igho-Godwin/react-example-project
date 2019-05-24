import React,{Component} from 'react';



class Navbar extends Component {
  
  
  render(){
     return (

       <div>
         <a href='/'>Home</a>
         &nbsp; &nbsp;
          <a href='/contact'>Contact us</a>
          &nbsp; &nbsp;
          <a href='/about'>About us</a>
          
       </div>

    );

  }
}

export default Navbar;

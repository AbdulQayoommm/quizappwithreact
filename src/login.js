import React from 'react';
import Image from './'

class Login extends React.Component{
    constructor(){
        super();
    }
    render(){

        return (

            <div>

<nav>
    <div class="nav-wrapper">
      <a className = "quizheading">Quiz App</a>
      <ul class="right hide-on-med-and-down">
     
        <li ><a class="waves-effect1" onClick = {this.props.onclick()}>Login with Facebook</a></li>
      </ul>
    </div>
    
  </nav>
  <br></br>  <br></br>  <br></br>
  {/* <div className="h-zigzag">
<h1 className="h1">Online Quiz App</h1>
  </div > */}
  <h3 style = {{textAlign : "center"}}>Welcome to Quiz App</h3>
            </div>
        )
    }
}
export default Login
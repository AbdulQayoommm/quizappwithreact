import React from 'react';
import './App.css';

class Quiz extends React.Component{
constructor(){
  super()
  this.state ={
    newAnswer : '',
    disabled : true
  }
}
render(){
 
let {state} = this.props;
let {allAnswer,newquestion,questionNo,select} = state;
  return (
    
  <div className= 'App'>
    <div class="nav-wrapper">
      <span className="a1">Quiz APP</span>
      <ul class="right hide-on-med-and-down">
    {console.log(state ,this.state.disabled)}
     
      </ul>
    </div>
    <div className="quizcenterdiv">
   <h3>{state.Time}</h3>
   <div className = "questiondiv">
<span className="quizspan">{questionNo + 1} )  </span>
{<label className="lable1" >{newquestion}</label>}
</div>
<br />
<div className= "radiodiv">
{allAnswer.map((value,index)=> 
  <p style = {{}} key = {index}>
    <div className="radio">
  <label >
  {index + 1}<input className="with-gap" name="group3" value={value} type="radio"
    onClick= {(e)=>{ this.setState({newAnswer : e.target.value,
      disabled : false,
    })
    e.target.checked = true
    }}
    />
    <span>{value}</span>
  </label>
  </div>
</p>
)}
</div>
<input class="btn waves-effect " disabled = {this.state.disabled} type='button' value = 'Next' onClick= {()=> {
  this.setState({
    disabled : true
  })
  this.props.onclick(this.state.newAnswer)}}/>
  </div>
</div>
  )
}
}


export default Quiz;

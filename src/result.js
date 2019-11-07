import React from 'react'

class Result extends React.Component {
    constructor(){
        super()
        this.state = {
            pass: false
        }
    }
    static getDerivedStateFromProps(props){
if(props.right > 5){
    return {
        pass : true
    }
}
    }

    render(){
        return(
            <div>
{this.state.pass ?
      <center className="effect1">
        <br>
        </br>
        <h1> <span style = {{fontSize : "70px"}}>C</span>ongratulation You are Pass</h1>
        <span className="span">Your Score </span> : <span className="span">{this.props.right* 10} %</span>
        <br />
        <span className="span"> Your Right Question </span> <span className="span"> : {this.props.right} </span>
        <br />
      </center> :
            <center className="effect1" style = {{color : "red"}}>
            <br>
            </br>
            <h3> <span style = {{fontSize : "70px"}}> S</span>orry Dear Student You are Fail</h3>
            <span className="span">Your Score </span> : <span className="span">{this.props.right* 10} %</span>
            <br />
            <span className="span"> Your Right Question </span> <span className="span"> : {this.props.right} </span>
            <br />
            <button className="waves-effect waves-light btn-small " type='button' onClick = {this.props.onclick}>Retake Quiz
{/* <i class="material-icons right">autorenew</i> */}
</button>
<br />
<button className="waves-effect waves-light btn-small " type='button' onClick = {this.props.onClick}>Logout
{/* <i class="material-icons right">autorenew</i> */}

        </button>
          </center>
}

            </div>
        )
    }
}
 
export default Result
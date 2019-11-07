import React from 'react'

class Timer extends React.Component {
    constructor(){
        super();
    }
  
    render(){
let {seconds ,minutes} = this.state

        return(
            <div>
{console.log(seconds , minutes)}
                <h5></h5>
            </div>
        )
    }
}

export default Timer
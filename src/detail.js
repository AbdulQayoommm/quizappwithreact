import React from "react";

class Detail extends React.Component {
  render() {
    return (
      <div>
        <div  className="detail" style={{  padding: "4px" }}>
        
          <div className="detail1" >       
     
            <img className='imgji'
              src={this.props.picture}
            />
            <b style={{ marginBottom: "30px" }}>{this.props.userName}</b>
          </div>
        </div>
        <center>
          <br>
          </br>
          <h3>All Detail About Quiz</h3>
          <span className="span">Passing Score </span> : 60
          <br />
          <span className="span"> Quiz Duration </span> : 10 Minutes 
          <br />
          <span className="span"> Total Queestions </span> : 10 
          <br />
          <span className="span"> No. of Attempts Allowed</span> : 1 <br />
          <br />

          <button class="waves-effect waves-light btn"  onClick={this.props.onClick()} type="submit">Start Quiz 
    {/* <i class="material-icons right">send</i> */}
  </button>
        </center>
      </div>
    );
  }
}

export default Detail;

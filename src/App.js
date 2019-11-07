import React from "react";
import "./App.css";
import { AllQuestion, loginfacebook, Timer, Logout } from "./config/functoin";
import Quiz from "./quiz";
import Login from "./login";
import Result from "./result";
import Detail from "./detail";
import { async } from "q";
// import Router from './config/router'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allquestions: "",
      questionNo: 0,
      right: 0,
      correct: "",
      allAnswer: "",
      newquestion: "",
      select: false,
      login: false,
      result: false,
      detail: false,
      time: 600
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.retake = this.retake.bind(this);
  }
  timerShow = res => {
    // alert("hi");
    setInterval(async () => {
      try {
        console.log(this.state.time);
        let time = await Timer(this.state.time);
        if (time === "0:00") {
          this.setState({
            result: false
          });
          clearInterval();
        } else {
          this.setState({
            Time: time,
            detail: false,
            time: this.state.time - 1
          });
        }
      } catch (error) {
        console.log(error);
      }
    }, 1000);
  };

  async componentDidMount() {
    let questions = await AllQuestion();
    let { questionNo } = this.state;

    questions[questionNo].incorrect_answers.push(
      questions[questionNo].correct_answer
    );
    this.setState({
      allquestions: questions,
      allAnswer: questions[questionNo].incorrect_answers,
      newquestion: questions[questionNo].question,
      correct: questions[questionNo].correct_answer
    });
  }

  next = answer => {
    let { allquestions, questionNo, right, correct } = this.state;
    if (allquestions.length === questionNo + 1) {
      this.setState({
        result: false
      });
      if (correct === answer) {
        this.setState({
          right: right + 1
        });
      }
    } else {
      console.log(answer);
      allquestions[questionNo + 1].incorrect_answers.push(
        allquestions[questionNo + 1].correct_answer
      );
      if (correct === answer) {
        this.setState({
          allAnswer: allquestions[questionNo + 1].incorrect_answers,
          questionNo: questionNo + 1,
          right: right + 1,
          newquestion: allquestions[questionNo + 1].question,
          correct: allquestions[questionNo + 1].correct_answer
        });
      } else {
        this.setState({
          allAnswer: allquestions[questionNo + 1].incorrect_answers,
          questionNo: questionNo + 1,
          newquestion: allquestions[questionNo + 1].question,
          correct: allquestions[questionNo + 1].correct_answer
        });
      }
    }
  };
  async login() {
    // alert("hi");
    let state1 = await this.state;
    try {
      let user = await loginfacebook();
      console.log(user, this.state);
      this.setState({
        userName: user.displayName,
        picture: user.photoURL,
        login: false
      });
    } catch (err) {
      console.log(err);
    }
  }
  async logout() {
    await Logout();
    await this.setState({
      login: true,
      result: true,
      detail: true
    });
  }

  retake() {
    // alert("hi ");
    this.setState({
      result: true,
      detail: false,
      questionNo: 0,
      correct: 0,
      time: 600
    });
  }
  render() {
    console.log(this.state.picture);
    let {
      login,
      questionNo,
      allAnswer,
      allquestions,
      userName,
      picture,
      result,
      detail,
      right
    } = this.state;
    console.log(questionNo);
    console.log(this.state);
    return (
      <div>
        {login ? 
          <Login onclick={() => this.login} />
        : 
          <div>
            {detail ?
              <Detail
                onClick={() => this.timerShow}
                userName={userName}
                picture={picture}
              />
            :
              <div>
                {result ? 
                  allquestions && 
                    <Quiz onclick={this.next} state={this.state} />
                  
                 : 
                  <Result
                    right={right}
                    onclick={this.retake}
                    onClick={this.logout}
                  />
                }
              </div>
            }
          </div>
      }
      {/* <Router /> */}
      </div>
    );
  }
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "../login";
import Detail from "../detail";
import Quiz from '../quiz';
import Result from '../result'

export default function BasicExample() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/detail" component={Detail} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/result" component={Result} />

      </div>
    </Router>
  );
}
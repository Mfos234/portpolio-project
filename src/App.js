import React from "react";
import "./styles.css";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h1>Home page</h1>;
}

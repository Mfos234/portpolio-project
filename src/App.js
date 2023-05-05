import React from "react";
import "./styles.css";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Typewriter from "typewriter-effect";

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
  return (
    <div>
      <h1>Welcome!</h1>
      <p>My Name is Tony Stark</p>
      <div className="bio-sentence">
        <p>I am a(n)</p>
        <Typewriter
          onInit={(typewriter) => {
            typewriter

              .typeString("strategist")
              .pauseFor(500)
              .deleteAll()
              .typeString("builder")
              .pauseFor(500)
              .deleteAll()
              .typeString("trendsetter")
              .pauseFor(500)
              .deleteAll()
              .pauseFor(500)
              .deleteAll()
              .typeString("visionary")
              .pauseFor(500)
              .deleteAll()
              .typeString("curator")
              .pauseFor(500)
              .deleteAll()
              .typeString("innovator￼")
              .start();
          }}
        />
      </div>
    </div>
  );
}

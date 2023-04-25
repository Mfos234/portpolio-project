import "./styles.css";
import { NavLink } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to my site</h1>
      <p>Check back frequently!!!</p>
      <p>This site is a Project that I am building live in front of everyone</p>
      <p>
        I am a [Insert Tech Role + Artistic Role] that is currently [Insert
        Purpose + Passion]
      </p>
      <div>
        <h3>Todo List</h3>
        <ul>
          <li>Add a Projecets Section</li>
          <li>Add an About Section</li>
          <li>Add a Contact Section</li>
          <li>Pick a CSS Theme</li>
        </ul>
      </div>
      <div>
        <h3>Experience</h3>
        <ul>
          <li>iOS Development: Swift, SwiftUI, Objective-C, XCODE</li>
          <li>Android Development: Java, Kotlin, Android Studio</li>
          <li>
            Web Development: React, Javascript, Typescript, MongoDB, Node.JS
          </li>
        </ul>
      </div>
    </div>
  );
}

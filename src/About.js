import React from "react";
import "./styles.css";

export default function About() {
  return (
    <div className="About-container">
      <div className="profile">
        <img
          src="./memoji.jpg"
          alt="profile picture"
          width="200"
          height="250"
        />
        <h1>About Me</h1>
        <p>
          I am a software engineer passionate about creating innovative and
          user-friendly solutions for the digital world. I have a strong
          background in design and aesthetics, which informs my approach to
          coding and programming. I have worked on various projects involving
          iOS, React, Android, frontend, backend, and full-stack development,
          using multiple programming languages and frameworks. Some of the use
          cases for my work include e-commerce platforms, social media apps,
          educational tools, and gaming experiences. As a web developer, I
          always seek new challenges and opportunities to learn and grow.
        </p>
      </div>

      <div>
        <h3>Experience</h3>
        <ul>
          <li>
            <b>iOS Development:</b> Swift, SwiftUI, Objective-C, XCODE
          </li>
          <li>
            <b>Android Development:</b> Java, Kotlin, Android Studio
          </li>
          <li>
            <b>Web Development:</b> React, Javascript, Typescript, MongoDB,
            Node.JS
          </li>
          <li>
            <b>UX/UI:</b> Figma, Sketch, Adobe Suite
          </li>
        </ul>
      </div>
    </div>
  );
}

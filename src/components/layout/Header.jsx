import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <>
        {" "}
        <nav class="navbar bg-dark">
          <a href="">
            <h1>DevConnector</h1>
          </a>
          <ul>
            <li>
              <a href="Profiles.html">Developers</a>
            </li>
            <li>
              <a href="Register.html">Signup</a>
            </li>
            <li>
              <a href="Login.html">Login</a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

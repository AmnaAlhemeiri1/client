import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <>
        <h1> &#169; www.eibfs.com {new Date().getFullYear()}</h1>
      </>
    );
  }
}

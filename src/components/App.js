import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, x: 0, y: 0 };
    this.handleClick = this.handleClick.bind(this);
    this.handleArrow = this.handleArrow.bind(this);
    this.r = React.createRef();
  }
  handleClick() {
    document.addEventListener("keydown", this.handleArrow);
    this.r.current = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
  }
  handleArrow(event) {
    let key = event.keyCode;
    if (key === 39) {
      this.setState({ x: this.state.x + 5 });
    } else if (key === 37) {
      this.setState({ x: this.state.x - 5 });
    } else if (key === 38) {
      this.setState({ y: this.state.y - 5 });
    } else if (key === 40) {
      this.setState({ y: this.state.y + 5 });
    }
    if (this.state.x === 250 && this.state.y === 250) {
      clearInterval(this.r.current);
      document.removeEventListener("keydown", this.handleArrow); //this
    }
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <>
        <button className="start" onClick={this.handleClick}>
          Start
        </button>
        <>
          <div
            className="ball"
            style={{ left: this.state.x + "px", top: this.state.y + "px" }}
          ></div>
          <div className="hole"></div>
          <div className="heading-timer">{this.state.time}</div>
        </>
      </>
    );
  }
}

export default Timer;

import React, { Component } from "react";

export class Timer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    setInterval(() => this.setState({ counter: this.state.counter + 1 }), 1000)
  }

  render() {
    const { counter } = this.state;

    return (
      <div>
        {counter}
      </div>
    );
  }

}
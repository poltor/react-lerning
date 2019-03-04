import React, { Component } from 'react';


export class Task extends Component {

  constructor(props) {
    super(props);

    this.state = {
      done: props.done,
    };
  }

  render() {
    const { description, title } = this.props;
    const { done } = this.state;

    return (
      <li className="task">
        {done && (
          <s>{title}</s>
        )}
        {!done && (
          <b>{title}</b>
        )}
        {!done && (
          <button onClick={() => this.setState({ done: true })}>
            Done!
          </button>
        )}


        {description && (
          <p>
            {description}
          </p>
        )}
      </li>
    );
  }

}

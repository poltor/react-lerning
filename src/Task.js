import React, { PureComponent } from 'react';


export class Task extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    const { id, description, title, onChangeTaskDone , done } = this.props;

    return (
      <li className="task">
        {done && (
          <s>{title}</s>
        )}
        {!done && (
          <b>{title}</b>
        )}
        {!done && (
          <button onClick={() => onChangeTaskDone(id)}>
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

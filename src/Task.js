import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


export class Task extends PureComponent {

  static propTypes = {
    id: PropTypes.number.isRequired,
    description: PropTypes.string,
    title: PropTypes.string,
    onChangeTaskDone: PropTypes.func,
    done: PropTypes.bool,
  };

  static defaultProps = {
    description: null,
    title: null,
    done: false,
    onChangeTaskDone: () => {},
  };

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

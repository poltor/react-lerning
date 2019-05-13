import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class AddTask extends Component {

  static propTypes = {
    onSubmit: PropTypes.func,
  };

  static defaultProps= {
    onSubmit: () => {},
  };

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
    };
  }

  handleChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleChangeDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { title, description } = this.state;
    const { onSubmit } = this.props;

    onSubmit({
      title,
      description,
      done: false,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Название"
            value={this.state.title}
            onChange={this.handleChangeTitle}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Описание"
            value={this.state.description}
            onChange={this.handleChangeDescription}
          />
        </div>
        <button type="submit">Сохранить</button>
      </form>
    );
  }

}
import React, { Component } from 'react';


export class AddTask extends Component {

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

  render() {
    return (
      <form>
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
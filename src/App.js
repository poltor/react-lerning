import React, { Component } from 'react';
import {Task} from './Task';
import {AddTask} from "./AddTask";

const tasks = [
  {
    id: 0,
    title: 'Купить хлеба',
    description: 'По пути домой',
    done: false,
  },
  {
    id: 1,
    title: 'Задеплоить сервис',
    done: true,
  },
  {
    id: 2,
    title: 'Погладить кота',
    done: false,
  },
];



export class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tasks: [...tasks],
    }
  }

  handleChangeTaskDone = (id) => {
    const tasks = this.state.tasks
      .map(task => {
        if (task.id === id) {
          return Object.assign({}, task, { done: true })
        }

        return task;
      });

    this.setState({ tasks });
  };

  render() {
    return (
      <ul>
        <AddTask />
        <br />
        <br />
        <br />
        {this.state.tasks.map((task, i) => (
          <Task
            {...task}
            key={i.toString()}
            onChangeTaskDone={this.handleChangeTaskDone}
          />
        ))}
      </ul>
    );
  }

}
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions as todoActions, todoListSelector, todoCountSelector } from './../reducers/todo';

import { Task } from './../components/Task';
import { AddTask } from './../components/AddTask';



class App extends Component {

  render() {
    const { todos, count, actions } = this.props;

    return (
      <ul>
        <h1>Add todo</h1>
        <AddTask onSubmit={actions.addTodo} />

        <h1>Todos ({count})</h1>
        {todos.map((task, i) => (
          <Task
            {...task}
            key={i.toString()}
            onChangeTaskDone={actions.markAsDoneTodo}
          />
        ))}
      </ul>
    );
  }

}


function mapStateToProps(state) {
  return {
    count: todoCountSelector(state),
    todos: todoListSelector(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      addTodo: todoActions.addTodo,
      markAsDoneTodo: todoActions.markAsDone,
    }, dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
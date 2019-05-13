export const types = {
  ADD_TODO: 'TODO/ADD_TODO',
  REMOVE_TODO: 'TODO/REMOVE_TODO',
  MARK_AS_DONE: 'TODO/MARK_AS_DONE',
};


export default function(state = [], action) {
  switch (action.type) {
    case types.ADD_TODO:
      let id;
      if (state.length === 0) {
        id = 1;
      } else {
        id = Math.max.apply(null, state.map(todo => todo.id)) + 1;
      }
      return [...state, Object.assign({}, {
        done: false,
        id,
      }, action.todo)];

    case types.REMOVE_TODO:
      return state.filter(todo => action.id !== todo.id);

    case types.MARK_AS_DONE:
      return state.map(todo => Object.assign({}, todo, {
        done: (action.id !== todo.id) ? todo.done : true,
      }));

    default:
      return state
  }
}


export const actions = {
  addTodo: (todo) => ({ type: types.ADD_TODO, todo }),
  removeTodo: (id) => ({ type: types.REMOVE_TODO, id }),
  markAsDone: (id) => ({ type: types.MARK_AS_DONE, id }),
};


export const todoListSelector = state => state.todo;
export const todoCountSelector = state => state.todo.length;
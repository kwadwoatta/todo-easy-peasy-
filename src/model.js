import { action, thunk } from 'easy-peasy';
const uuid = require('uuid');

export default {
  todos: [],

  // Thunks
    fetchTodos: thunk(async actions => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      const data = await res.json()

      actions.setTodos(data);
    }),

  // Actions
    setTodos: action((state, data) => {
      state.todos = data
    }),

    toggle: action((state, id) => {
      state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    }),

    remove: action((state, id) => {
      state.todos = state.todos.filter(todo => todo.id !== id)
    }),

    add: action((state, title) => {
      let matchFound = false
      state.todos.map(aTodo => {
        if(title === aTodo.title) { 
          matchFound = true
        }
        return
      })
      if (!matchFound) {
      state.todos.push({
        id: uuid.v4(),
        title: title,
        completed: false
      })}
    })
}






























// import { action, thunk } from "easy-peasy";
// import uuid from "uuid";

// export default {
//   todos: [],
//   // Thunks
//   fetchTodos: thunk(async actions => {
//     const res = await fetch(
//       "https://jsonplaceholder.typicode.com/todos?_limit=5"
//     );
//     const todos = await res.json();

//     actions.setTodos(todos);
//   }),
//   // Actions
//   setTodos: action((state, todos) => {
//     state.todos = todos;
//   }),
//   add: action((state, todo) => {
//     todo.id = uuid.v4();
//     state.todos = [...state.todos, todo];
//   }),
//   toggle: action((state, id) => {
//     state.todos.map(todo => {
//       if (todo.id === id) {
//         todo.completed = !todo.completed;
//       }
//       return todo;
//     });
//   }),
//   remove: action((state, id) => {
//     state.todos = state.todos.filter(todo => todo.id !== id);
//   })
// };

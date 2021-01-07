import { createStore } from 'redux'

const todos = [
    {id: 1, name: "organize desk"},
    {id: 2, name: "write a blog post"},
    {id: 3, name: "complete labs"},
    {id: 4, name: "get oil changed"},
    {id: 5, name: "pick out kitten"}, 
    {id: 6, name: "Take down the Christmas tree"}
  ]

function todosReducer(state = todos, action) {
    switch (action.type) {

      default:
        return state
    }
  }
  
  // Create a Redux store holding the state of your app.
  // Its API is { subscribe, dispatch, getState }.
  let store = createStore(todosReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

  export default store
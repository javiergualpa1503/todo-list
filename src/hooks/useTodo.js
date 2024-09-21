import { useEffect, useReducer } from "react"
import { initialState, todoReducer } from "../reducer/todoReducer"


const init = () => {
  return JSON.parse(localStorage.getItem('items')) || []
}


export const useTodo = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState, init)



  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(todos))

  }, [todos])

  const addNewTodo = (newTodo) => {
    dispatch({
      type: 'Add Todo',
      payload: newTodo
    })
  }

  const deleteTodo = (id) => {
    dispatch({
      type: 'Delete Todo',
      payload: id
    })
  }

  const onToggleTodo = (id) => {
    dispatch({
      type: 'Toggle Todo',
      payload: id
    })
  }


  return {
    todos,
    addNewTodo,
    deleteTodo,
    onToggleTodo,
    totalTodos: todos.length,
    pendingTodos: todos.filter((todo) => !todo.done).length
  }
}

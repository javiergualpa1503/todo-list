import { useEffect, useReducer, useState } from 'react'
import { initialState, todoReducer } from './reducer/todoReducer'
import { ListGroup } from './components/ListGroup'
import { FormTodo } from './components/FormTodo'
import { useTodo } from './hooks/useTodo'

function App() {

  const { todos, addNewTodo, deleteTodo, onToggleTodo, totalTodos, pendingTodos } = useTodo()

  return (
    <>
      <>
        <h1>Todo App: {totalTodos}, <small>pendientes: {pendingTodos}</small> </h1>
        <hr />

        <div className='row'>
          <div className='col-7'>
            {
              todos.length < 1 ? <h6>No tienes Todos</h6> : <ListGroup todos={todos} deleteTodo={deleteTodo} onToggleTodo={onToggleTodo} />
            }
          </div>
          <div className='col-5'>
            <h4>Agregar TODO</h4>
            <hr />
            <FormTodo addNewTodo={addNewTodo} />
          </div>
        </div>
      </>
    </>
  )
}

export default App

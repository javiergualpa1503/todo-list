import { useState } from "react"
import { useForm } from "../hooks/useForm"


export const FormTodo = ({ addNewTodo }) => {

  const { description, handleChange, resetForm } = useForm({
    description: '',
  })


  const handelSubmit = (e) => {
    e.preventDefault()
    if (description.length <= 1) return

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false,
    }

    addNewTodo(newTodo)
    resetForm()
  }


  return (
    <form onSubmit={handelSubmit}>
      <input type="text"
        placeholder=''
        name="description"
        className='form-control'
        value={description}
        onChange={handleChange}
      />
      <button className='btn btn-outline-primary mt-1' >
        Agregar
      </button>
    </form>
  )
}

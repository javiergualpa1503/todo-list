import { useState } from "react"

export const useForm = (initialValue = {}) => {

  const [form, setForm] = useState(initialValue)


  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const resetForm = () => {
    setForm(initialValue)
  }

  return {
    form,
    ...form,
    resetForm,
    handleChange
  }
}

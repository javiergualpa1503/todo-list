
export const ListItem = ({ id, description, done, deleteTodo, onToggleTodo }) => {
  return (
    <li className='list-group-item d-flex justify-content-between'>
      <span onClick={() => onToggleTodo(id)} className={`align-self-center ${done ? 'text-decoration-line-through' : ''}`}>{description}</span>
      <button className='btn btn-danger' onClick={() => deleteTodo(id)}>Borrar</button>
    </li>
  )
}

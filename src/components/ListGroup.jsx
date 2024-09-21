import { ListItem } from "./ListItem"

export const ListGroup = ({ todos, deleteTodo, onToggleTodo }) => {
  return (
    <ul className='list-group'>
      {
        todos.map(todo => (
          <ListItem key={todo.id} {...todo} deleteTodo={deleteTodo} onToggleTodo={onToggleTodo} />
        ))
      }

    </ul>
  )
}

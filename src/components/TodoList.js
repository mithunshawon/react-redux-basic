import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import {ListGroup} from 'react-bootstrap';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
  <ListGroup>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onToggleClick={() => toggleTodo(todo.id)} 
        onDeleteClick={() => deleteTodo(todo.id)}
      />
    )}
  </ListGroup>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default TodoList
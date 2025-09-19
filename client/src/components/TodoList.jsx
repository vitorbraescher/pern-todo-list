import Todo from './Todo'

const TodoList = ({todos, deleteTodo, updateTodo}) => {
  return (
    <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
        <ul className="list">
            { todos.map(todo => (
                <Todo key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
            )) }
        </ul>
    </div>
  )
}

export default TodoList

import { Trash2Icon, CircleCheck } from 'lucide-react'

const Todo = ({todo, deleteTodo, updateTodo}) => {
  const onDelete = (e, id) => {
    e.preventDefault();
    deleteTodo(id);
  }

  const onUpdate = (e, id) => {
    e.preventDefault();
    updateTodo(id);
  }
  
  return (
    <li className={`flex pb-2 pt-2 justify-between ${todo.done && 'border-green-600 border-l-5 pl-2'}`}>
        <div className='list-col-grow'>
            <div className='text-md uppercase font-semibold'>{ todo.title }</div>
            <div className='text-sm'>{ todo.description }</div>
        </div>
        <div className="flex justify-between items-center gap-3">
          {!todo.done && 
            <button className='cursor-pointer' onClick={(e) => onUpdate(e, todo.id)} title='Done'>
              <CircleCheck />
            </button>}
          <button className='cursor-pointer' onClick={(e) => onDelete(e, todo.id)} title='Delete' >
            <Trash2Icon />
          </button>
        </div>
    </li>
  )
}

export default Todo

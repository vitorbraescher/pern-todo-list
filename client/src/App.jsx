import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'

import api from "../lib/axios"
import Loading from './components/Loading'
import NotFound from './components/NotFound'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTodos = async () => {
    try {
      const res = await api.get('/');
      setTodos(res.data);
    } catch (error) {
      console.error('Failed to fetch TODOs', error.message)
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (todo) => {  
    try {
      const res = await api.post('/', todo);
      const newTodo = res.data;
      setTodos([...todos, newTodo]);
      toast.success('TODO created successfully');
    } catch (error) {
      toast.error('Failed to create TODO');
      console.error('Failed to create TODO', error.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const res = await api.delete(`/${id}`);
      const deletedTodo = res.data;
      setTodos(todos.filter(todo => todo.id !== id));
      toast.success('TODO deleted successfully');
    } catch (error) {
      toast.error('Failed to delete TODO');
      console.error('Failed to delete TODO', error.message);
    }
  };

  const updateTodo = async (id) => {
    try {
      let res = await api.get(`/${id}`);
      const todo = res.data;

      res = await api.put(`/${id}`, {...todo, done: true});
      const updatedTodo = res.data;

      setTodos(todos.map(todo => todo.id === id ? {...todo, done: true} : todo));
      toast.success('TODO marked as done successfully');
    } catch (error) {
      toast.error('Failed to mark TODO as done');
      console.error('Failed to mark TODO as done', error.message);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className='bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl transition-all duration-300 transform hover:shadow-xl'>
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">TODO-List</h1>
      <AddTodo addTodo={addTodo} />
      {loading && <Loading />}
      {!loading && todos.length === 0 && <NotFound />}
      {!loading && todos.length > 0 && <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />}
    </div>
  )
}

export default App

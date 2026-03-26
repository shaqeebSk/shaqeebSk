import { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import { addTodo, fetchTodos, removeTodo, toggleTodo } from './services/todoApi';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadTodos = async () => {
    try {
      setLoading(true);
      const data = await fetchTodos();
      setTodos(data);
      setError('');
    } catch (_error) {
      setError('Could not fetch todos. Make sure backend is running.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const handleAdd = async (title) => {
    const created = await addTodo(title);
    setTodos((prev) => [created, ...prev]);
  };

  const handleToggle = async (todo) => {
    const updated = await toggleTodo(todo);
    setTodos((prev) => prev.map((item) => (item._id === updated._id ? updated : item)));
  };

  const handleDelete = async (id) => {
    await removeTodo(id);
    setTodos((prev) => prev.filter((item) => item._id !== id));
  };

  return (
    <main className="container">
      <h1>MERN Todo Application</h1>
      <TodoForm onAdd={handleAdd} />
      {loading && <p>Loading todos...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !todos.length && <p>No tasks yet. Add one above!</p>}
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} onToggle={handleToggle} onDelete={handleDelete} />
        ))}
      </ul>
    </main>
  );
}

export default App;

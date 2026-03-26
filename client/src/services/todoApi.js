import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/todos';

export const fetchTodos = async () => {
  const { data } = await axios.get(API_URL);
  return data;
};

export const addTodo = async (title) => {
  const { data } = await axios.post(API_URL, { title });
  return data;
};

export const toggleTodo = async (todo) => {
  const { data } = await axios.patch(`${API_URL}/${todo._id}`, {
    completed: !todo.completed
  });
  return data;
};

export const removeTodo = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

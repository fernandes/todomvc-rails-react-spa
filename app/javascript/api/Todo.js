import { requests } from './requests'

export const Todo = {
  index: () =>
    requests.get('/todos'),
  clearCompleted: () =>
    requests.put(`/todos/clear_completed`),
  toggleStatus: (status) =>
    requests.put(`/todos/toggle_status`, {status: status}),
  create: (todo) =>
    requests.post('/todos', {...todo, title: todo.description}),
  update: (id, todo) =>
    requests.put(`/todos/${id}`, {...todo, title: todo.description}),
  delete: (id) =>
    requests.del(`/todos/${id}`),
};

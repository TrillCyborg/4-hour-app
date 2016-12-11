import { todo } from './Types';

const addTask = () => ({ type: todo.addTask });
const toggleEditTask = id => ({ type: todo.toggleEditTask, value: id });
const removeTask = id => ({ type: todo.removeTask, value: id });
const updateTaskValue = (id, value) => ({ type: todo.updateTaskValue, value: { id, text: value } });
const updateTempTask = value => ({ type: todo.updateTempTask, value });
const toggleImportant = () => ({ type: todo.toggleImportant });

export {
  addTask,
  toggleEditTask,
  updateTaskValue,
  updateTempTask,
  removeTask,
  toggleImportant,
};

import uuid from 'node-uuid';
import { todo as todoActions } from '../actions/Types';

const initState = {
  tempTask: '',
  todoList: [],
  isImportant: false,
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case todoActions.updateTempTask:
      return {
        ...state,
        tempTask: action.value,
      };
    case todoActions.updateTaskValue:
      return {
        ...state,
        todoList: state.todoList.map((task) => {
          if (task.id === action.value.id) {
            return { ...task, value: action.value.text };
          }
          return task;
        }),
      };
    case todoActions.addTask:
      return {
        ...state,
        todoList: [...state.todoList, { value: state.tempTask, id: uuid.v4(), isImportant: state.isImportant }],
        tempTask: '',
        isImportant: false,
      };
    case todoActions.toggleEditTask:
      return {
        ...state,
        todoList: state.todoList.map((task) => {
          if (task.id === action.value) {
            return { ...task, isEditing: !task.isEditing };
          }
          // Make only one task editable at a time
          return { ...task, isEditing: false };
        }),
      };
    case todoActions.removeTask:
      return {
        ...state,
        todoList: state.todoList.filter(task => task.id !== action.value),
      };
    case todoActions.toggleImportant:
      return {
        ...state,
        isImportant: !state.isImportant,
      };
    default:
      return state;
  }
};

export default todoReducer;

import React, { useState } from 'react';
import Layout from '../components/Layout';
import useLocalStorage from '../utils/useLocalStorage';
import { useTheme } from '../utils/ThemeContext';

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('All');
  const { isDarkMode } = useTheme();

  const addTask = () => {
    if (newTask.trim() === '') return;
    const newEntry = {
      id: Date.now(),
      text: newTask.trim(),
      completed: false,
    };
    setTasks([...tasks, newEntry]);
    setNewTask('');
  };

  const toggleTask = (id) => {
    const updated = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  };

  const deleteTask = (id) => {
    const updated = tasks.filter(task => task.id !== id);
    setTasks(updated);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'Active') return !task.completed;
    if (filter === 'Completed') return task.completed;
    return true;
  });

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task..."
          className="flex-grow p-2 border rounded dark:bg-gray-800 dark:text-white"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>

      <div className="flex gap-2 mb-4">
        {['All', 'Active', 'Completed'].map(type => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-3 py-1 rounded ${
              filter === type
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {filteredTasks.length === 0 ? (
        <p className="text-gray-500 italic">No tasks found.</p>
      ) : (
        <ul className="space-y-2">
          {filteredTasks.map(task => (
            <li
              key={task.id}
              className={`flex items-center justify-between p-3 rounded border transition-all duration-300 ${
                task.completed
                  ? 'bg-green-100 dark:bg-green-900 line-through text-gray-500'
                  : 'bg-white dark:bg-gray-800'
              }`}
            >
              <span>{task.text}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => toggleTask(task.id)}
                  className="text-sm px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-sm px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Layout>
  );
};

export default TaskManager;

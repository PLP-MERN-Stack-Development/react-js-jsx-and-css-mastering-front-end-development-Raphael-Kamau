// src/pages/Home.jsx
import React from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to the React Task Manager</h1>
      <p className="mb-6 text-gray-700 dark:text-gray-300">Explore your daily tasks.</p>
      <div className="flex justify-center gap-4">
        <Link to="/tasks"><Button>Go to Tasks</Button></Link>
        <Link to="/api"><Button variant="secondary">API Integration</Button></Link>
      </div>
    </div>
  );
};

export default Home;

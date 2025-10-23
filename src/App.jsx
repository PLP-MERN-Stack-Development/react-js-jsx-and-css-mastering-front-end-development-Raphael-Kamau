
// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TaskManager from './pages/TaskManager';
import ApiIntegration from './pages/ApiIntegration';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/tasks" element={<TaskManager />} />
    <Route path="/api" element={<ApiIntegration />} />
  </Routes>
);

export default App;

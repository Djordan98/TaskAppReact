import TaskList from './Screens/TaskList'
import { useState } from 'react';
import './App.css';

function App() {
  const [allTasks, setAllTasks] = useState([]);
  const [inputText, setInputText] = useState('');
  
  const taskListProps = {
    allTasks, 
    setAllTasks,
    inputText,
    setInputText,
  };

  return (
    <TaskList taskListProps={ taskListProps } />
  );
}

export default App;

import TaskList from './Screens/TaskList'
import { useState } from 'react';
import './App.css';

function App() {
  const [allTasks, setAllTasks] = useState([]);//niz taskova,funkcija za dodavanje elemenata i vrednost
  const [inputText, setInputText] = useState('');//tekst,funkcija za dodavanje teksta u input i vrednost
  //propovanje vrednosti i funkcija
  const taskListProps = {
    allTasks, 
    setAllTasks,
    inputText,
    setInputText,
  };

  return (
    //prosledjivanje funkcija i vrednosti u TaskList
    <TaskList taskListProps={ taskListProps } />
  );
}

export default App;

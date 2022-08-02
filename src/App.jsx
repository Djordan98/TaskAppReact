import React from 'react';
import axios from 'axios';
import TaskList from './Screens/TaskList'
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [allTasks, setAllTasks] = useState([]);//niz taskova,funkcija za dodavanje elemenata i vrednost
  const [inputText, setInputText] = useState('');//tekst,funkcija za dodavanje teksta u input i vrednost
  useEffect(() => {
    loadData();
  }, []);
  //propovanje vrednosti i funkcija
  const taskListProps = {
    allTasks, 
    setAllTasks,
    inputText,
    setInputText,
  };

  const loadData = () => {
    axios.get("http://localhost:3000/data").then((ress) => {
      setAllTasks(ress.data);
      });
  };

  return (
    //prosledjivanje funkcija i vrednosti u TaskList
    <TaskList taskListProps={ taskListProps } />
  );
}

export default App;

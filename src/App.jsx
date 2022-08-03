import React from 'react';
import axios from 'axios';
import TaskList from './Screens/TaskList'
import Login from './Screens/Login';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/todo-app" element={<TaskList taskListProps={ taskListProps } />} />
        </Routes>
    </BrowserRouter>
    //prosledjivanje funkcija i vrednosti u TaskList
    //
  );
}

export default App;

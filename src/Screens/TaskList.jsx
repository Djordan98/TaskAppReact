import React from "react";
import axios from 'axios';
import SingleTaskCard from '../Components/SingleTaskCard'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import './TaskList.css';
//kupljenje taskListPropa u odvojene konstante
const TaskList = ({ taskListProps }) => {
    const {
        allTasks, 
        setAllTasks,
        inputText,
        setInputText,
    } = taskListProps;
    //dofabanje novih taskova
    const handleAddTaskBtn = () => {
        axios.post("http://localhost:3000/data", {id: allTasks.length, taskDetails: inputText, isFinished: false})
        .then(ress => console.log(ress));
        setAllTasks([...allTasks, {id: allTasks.length, taskDetails: inputText, isFinished: false}]);
        setInputText('');
    }
    return (
        <div id="container-taskList-screen">
            <h1>TO DO LIST</h1>
            <div id="taskControlContainer">
                <TextField 
                    id="taskInputField" 
                    label="Insert Task" 
                    variant="outlined"
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                />
                <Button variant="contained" onClick={handleAddTaskBtn} >ADD TASK</Button>
            </div>

            {allTasks.map(singleTask => {
                return(
                    //renderovanje SinglTaskCard-a za svaki objekat u nizu "allTasks"
                <SingleTaskCard
                    key={singleTask.id}
                    taskDetails={singleTask.taskDetails} 
                    isFinished={singleTask.isFinished} 
                    allTasks = {allTasks}
                    setAllTasks={setAllTasks}
                    clickedTaskId={singleTask.id}
                />
                );
            })}
            
        </div>
    );
};

export default TaskList;
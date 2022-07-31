import React from "react";
import SingleTaskCard from '../Components/SingleTaskCard'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import './TaskList.css';
const TaskList = ({ taskListProps }) => {
    const {
        allTasks, 
        setAllTasks,
        inputText,
        setInputText,
    } = taskListProps;

    const handleAddTaskBtn = () => {
        setAllTasks([...allTasks, {taskDetails: inputText, isFinished: false}]);
        setInputText('');
    }
    
    return (
        <div id="container-taskList-screen">
            <h1>TITLE</h1>
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
                <SingleTaskCard 
                    taskDetails={singleTask.taskDetails} 
                    isFinished={singleTask.isFinished} 
                />
                );
            })}
            
        </div>
    );
};

export default TaskList;
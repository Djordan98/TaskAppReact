import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import './SingleTaskCard.css';

const SingleTaskCard = ({ 
  taskDetails = 'I am task',
  isFinished,
  allTasks,
  setAllTasks,
  clickedTaskId,
}) => {

  const handleCardClick = () => {
    axios.put(`http://localhost:3000/data/${clickedTaskId}`, {
      id:clickedTaskId,
      taskDetails: taskDetails,
      isFinished: !isFinished
    }).then(ress=>console.log(ress));

    const allTasksAfterCheck = allTasks.map(singleTask => {
      if(singleTask.id === clickedTaskId) {
          return {...singleTask, isFinished: !singleTask.isFinished};
        } else return singleTask;
    });
    //rerender kartice nakon unosa novog task-a kroz metod "setAllTasks"
    setAllTasks(allTasksAfterCheck);
  }

  const handleRemoveCardClick = () => {
    axios.delete(`http://localhost:3000/data/${clickedTaskId}`).then(ress => console.log(ress));
    const allTasksAfterDelete = allTasks.filter(singleTask => singleTask.id !== clickedTaskId);
    setAllTasks(allTasksAfterDelete);
  };

  return(
    <div id="taskContainer">
      <div id="taskCard" className={isFinished ? 'finishedTask' : 'unFinishedTask'}> 
        <div id="content" onClick={handleCardClick}>
          <div className="text" >
            {taskDetails}
          </div>
        </div>
      </div> 
      <div className="svgIcon">
        <Button variant="contained" onClick={handleRemoveCardClick} color="error">DELETE</Button>
      </div>
    </div>
  );
}
export default SingleTaskCard;
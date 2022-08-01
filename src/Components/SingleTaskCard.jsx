import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import './SingleTaskCard.css';

const SingleTaskCard = ({ 
  taskDetails = 'I am task',
  isFinished,
  allTasks,
  setAllTasks,
  clickedTaskId,
}) => {

  const handleCardClick = () => {
    const allTasksAfterCheck = allTasks.map(singleTask => {
      if(singleTask.id === clickedTaskId) {
          return {...singleTask, isFinished: !singleTask.isFinished};
        } else return singleTask;
    });
    //rerender kartice nakon unosa novog task-a kroz metod "setAllTasks"
    setAllTasks(allTasksAfterCheck);
  }

  const handleRemoveCardClick = () => {
    console.log('before', allTasks);
    const allTasksAfterDelete = allTasks.filter(singleTask => singleTask.id !== clickedTaskId);
    console.log('after ', allTasksAfterDelete);
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
      <div className="svgIcon" onClick={handleRemoveCardClick}>
        <DeleteOutlinedIcon fontSize="large" />
      </div>
    </div>
  );
}
export default SingleTaskCard;
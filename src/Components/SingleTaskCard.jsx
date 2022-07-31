import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import './SingleTaskCard.css';

const SingleTaskCard = ({ 
  taskDetails = 'I am task',
  isFinished,
}) => {

  const handleCardClick = () => {
    // setIsFinished(!isFinished);
  }

  return(
    <div id="taskCard" className={isFinished ? 'finishedTask' : 'unFinishedTask'}> 
      <div id="content" onClick={handleCardClick} >
        <div className="text">
          {taskDetails}
        </div>
        <div className="svgIcon">
          <DeleteOutlinedIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}
export default SingleTaskCard;
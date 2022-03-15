import EditFunction from "./EditFunction";
import DeleteFunction from "./DeleteFunction";
import { TaskContext } from "../../contexts/task-context";

function IncompleteTask({ data, onUpdate, onDelete }) {
  
  const handleStartClick = async (data) => {
    const payload = {
      id: data.id,
      taskTitle: data.taskTitle,
      isComplete: true,
    };
    onUpdate(payload);
  };

  return (
    <TaskContext.Provider value={data}>
      <div className='taskIncomplete_Container'>
        <div className='taskIncomplete'>
          <div className='inputValue_container'>
            <div className='inputValue'>{data.taskTitle}</div>
          </div>
          <div className='select_button'>
            <button
              id='finish'
              className='button_finish_start'
              onClick={() => handleStartClick(data)}
            >
              Finish
            </button>
            <EditFunction onUpdate={onUpdate}/>
            <DeleteFunction onDelete={onDelete}/>
          </div>
        </div>
      </div>
    </TaskContext.Provider>
  );
}

export default IncompleteTask;

import EditFunction from "./EditFunction";
import DeleteFunction from "./DeleteFunction";
import { context } from "../TaskList";

function IncompleteTask({ data, onUpdate }) {
  
  const startButtonClick = async (data) => {

    const payload = {
      id: data.id,
      taskTitle: data.taskTitle,
      isComplete: true,
    };
    onUpdate(payload);
  };

  return (
    <context.Provider value={data}>
      <div className='taskIncomplete_Container'>
        <div className='taskIncomplete'>
          <div className='inputValue_container'>
            <div className='inputValue'>{data.taskTitle}</div>
          </div>
          <div className='select_button'>
            <button
              id='finish'
              className='button_finish_start'
              onClick={() => startButtonClick(data)}
            >
              Finish
            </button>
            <EditFunction />
            <DeleteFunction />
          </div>
        </div>
      </div>
    </context.Provider>
  );
}

export default IncompleteTask;

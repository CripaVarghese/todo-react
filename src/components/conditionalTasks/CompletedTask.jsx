import EditFunction from "./EditFunction";
import DeleteFunction from "./DeleteFunction"

function CompletedTask({ data, onUpdate }) {
  const finishButtonClick = async (data) => {
    const payload = {
      id: data.id,
      taskTitle: data.taskTitle,
      isComplete: false,
    };
    onUpdate(payload);
  };

  return (
    <div className='taskComplete_Container'>
      <div className='taskComplete'>
        <div className='inputValue_container'>
          <div className='inputValue'>{data?.taskTitle}</div>
        </div>
        <div className='select_button'>
          <button
            id='start'
            className='button_finish_start'
            onClick={() => finishButtonClick(data)}
          >
            Start
          </button>
          <EditFunction dataAll1={data}
          />
           <DeleteFunction dataAll1={data}
          />
        </div>
      </div>
    </div>
  );
}

export default CompletedTask;

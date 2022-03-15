import EditFunction from "./EditFunction";
import DeleteFunction from "./DeleteFunction"

function CompletedTask({ data, onUpdate, onDelete }) {
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
          <EditFunction onUpdate={onUpdate} />
          <DeleteFunction onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
}

export default CompletedTask;

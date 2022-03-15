import { useState } from "react";

function AddTask({onCreate}) {
  const [taskTitle, setTaskTitle] = useState("");

  const handleCreate = () => {
    onCreate(taskTitle)
  }

  return (
    <div className='add_task_container'>
      <div className='add_task'>
        <input
          type='text'
          className='input_task_title'
          placeholder='What would you like to do today?'
          onChange={(event) => {
            setTaskTitle(event.target.value);
          }}
        />
        <button className="add_icon" onClick={handleCreate}>
          <i className='fa fa-plus-square'></i>
        </button>
      </div>
    </div>
  );
}

export default AddTask;

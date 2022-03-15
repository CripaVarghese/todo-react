import { useState } from "react";
import { taskServices } from "../services/taskServices";

function AddTask() {
  const [textInput, setTextInput] = useState("");

  const postNUpdateAllTasks = async () => {
    console.log({ textInput });
    const payload = {
      taskTitle: textInput,
      isComplete: false,
    };
    const allTasks = await taskServices.postToAllTasks(payload);
  };

  return (
    <div className='add_task_container'>
      <div className='add_task'>
        <input
          type='text'
          className='input_task_title'
          placeholder='What would you like to do today?'
          onChange={(event) => {
            setTextInput(event.target.value);
          }}
        />
        <button className="add_icon" onClick={postNUpdateAllTasks}>
          <i className='fa fa-plus-square'></i>
        </button>
      </div>
    </div>
  );
}

export default AddTask;

import { useState } from "react";
import { taskServices } from "../services/taskServices";
import CompletedTask from "./conditionalTasks/CompletedTask"

function AddTask() {
  const [textInput, setTextInput] = useState("");

  const postNUpdateAllTasks = async () => {
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
        <i
          className='add_icon fa fa-plus-square'
          onClick={postNUpdateAllTasks}
        ></i>

      </div> 
    </div>
  );
}

export default AddTask;

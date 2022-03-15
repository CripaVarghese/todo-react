import React, { useContext } from "react";
import { useState } from "react";
import { TaskContext } from "../../contexts/task-context";

const ModalEditClick = ({onCancel, onUpdate}) => {
  const taskData = useContext(TaskContext);
  const [state, setState] = useState(taskData);
  const onTitleChange = (event) => {
    console.log(event.target.value);
    setState((currentState) => ({ ...currentState, taskTitle: event.target.value }));
  };

  const onValueChange=({target}) => {
    console.log(target.value);
    setState((currentState) => ({ ...currentState, isComplete: target.value === 'Completed' }));
  }

  const updateData = async () => {
    const payload = { ...taskData, ...state };
    console.log({payload});
    onUpdate(payload);
  };

  return (
    <div className='edit_task_details_page_container'>
      <div className='edit_task_details_page'>
        <div className='edit_header_body'>
          <div className='edit_task_details_header'>Edit Task Details</div>
          <div className='edit_task_details_body'>
            <div className='input_task'>
              <div className='task_title'>Task Title</div>
              <input
                type='text'
                className='edit_inputTaskValue'
                defaultValue={taskData.taskTitle}
                onChange={(event) => {
                  onTitleChange(event);
                }}
              />
            </div>

            <div className='select_task_options'>
              <p className='title_status_header'>Title Status</p>
              <div className='select_task'>
                <div className='option_completed'>
                  <input
                    type='radio'
                    id='radio_completed'
                    name='select'
                    value='Completed'
                    checked={state.isComplete}
                    onChange={onValueChange}
                  />
                    <label htmlFor='radio_completed'>completed</label>
                </div>
                <div className='option_incomplete'>
                  <input
                    type='radio'
                    id='radio_incomplete'
                    name='select'
                    value='Incomplete'
                    checked={!state.isComplete}
                    onChange={onValueChange}
                  />
                    <label htmlFor='radio_incomplete'>incomplete</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='edit_cancel_update'>
          <button id='edit_cancel' onClick={onCancel}>
            Cancel
          </button>
          <button
            id='edit_update'
            onClick={(event) => {
              updateData(event);
            }}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalEditClick;



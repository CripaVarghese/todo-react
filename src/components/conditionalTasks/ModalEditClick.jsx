import React, { useContext } from "react";
import { props, useState } from "react";
import { taskServices } from "../../services/taskServices";
import { context } from "../TaskList";

const ModalEditClick = (props, update) => {
  const contextValue = useContext(context);
  const [select, setSelect] = useState(contextValue.isComplete ? 'Completed' : 'Incomplete');
  const newText = (event) => {
    console.log(event.target.value);
    setSelect(event.target.value);
  };

  const onValueChange=({target}) => {
    console.log(target.value);
    setSelect(target.value);
  }

  const updateData = async (event) => {
    
    console.log(contextValue);
    
    
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
                defaultValue={contextValue.taskTitle}
                onChange={(event) => {
                  newText(event);
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
                    checked={select === "Completed"}
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
                    checked={select === "Incomplete"}
                    onChange={onValueChange}
                  />
                    <label htmlFor='radio_incomplete'>incomplete</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='edit_cancel_update'>
          <button id='edit_cancel' onClick={props.cancel}>
            Cancel
          </button>
          <button
            id='edit_update'
            onClick={(event) => {
              updateData(event);
              props.update();
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



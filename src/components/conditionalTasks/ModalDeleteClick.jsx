import { useContext } from "react";
import { TaskContext } from "../../contexts/task-context";

const ModalDeleteClick = ({ onCancel, onDelete }) => {
  const taskData = useContext(TaskContext);
  const deleteData = async () => {
    const payload = {
      id: taskData?.id,
    };
    onDelete(payload);
  };

  return (
    <div className='delete_alert_confirm_container'>
      <div className='delete_alert_confirm'>
        <div className='confirm_delete_message'>
          <p>Are you sure you want to delete this task?</p>
          <p>This action is irreversible</p>
        </div>
        <div className='confirm_delete_buttons'>
          <button id='confirm_cancel' onClick={onCancel}>
            Cancel
          </button>
          <button
            id='confirm_delete'
            onClick={deleteData}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDeleteClick;

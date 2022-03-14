import { taskServices } from "../../services/taskServices";

const ModalDeleteClick = ({onCancel, onDelete, dataAll2}) => {
  const deleteData = async () => {
    const payload = {
      id: dataAll2.id,
    };
    console.log({payload})
    const allTasks = await taskServices.deleteTask(payload);
    onDelete();
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

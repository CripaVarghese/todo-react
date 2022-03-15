import { useState } from "react";
import ModalDeleteClick from "./ModalDeleteClick";

const DeleteFunction = ({ onDelete }) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const modalDeleteFunction = () => {
    setDeleteModalOpen(true);
  };
  const cancelDelete = () => {
    setDeleteModalOpen(false);
  };
  const deleteTask = (payload) => {
    onDelete(payload);
    setDeleteModalOpen(false);
  };

  return (
    <>
      <i
        id='delete_option'
        className='fa fa-trash-o'
        onClick={modalDeleteFunction}
      ></i>
      {deleteModalOpen && (
        <ModalDeleteClick
          onCancel={cancelDelete}
          onDelete={deleteTask}
        />
      )}
    </>
  );
};

export default DeleteFunction;

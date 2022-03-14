import { useState } from "react";
import ModalDeleteClick from "./ModalDeleteClick";

const DeleteFunction = ({ dataAll1 }) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const modalDeleteFunction = () => {
    setDeleteModalOpen(true);
  };
  const deleteCancelFunction = () => {
    setDeleteModalOpen(false);
  };
  const deleteDeleteFunction = () => {
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
          onCancel={deleteCancelFunction}
          onDelete={deleteDeleteFunction}
          dataAll2={dataAll1}
        />
      )}
    </>
  );
};

export default DeleteFunction;

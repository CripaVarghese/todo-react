import { useState } from "react";
import ModalEditClick from "./ModalEditClick";

const EditFunction = () => {
  const [editModalOpen, setEditModalOpen] = useState(false);

  const modalEditFunction = () => {
    console.log('ok');
    setEditModalOpen(true);
  };
  const editCancelFunction = () => {
    setEditModalOpen(false);
  };
  const editUpdateFunction = () => {
    setEditModalOpen(false);
  };

  return (
    <>
      <i
        id='edit_option'
        className='fa fa-edit'
        onClick={modalEditFunction}
      ></i>
      {editModalOpen && (
        <ModalEditClick
          cancel={editCancelFunction}
          update={editUpdateFunction}
        />
      )}
    </>
  );
};

export default EditFunction;

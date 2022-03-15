import { useState } from "react";
import ModalEditClick from "./ModalEditClick";

const EditFunction = ({onUpdate}) => {
  const [editModalOpen, setEditModalOpen] = useState(false);

  const setModalOpen = () => {
    setEditModalOpen(true);
  };
  const handleCancel = () => {
    setEditModalOpen(false);
  };
  const handleUpdate = (payload) => {
    onUpdate(payload);
    setEditModalOpen(false);
  };

  return (
    <>
      <i
        id='edit_option'
        className='fa fa-edit'
        onClick={setModalOpen}
      ></i>
      {editModalOpen && (
        <ModalEditClick
          onCancel={handleCancel}
          onUpdate={handleUpdate}
        />
      )}
    </>
  );
};

export default EditFunction;

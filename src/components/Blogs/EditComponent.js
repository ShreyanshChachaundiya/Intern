import React, { useState } from "react";
import BlogForm from "./BlogForm";

const EditComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="absolute inset-0 bg-gray-900 opacity-50" onClick={closeModal}></div>
          <div className="bg-white p-4 rounded shadow-lg z-20 w-[32rem] px-3">
          <div className="flex justify-end">
            <button
              className="bg-gray-700 hover:bg-red-700 text-white font-bold py-1 px-1 rounded flex justify-end"
              onClick={closeModal}
            >
              X
            </button>
          </div>
            <h2 className="text-xl font-bold mb-4  text-gray-500">Edit Blog</h2>
            <BlogForm handleClose={closeModal}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditComponent;

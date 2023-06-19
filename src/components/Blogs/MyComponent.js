import React, { useState } from "react";
import BlogForm from "./BlogForm";

const MyComponent = ({ openModal, closeModal, isOpen, title, body, setTitle , setBody, id }) => {
  
  const handleOpen=()=>{
       setTitle("");
       setBody("");
       openModal();
  }
  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleOpen}
      >
        Add Blog
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div
            className="absolute inset-0 bg-gray-900 opacity-50"
            onClick={closeModal}
          ></div>
          <div className="bg-white p-4 rounded shadow-lg z-20 w-[32rem] px-3">
            <div className="flex justify-end">
              <button
                className="bg-gray-700 hover:bg-red-700 text-white font-bold py-1 px-1 rounded flex justify-end"
                onClick={closeModal}
              >
                X
              </button>
            </div>
            <h2 className="text-xl font-bold mb-4  text-gray-500">
              {title !== "" ? "Edit Blog" : "Add Blog"}
            </h2>
            <BlogForm handleClose={closeModal} body={body} blogTitle={title} id={id}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyComponent;

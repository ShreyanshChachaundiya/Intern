import React, { useState } from "react";
import Form from "./Form";

const ShopForm = ({ openModal, closeModal, isOpen, title, cost, description,setDescription, setTitle , setCategory, setCost, id, category }) => {
  
  const handleOpen=()=>{
    setTitle("");
    setCost("");
    setDescription("");
    setCategory("");
    openModal();
   }

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleOpen}
      >
        Add Item
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
            <h2 className="text-xl font-bold mb-4  text-gray-500">Add Item</h2>
            <Form handleClose={closeModal} itemCost={cost} itemTitle={title} id={id} descr={description} itemCategory={category}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopForm;

import React from 'react';

const DeleteConfirmation = ({ onDelete, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-20">
      <div className="bg-white p-4 rounded shadow">
        <p className="text-gray-800 mb-4">Are you sure you want to delete?</p>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 mr-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={onDelete}
          >
            Yes
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
            onClick={onCancel}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;

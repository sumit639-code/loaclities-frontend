import React from "react";

const Modal = ({ show, onClose, onConfirm, title, message }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-black/25 backdrop-blur-xl rounded-lg shadow-lg max-w-96 p-6 font-RedHat text-white">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="mb-6">{message}</p>
        <div className="flex justify-end transition-all">
          <button
            onClick={onClose}
            className="bg-gray-300 hover:scale-[0.9] transition-all text-gray-700 py-2 px-4 rounded mr-2"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-500 hover:scale-[0.9] transition-all text-white py-2 px-4 rounded"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

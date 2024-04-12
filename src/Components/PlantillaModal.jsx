import React, { useState } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="relative bg-white rounded-lg overflow-hidden shadow-xl max-w-md w-full">
          <div className="absolute top-0 right-0 pt-2 pr-4">
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 7.293a1 1 0 0 1 1.414 1.414L11.414 11l2.707 2.707a1 1 0 1 1-1.414 1.414L10 12.414l-2.707 2.707a1 1 0 1 1-1.414-1.414L8.586 11 5.879 8.293a1 1 0 0 1 1.414-1.414L10 9.586l2.707-2.707a1 1 0 0 1 1.414 0z"
                />
              </svg>
            </button>
          </div>
          <div className="p-6">{children}</div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Open Modal
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
        <p className="text-gray-700">Modal content goes here.</p>
      </Modal>
    </div>
  );
};

export default App;

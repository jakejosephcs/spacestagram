import { XCircleIcon } from "@heroicons/react/solid";
import React from "react";

function Modal({ setIsModalOpen, modalInfo }) {
  return (
    <div className=" bg-black bg-opacity-70 fixed inset-0 flex justify-center items-center h-screen z-10">
      <div className="bg-white m-5 relative rounded pb-4">
        <div className="text-right w-full px-4 py-3 flex justify-between border-b-2">
          <h3 className="self-center text-left">{modalInfo.title}</h3>
          <button
            className="h-6 w-6 text-red-500 hover:text-green-700"
            onClick={() => setIsModalOpen(false)}
          >
            <XCircleIcon />
          </button>
        </div>
        <p className="px-5 max-h-80 max-w-lg overflow-auto leading-6 overscroll-contain">
          {modalInfo.description}
        </p>
      </div>
    </div>
  );
}

export default Modal;

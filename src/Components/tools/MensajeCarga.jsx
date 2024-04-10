import React from "react";

export const MensajeCarga = () => {
  return (
    <div className="flex items-center justify-center h-screen relative">
      <div className="text-center">
        <svg
          className="animate-spin h-10 w-10 mr-3 text-indigo-500 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4zm10-2.709c.88-.827 1.58-1.86 2.04-3H22a10 10 0 00-7.864-3.842L16 9l.001 5.582zM20.695 6.04A9.96 9.96 0 0016 5v4l4.695-.958zM12 20c3.602 0 6.805-1.94 8.548-5H16v4l-4.152-4.153A7.944 7.944 0 0112 20z"
          ></path>
        </svg>
        <span className="text-indigo-500">Cargando datos...</span>
      </div>
    </div>
  );
};

import React from 'react';

function SubmitButton({ text, disabled }) {
  return <button type="submit" disabled={disabled} className="w-full bg-blue-500 hover:bg-blue-700 text-white text-sm md:text-md font-bold py-3 px-3 rounded disabled:opacity-50 disabled:cursor-not-allowed">{text}</button>;
}

export default SubmitButton;
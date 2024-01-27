// import React from 'react';

function Button({ text, color }) {
    return (
      <div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded font-semibold">
          {text}
        </button>
      </div>
    );
  }
  
  export default Button;

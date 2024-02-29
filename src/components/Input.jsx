import React from 'react';

function InputComponent({ inputId, inputName, onChange }) {
   return (
      <div>
         <input
            className='placeholder-gray-500 placeholder-opacity-100 border px-4 py-2 rounded-lg w-full'
            placeholder='diisi yh bray'
            id={inputId}
            name={inputName}
            onChange={onChange}
         ></input>
      </div>
   );
}

export default InputComponent;

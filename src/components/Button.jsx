// import React from 'react';

function Button({ text, onClick }) {
   return (
      <div>
         <button
            className='bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded font-semibold'
            {...{ onClick }}
         >
            {text}
         </button>
      </div>
   );
}

export default Button;

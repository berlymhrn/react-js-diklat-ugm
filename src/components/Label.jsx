import React from 'react';

function Label({ labelText, htmlFor }) {
   return (
      <div>
         <label
            className='block text-gray-900 text-base font-medium mb-2'
            htmlFor={htmlFor}
         >
            {labelText}
         </label>
      </div>
   );
}

export default Label;

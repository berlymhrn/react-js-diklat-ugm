import React, { useState } from 'react';
import { IconX } from '@tabler/icons-react';

function Alert({ alertTitle, textColor, borderColor, bgColor }) {
   const [showAlert, setShowAlert] = useState(true);

   const handleClose = () => {
      setShowAlert(false);
   };

   const alertStyle = {
      textColor,
      borderColor,
      bgColor,
   };

   return (
      <div>
         {showAlert && (
            <div
               className={`flex items-center p-6 mb-4 border-t-4 ${alertStyle.textColor} ${alertStyle.borderColor} ${alertStyle.bgColor}`}
               role='alert'
            >
               <div className='ms-3 text-md font-medium'>
                  {alertTitle}
               </div>
               <button
                  type='button'
                  onClick={handleClose}
                  className='ms-auto -mx-1.5 -my-1.5 bg-gray-800 text-white rounded-lg focus:ring-2 hover:bg-gray-600 inline-flex items-center justify-center h-8 w-8'
               >
                  <IconX size={20} />
               </button>
            </div>
         )}
      </div>
   );
}

export default Alert;

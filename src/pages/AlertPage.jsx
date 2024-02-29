import React, { useState } from 'react';
import { IconArrowNarrowRight } from '@tabler/icons-react';
import Alert from '../components/Alert';

function AlertPage() {
   const [showAlert, setShowAlert] = useState(false);
   const [alertType, setAlertType] = useState('');

   const handleAlertClick = (type) => {
      setShowAlert(true);
      setAlertType(type);
   };

   return (
      <div>
         <div className='flex justify-center mt-16'>
            <div className='relative p-4 w-full max-w-md max-h-full'>
               <div className='relative rounded-lg shadow bg-gray-700'>
                  <div className='flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600'>
                     <h3 className='text-lg font-semibold text-white'>
                        Open Alert
                     </h3>
                  </div>
                  <div className='p-4 md:p-5'>
                     <ul className='space-y-4 mb-4'>
                        <li>
                           <input
                              type='radio'
                              id='job-1'
                              name='job'
                              defaultValue='job-1'
                              className='hidden peer'
                              required
                           />
                           <label
                              htmlFor='job-1'
                              className='inline-flex items-center justify-between w-full p-5 border rounded-lg cursor-pointer border-gray-500 peer-checked:border-green-500 peer-checked:text-green-400 text-white bg-gray-600 hover:bg-gray-500'
                              onClick={() => handleAlertClick('success')}
                           >
                              <div className='block'>
                                 <div className='w-full text-lg font-semibold'>
                                    Alert Sucessfull
                                 </div>
                              </div>
                              <IconArrowNarrowRight size={35} />
                           </label>
                        </li>
                        <li>
                           <input
                              type='radio'
                              id='job-2'
                              name='job'
                              defaultValue='job-2'
                              className='hidden peer'
                           />
                           <label
                              htmlFor='job-2'
                              className='inline-flex items-center justify-between w-full p-5 border rounded-lg cursor-pointer border-gray-500 peer-checked:border-green-500 peer-checked:text-green-400 text-white bg-gray-600 hover:bg-gray-500'
                              onClick={() => handleAlertClick('warning')}
                           >
                              <div className='block'>
                                 <div className='w-full text-lg font-semibold'>
                                    Alert Warning
                                 </div>
                              </div>
                              <IconArrowNarrowRight size={35} />
                           </label>
                        </li>
                        <li>
                           <input
                              type='radio'
                              id='job-3'
                              name='job'
                              defaultValue='job-3'
                              className='hidden peer'
                           />
                           <label
                              htmlFor='job-3'
                              className='inline-flex items-center justify-between w-full p-5 border rounded-lg cursor-pointer border-gray-500 peer-checked:border-green-500 peer-checked:text-green-400 text-white bg-gray-600 hover:bg-gray-500'
                              onClick={() => handleAlertClick('error')}
                           >
                              <div className='block'>
                                 <div className='w-full text-lg font-semibold'>
                                    Alert Error
                                 </div>
                              </div>
                              <IconArrowNarrowRight size={35} />
                           </label>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>

         {showAlert && alertType === 'success' && (
            <Alert
               alertTitle={'YEAY, SUCCESSFULLY!'}
               textColor='text-green-800'
               borderColor='border-green-800'
               bgColor='bg-green-200'
            />
         )}
         {showAlert && alertType === 'warning' && (
            <Alert
               alertTitle={'WARNING'}
               textColor='text-yellow-800'
               borderColor='border-yellow-800'
               bgColor='bg-yellow-200'
            />
         )}
         {showAlert && alertType === 'error' && (
            <Alert
               alertTitle={'ERROR'}
               textColor='text-red-800'
               borderColor='border-red-800'
               bgColor='bg-red-200'
            />
         )}
      </div>
   );
}

export default AlertPage;

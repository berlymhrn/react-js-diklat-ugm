import React from 'react';
import Button from '../components/button';
import { Link } from 'react-router-dom';

function ButtonPage() {
   return (
      <div className='bg-slate-900 min-h-screen'>
         <h1 className='flex justify-center text-2xl font-bold bg-green-600 py-5'>
            React JS + Tailwind CSS For Diklat UGM
         </h1>

         <div className='flex gap-x-2 mb-10 justify-center mt-20'>
            <div className='flex gap-x-2 mb-10'>
               <Button text='Button Only' />
               <Link to='/alert'>
                  <Button text='See Alert Project' />
               </Link>
               <Link to='/counter'>
                  <Button text='See Counter' />
               </Link>
               <Link to='/card'>
                  <Button text='See Card' />
               </Link>
            </div>
         </div>
      </div>
   );
}

export default ButtonPage;

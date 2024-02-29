import React, { useState } from 'react';
import Button from '../components/button';

function CounterPage() {
   const [count, setCount] = useState(0);

   const handleClickPlus = () => {
      setCount(count + 1);
   };
   const handleClickMinus = () => {
      setCount(count - 1);
   };

   return (
      <div className='bg-slate-900 min-h-screen flex flex-col items-center justify-center'>
         <h1 className='text-white text-2xl font-bold mb-5'>COUNTER</h1>
         <h1 className='text-white text-3xl mb-10'>{count}</h1>
         <div className='flex gap-4'>
            <Button text='-' onClick={handleClickMinus} />
            <Button text='+' onClick={handleClickPlus} />
         </div>
      </div>
   );
}

export default CounterPage;

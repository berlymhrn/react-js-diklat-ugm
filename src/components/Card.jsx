import React from 'react';
import Button from './button';

function Card({ title, content, buttonText, buttonClicked }) {
   return (
      <div className='w-96 border rounded-xl shadow-xl p-5 mb-10'>
         <h3 className='font-bold text-xl mb-8'>{title}</h3>
         <p className='mb-8'>{content}</p>
         <Button text={buttonText} onClick={buttonClicked} />
      </div>
   );
}

export default Card;

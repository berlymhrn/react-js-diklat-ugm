import React, { useState } from 'react';
import Card from '../components/Card';
import InputComponents from '../components/Input';
import Label from '../components/Label';

function CardPage() {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [registeredName, setRegisteredName] = useState('');
   const [registeredEmail, setRegisteredEmail] = useState('');

   const handleClick = () => {
      setRegisteredName(name);
      setRegisteredEmail(email);
   };

   return (
      <div className='min-h-screen flex gap-10 justify-center items-center'>
         <Card
            title='Hello World'
            content='Lorem ipsum dolor sit amet.Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet'
            buttonText='Register'
         />
         <Card
            title='Sign Up For A New Account'
            content={
               <>
                  <div className='mb-5 border rounded-lg p-3'>
                     <p>name : {registeredName}</p>
                     <p>email: {registeredEmail}</p>
                  </div>
                  <div className='mb-5'>
                     <Label labelText='Username' htmlFor='name'>
                        <span>{name}</span>
                     </Label>
                     <InputComponents
                        inputId='name'
                        inputName='name'
                        onChange={(event) => setName(event.target.value)}
                     />
                  </div>
                  <div className='mb-3'>
                     <Label labelText='Email'>
                        <span>{email}</span>
                     </Label>
                     <InputComponents
                        inputId='email'
                        inputName='email'
                        htmlFor='email'
                        onChange={(event) => setEmail(event.target.value)}
                     />
                  </div>
               </>
            }
            buttonText='Register'
            buttonClicked={handleClick}
         />
      </div>
   );
}

export default CardPage;

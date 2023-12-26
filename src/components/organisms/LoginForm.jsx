import { useState } from 'react';
import FormInput from '../molecules/FormInput';
import Button from '../atoms/Button';
import PropTypes from 'prop-types';
import { Form } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




export default function LoginForm({getToken}) {
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const navigate = useNavigate()

  async function handleForm (event) {
      event.preventDefault();
      const token = await getToken(email, password)
      token && navigate('/dashboard')
  };

  return (
    <div className="flex flex-col justify-center flex-1">
      <h1 className="text-[28px] font-semibold mb-4 text-center text-sky-900">Talenesia Account Login</h1>
      <Form method="post" className='flex flex-col items-center' onSubmit={handleForm}>
        <FormInput
          label="Email"
          type="text"
          placeholder="Enter your email"
          name="email"
          value={email}
          onChange={e => setEmail (e.target.value)}
          classNameInput='w-full bg-transparent border-solid border-2 border-sky-900 rounded-lg p-2'
        />
        <FormInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          name="password"
          value={password}
          onChange={e => setPassword (e.target.value)}
          classNameInput='w-full bg-transparent border-solid border-2 border-sky-900 rounded-lg p-2'
        />
        <Button
          label="Login"
          type="submit"
          className="w-full lg:w-3/4 h-[50px] rounded-3xl text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-teal-600 border-2 border-blue-950 text-white hover:text-slate-100 hover:bg-teal-550 active:bg-teal-800 active:text-teal-100 focus-visible:outline-teal-600"
        />
      </Form>
    </div>
  );
}





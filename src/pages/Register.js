import { useState } from 'react';
import Notification from '../components/Notification';
import RegisterForm from '../components/RegisterForm';

function Register() {
  const [error, setError] = useState('');
  return (
    <>
      {error && <Notification message={error} />}
      <RegisterForm setError={setError} />
    </>
  );
}

export default Register;

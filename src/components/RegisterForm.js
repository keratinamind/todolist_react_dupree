import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../config/axios';

function RegisterForm(props) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const history = useHistory();

  const handleSubmitRegister = e => {
    e.preventDefault();
    axios
      .post('/register', { username, password, email, confirmPassword })
      .then(() => {
        history.push({
          pathname: '/login',
          state: { successMessage: 'Your account has been created. Please log in to continue.' }
        });
      })
      .catch(err => {
        if (err.response && err.response.status === 400) {
          props.setError(err.response.data.message);
        }
      });
  };

  return (
    <div className="border shadow p-3 mb-4">
      <form onSubmit={handleSubmitRegister}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="form-label">Confirm password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;

import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../config/axios';
import jwtDecode from 'jwt-decode';
import { AuthContext } from '../contexts/authContext';
import { setToken } from '../services/localStorage';

function LoginForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(AuthContext);

  const history = useHistory();

  const handleSubmitLogin = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/login', { username, password });
      console.log(res);
      setToken(res.data.token);
      setUser(jwtDecode(res.data.token));
      history.push('/');
    } catch (err) {
      if (err.response && err.response.status === 400) {
        props.setError('Invalid username or password');
        setTimeout(() => props.setError(''), 5000);
        console.clear();
      }
    }
  };

  return (
    <div className="border shadow p-3 mb-4">
      <form onSubmit={handleSubmitLogin}>
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
        <div className="mb-4">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;

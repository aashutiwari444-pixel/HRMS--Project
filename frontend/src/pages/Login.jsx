import { useState } from 'react';
import { api } from '../api.js';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('asha@hrms.com');
  const [password, setPassword] = useState('password123');
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    try {
      const { token, user } = await api('/auth/login', { method: 'POST', body: { email, password } });
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      onLogin(user);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-brand">
          <div className="auth-brand-mark">H</div>
          <div>
            <strong>Northstar HRMS</strong>
          </div>
        </div>
        <h1>Welcome back</h1>
        <p>Sign in to access your workforce dashboard and employee tools.</p>

        <form className="login-form" onSubmit={submit}>
          <div className="stack-form">
            <label>
              Email
              <input value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
              Password
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            {error && <p className="error">{error}</p>}
            <button type="submit" className="primary-button">Log in</button>
          </div>
        </form>

        <small>
          Demo users: asha (employee), rohit (team leader), neha (process manager), sanjay (HR) @hrms.com
        </small>
      </div>
    </div>
  );
}

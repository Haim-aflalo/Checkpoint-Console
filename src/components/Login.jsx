import { useState, useContext } from 'react';
import { LogContext } from '../contexts/LogProviders';

function Login() {
  let { flag, setFlag } = useContext(LogContext);
  const [data, setData] = useState({ name: '', password: '' });
  const [user, setUser] = useState({
    id: 'N/A',
    name: 'N/A',
    role: 'N/A',
  });

  async function connection(event) {
    event.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          password: data.password,
        }),
      });

      const result = await res.json();
      setUser(result);
      setFlag(true);
    } catch (error) {
      console.error('Login failed:', error);
      setUser({ id: 'Error', name: 'Login failed', role: 'Error' });
    }
  }

  return (
    <>
      {!flag && (
        <section>
          <form>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <br />
            <br />
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Your password"
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <br />
            <br />
            <button type="submit" onClick={connection}>
              Submit
            </button>
          </form>
          <br />
          <div>
            Id: {user.id} <br />
            Name: {user.name} <br />
            Role: {user.role}
          </div>
        </section>
      )}
    </>
  );
}

export default Login;

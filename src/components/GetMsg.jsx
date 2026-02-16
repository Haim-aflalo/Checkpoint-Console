import { useState, useContext } from 'react';
import { LogContext } from '../contexts/LogProviders';

function GetMsg() {
  const [data, setData] = useState({ id: '' });
  const [msg, setMsg] = useState('');
  let { flag } = useContext(LogContext);
  async function getAll(event) {
    event.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/api/messages', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          id: data.id,
        },
      });
      const result = await res.json();
      result.messages.length > 0
        ? setMsg(result.messages)
        : setMsg('No messages');
    } catch (error) {
      console.error('Login failed:', error);
      setMsg({ messages: 'Login failed' });
    }
  }

  return (
    <div>
      {flag && (
        <section>
          <form onSubmit={getAll}>
            <input
              type="text"
              id="id"
              name="id"
              placeholder="Your id"
              onChange={(e) => setData({ ...data, id: e.target.value })}
            />
            <br />
            <br />
            <button type="submit"> Submit </button>
          </form>

          <br />
          <div>
            <p>Messages</p>
            {Array.isArray(msg)
              ? msg.map((m) => {
                  return <div>{m}</div>;
                })
              : JSON.stringify(msg)}
          </div>
        </section>
      )}
    </div>
  );
}

export default GetMsg;

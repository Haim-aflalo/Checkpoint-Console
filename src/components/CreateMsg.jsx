import { useState, useContext } from 'react';
import { LogContext } from '../contexts/LogProviders';

function CreateMsg() {
  const [data, setData] = useState({ id: '', message: '' });
  const [response, setResponse] = useState({ msg: 'No messages created' });
  let { flag } = useContext(LogContext);
  async function create(event) {
    event.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          id: data.id,
        },
        body: JSON.stringify({
          message: data.message,
        }),
      });

      const result = await res.json();
      setResponse(result);
    } catch (error) {
      console.error('Login failed:', error);
      setResponse({ id: 'Error', name: 'Login failed', role: 'Error' });
    }
  }

  return (
    <>
      {flag && (
        <section>
          <form onSubmit={create}>
            <input
              type="text"
              id="id"
              name="id"
              placeholder="Your id"
              onChange={(e) => setData({ ...data, id: e.target.value })}
            />
            <br />
            <textarea
              name="msg"
              id="msg"
              onChange={(e) => setData({ ...data, message: e.target.value })}
            ></textarea>
            <br />
            <button type="submit"> Submit </button>
          </form>
          <div>
            <p>Messages:{response.msg}</p>
          </div>
        </section>
      )}
    </>
  );
}

export default CreateMsg;

import { useContext } from 'react';
import { LogContext } from '../contexts/LogProviders';

function Logout() {
  let { flag, setFlag } = useContext(LogContext);
  function switchMode() {
    if (flag) {
      setFlag(false);
    }
  }
  return <button onClick={switchMode}>LOGOUT</button>;
}

export default Logout;

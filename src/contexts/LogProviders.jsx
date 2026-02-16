import { createContext, useState } from 'react';

const LogContext = createContext();

function LogProvider({ children }) {
  const [flag, setFlag] = useState(false);

  return <LogContext value={{ flag, setFlag }}>{children}</LogContext>;
}

export { LogContext, LogProvider };

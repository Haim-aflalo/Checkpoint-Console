import Login from './components/Login';
import GetMsg from './components/GetMsg';
import CreateMsg from './components/Createmsg';
import { LogProvider } from './contexts/LogProviders';
import Logout from './components/Logout';
import './App.css';

function App() {
  return (
    <>
      <LogProvider>
        <Login />
        <GetMsg />
        <CreateMsg />
        <Logout />
      </LogProvider>
    </>
  );
}

export default App;

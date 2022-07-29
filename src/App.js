import { useState} from 'react';
import { Context } from './context/context';
import LoginForm from './components/LoginForm'
import Counterparty from './components/Counterparty';

function App() {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  return (
    <Context.Provider value={{
      currentUser,
      setCurrentUser,
      showModeratorBoard,
      setShowModeratorBoard,
      showAdminBoard,
      setShowAdminBoard
    }}>
      <div className="App">
        <header className="App-header">
          <LoginForm/>
        </header>
        <main>
          <Counterparty />
        </main>
      </div>
    </Context.Provider>
  );
}

export default App;

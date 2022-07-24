import react, {useEffect, useState} from 'react';
import { Context } from './context/context';
import LoginForm from './components/LoginForm'
import AuthService from './services/auth.service';
import EventBus from './common/EventBus';

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
        Hello world!!!
      </div>
    </Context.Provider>
  );
}

export default App;

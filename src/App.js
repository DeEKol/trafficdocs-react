import { useState} from 'react';
import { Context } from './context/context';
import LoginForm from './components/LoginForm'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/UI/navbar/Navbar';
import AppRouter from './components/AppRouter';

function App() {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  const [elements, setElements] = useState([]);
  const [objectForm, setObjectForm] = useState({});

  return (
    <Context.Provider value={{
      currentUser,
      setCurrentUser,
      showModeratorBoard,
      setShowModeratorBoard,
      showAdminBoard,
      setShowAdminBoard,
      elements,
      setElements,
      objectForm,
      setObjectForm
    }}>
        <header className="App-header">
          <LoginForm/>
          <BrowserRouter>
            <Navbar />
            <AppRouter />
          </BrowserRouter>
        </header>
    </Context.Provider>
  );
}

export default App;

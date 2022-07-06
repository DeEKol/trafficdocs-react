import react, {useEffect, useState} from 'react';
import { Context } from './context/context';
import LoginForm from './components/LoginForm'
import AuthService from './services/auth.service';
import EventBus from './common/EventBus';

function App() {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  // useEffect(() => {
  //   const user = AuthService.getCurrentUser();

  //   if (user) {
  //     setCurrentUser(user);
  //     setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
  //     setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
  //   }

  //   EventBus.on("logout", () => {
  //     logOut();
  //   })

  //   return () => {
  //     EventBus.remove("logout");
  //   }
  // }, [])

  // const logOut = () => {
  //   AuthService.logout();
  //   setShowModeratorBoard(false);
  //   setShowAdminBoard(false);
  //   setCurrentUser(undefined);
  // }

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

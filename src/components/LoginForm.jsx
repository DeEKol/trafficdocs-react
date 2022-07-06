import React, { useState, useContext } from 'react';
import { Context } from '../context/context';
import AuthService from '../services/auth.service';
import TokenService from '../services/token.service';
import TripService from '../services/trip.service.js'

const LoginForm = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
    
//     const {user, setUser, isAuth, setAuth} = useContext(Context);

//     useEffect(() => {
//         if (localStorage.getItem('token')) {
//             console.log('UseEffect!');
//             setAuth(true);
//             console.log(isAuth);
//             checkAuth();
//         }
//     }, [])

//     const login = async (username, password) => {
//         try { 
//             const response = await AuthService.login(username, password);
//             console.log(response);

//             console.log(JSON.stringify(response.data));
//             localStorage.setItem("user", JSON.stringify(response.data))

// //            localStorage.setItem('token', response.data.token);
// //            localStorage.setItem('refreshToken', response.data.refreshToken)
//             const userValid = {
//                 username: username,
//                 password: password
//             }
//             setAuth(true);
//             setUser(userValid);
//         } catch (e) {
//             console.log(e);
//         }
//     }

//     const logout = () => {
//         localStorage.removeItem('token');
//         localStorage.removeItem('refreshToken');
//         setAuth(false);
//         setUser({});
//     }

//     const checkAuth = async () => {
//         console.log(localStorage.getItem('refreshToken'));
//         try {
//             const response = await AuthService.refresh(localStorage.getItem('refreshToken'));

//             localStorage.setItem('token', response.data.accessToken);
//             localStorage.setItem('refreshToken', response.data.refreshToken)
//             console.log(response);
//         } catch (e) {
//             console.log(e);
//         }
//     }

//     const getTrips = async () => {
//         try {
//             const response = await TripService.getAll();
//             console.log(response);
//         } catch (e) {
//             console.log(e);
//         }
//     }

//     return (
//         <div>
//             <h1>{isAuth ? `Пользователь авторизован ${user.username}` : 'АВТОРИЗУЙТЕСЬ!'}</h1>
//             <input
//                 onChange={e => setUsername(e.target.value)}
//                 value={username}
//                 type="text"
//                 placeholder='Username'
//             />
//             <input
//                 onChange={e => setPassword(e.target.value)}
//                 value={password}
//                 type="password"
//                 placeholder='Password'
//             />
//             <button onClick={() => login(username, password)}>Логин</button>
//             <button onClick={() => checkAuth()}>Регистрация</button>
//             <button onClick={() => logout()}>Выйти</button>
//             <button onClick={() => getTrips()}>Тест</button>
//         </div>
//     )

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { currentUser, setCurrentUser, showModeratorBoard, setShowModeratorBoard, showAdminBoard, setShowAdminBoard } = useContext(Context);

    // useEffect(() => {
    //     const user = AuthService.getCurrentUser();

    //     if (user) {
    //         setCurrentUser(user);
    //         setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
    //         setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    //     }

    //     EventBus.on("logout", () => {
    //         logOut();
    //     })

    //     return () => {
    //         EventBus.remove("logout");
    //     }
    // }, [])

    const login = async (username, password) => {
        try { 
            const response = await AuthService.login(username, password);
            console.log(response);

            console.log(JSON.stringify(response));
            localStorage.setItem("user", JSON.stringify(response))
        } catch (e) {
            console.log(e);
        }
    }

    const logOut = () => {
        AuthService.logout();
        setShowModeratorBoard(false);
        setShowAdminBoard(false);
        setCurrentUser(undefined);
    }

    const getTrips = async () => {
        try {
            const response = await TripService.getAll();
            console.log(response.data);
        } catch(e) {
            console.log(e);
        }
    }

    const getUser = async () => {
        const response = await AuthService.getCurrentUser();
        console.log(response);
    }

    const getToken = async () => {
        const response = await TokenService.getLocalAccessToken();
        console.log(response);
    }

    return (
        <div>
            <input
                onChange={e => setUsername(e.target.value)}
                value={username}
                type="text"
                placeholder='Username'
            />
            <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder='Password'
            />
            <button onClick={() => login(username, password)}>Логин</button>
            <button onClick={() => logOut()}>Выйти</button>
            <button onClick={() => getUser()}>Юзер</button>
            <button onClick={() => getTrips()}>Trips</button>
            <button onClick={() => getToken()}>token</button>


        </div>
    )

}

export default LoginForm;
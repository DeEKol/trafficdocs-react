import React, { useState, useContext } from 'react';
import { Context } from '../context/context';
import AuthService from '../services/auth.service';
import TokenService from '../services/token.service';
import TripService from '../services/trip.service.js'

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { currentUser, setCurrentUser, showModeratorBoard, setShowModeratorBoard, showAdminBoard, setShowAdminBoard } = useContext(Context);
    
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
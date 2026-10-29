import {useNavigate} from 'react-router-dom';
import {useState} from "react";

const loggedInStatus = (localStorage.getItem('logged_in') === 'true')

function HomePage() {

    const username = localStorage.getItem('username');

    return (
        <div className='homepage'>
            <title>DepExpress | Homepage</title>
            <h1>DepExpress</h1>
            <p>Willkommen bei DepExpress, ihr Händler des Vertrauens!</p>
            <LogOutButton />
            {!loggedInStatus ? <LoginButton/> : <p>{username.toString()}</p>}
        </div>
    )
}

function LoginButton() {
    const navigation = useNavigate();
    return (
        <button onClick={() => navigation("/login")}>Log-In</button>
    )
}

function LogOutButton() {
    if (loggedInStatus) {
        return (
          <button id="logOut" onClick={removeProfile}>Log-Out</button>
        );
    }
}

function removeProfile() {
    localStorage.removeItem('username');
    localStorage.removeItem('logged_in');
    window.location.reload();
}

export default HomePage;
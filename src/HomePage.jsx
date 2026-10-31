import {useNavigate} from 'react-router-dom';

// TODO: Add TTL to store Image for a period of time.
const loggedInStatus = (localStorage.getItem('logged_in') === 'true')
const usernameKey = 'username';
const logInStatusKey = 'logged_in';
const imgSize = 50;

// This is the HomePage render
function HomePage() {
    return (
        <div className='homepage'>
            <title>DepExpress | Homepage</title>
            <h1>DepExpress</h1>
            <p>Willkommen bei DepExpress, ihr Händler des Vertrauens!</p>
            {!loggedInStatus ? <LoginButton/> : <LogOutButton/>}
        </div>
    );
}

function LoginButton() {
    const navigation = useNavigate();

    return (
        <div>
            <button onClick={() => navigation("/login")}>Log-In</button>
            <img src={`https://api.mcheads.org/head/notch/${imgSize}`} alt="profile"/>
        </div>
    );
}

function removeProfile() {
    localStorage.removeItem(usernameKey);
    localStorage.removeItem(logInStatusKey);
    window.location.reload();
}

function LogOutButton() {
    const username = localStorage.getItem(usernameKey);
    return (
        <div>
            <button id="logOut" onClick={removeProfile}>Log-Out</button>
            <img src={`https://api.mcheads.org/head/${username}/${imgSize}`} alt="profile"/>
            <p id="username">{username.toString()}</p>
        </div>
    );
}

export default HomePage;
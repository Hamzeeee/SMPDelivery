import {useNavigate} from 'react-router-dom';
import {logInStatusKey} from "./constans.jsx";
import {UserNameKey} from "./constans.jsx";
import {loggedInStatus} from "./constans.jsx";

const loginStatus = loggedInStatus;
const usernameKey = UserNameKey;
const imgSize = 50;

// This is the HomePage render
function HomePage() {
    const navigate = useNavigate();

    function LoginButton() {
        return (
            <div>
                <button id="loginButton" onClick={() => navigate("/login")}>Log-In</button>
                <img src={`https://api.mcheads.org/head/notch/${imgSize}`} alt="profile"/>
            </div>
        );
    }

    function RedirectToOrderButton() {
        if (!loginStatus) return;
        const redirectToOrderPage = () => {
            navigate("/orderpage");
        }
        return <button id="orderButton" onClick={redirectToOrderPage}>Hier bestellen!</button>;
    }

    function RemoveProfile() {
        localStorage.removeItem(usernameKey);
        localStorage.removeItem(logInStatusKey);
        window.location.reload();
    }

    function LogOutButton() {
        const username = localStorage.getItem(usernameKey);
        return (
            <div>
                <button id="logOutButton" onClick={RemoveProfile}>Log-Out</button>
                <img src={`https://api.mcheads.org/head/${username}/${imgSize}`} alt="profile"/>
                <p id="username">{username.toString()}</p>
            </div>
        );
    }

    return (
        <div className='homepage'>
            <title>DepExpress | Homepage</title>
            <h1>DepExpress</h1>
            <p>Willkommen bei DepExpress, ihr Händler des Vertrauens!</p>
            {!loginStatus ? <LoginButton/> : <LogOutButton/>}
            <RedirectToOrderButton />
        </div>
    );
}

export default HomePage;
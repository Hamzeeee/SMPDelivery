import {useState} from "react";
import {useNavigate} from "react-router-dom";
import base64 from 'react-native-base64';

const inputElement = 'userNameInput';

function LoginPage() {
    const [component, setComponent] = useState(null);
    const navigate = useNavigate();

    async function handleUserName(event) {
        event.preventDefault();
        try {
            const username = document.getElementById(inputElement).value.trim();
            const apiCheck = await fetch('http://localhost:8080/api/player/' + username);

            if (apiCheck.status === 504) return setComponent(() => <p className="errorMessage">Mojang API not reachable. Please try again later!</p>);
            if (apiCheck.status === 404) return setComponent(() => <p className="errorMessage">Invalid username!</p>);
            if (apiCheck.status !== 200) return setComponent(() => <p className="errorMessage">Something went wrong! :(</p>);

            setComponent(() => <p className="logInText">Logging in.. please wait!</p>);
            localStorage.setItem("logged_in", "true");
            localStorage.setItem("playerHead", base64.decode());
            localStorage.setItem("username", username.toString());
            navigate("/");
            window.location.reload();
        } catch (err) {
            console.log(err);
            setComponent(() => <p className="errorMessage">Error! Cannot connect to API server at the moment.</p>)
        }
    }

    return (
        <div>
            <h1>Login Page</h1>
            <div>
                <form onSubmit={handleUserName}>
                    <input id={inputElement} type="text" placeholder="Username"/>
                    <button id="submit" onClick={handleUserName}>Login</button>
                    {component}
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
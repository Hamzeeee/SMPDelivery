import {useState} from "react";
import {useNavigate} from "react-router-dom";

function LoginPage() {
    const [component, setComponent] = useState(null);
    const navigate = useNavigate();

    async function handleUserName() {
        try {
            const username = document.getElementById('username').value.trim();
            const apiCheck = await fetch('http://localhost:8080/api/player/' + username);

            if (apiCheck.status === 504) {
                setComponent(() =>
                    <p className="errorMessage">Mojang API not reachable. Please try again later!</p>
                );
                return;
            }

            if (apiCheck.status === 404) {
                setComponent(() =>
                    <p className="errorMessage">Invalid username!</p>
                )
                return;
            }

            if (apiCheck.status !== 200) {
                setComponent(() =>
                    <p className="errorMessage">Something went wrong! :(</p>);
                return;
            }

            localStorage.setItem("logged_in", "true");
            localStorage.setItem("username", username.toString());
            navigate("/");
            window.location.reload();
        } catch (err) {
            console.log(err);
            setComponent(() => <p className="errorMessage">Error! Cannot connect to API server at the moment.</p>)
        }
    }

    // TODO: FIX SUBMIT BUTTON AND REFACTOR CODE
    return (
        <div>
            <h1>Login Page</h1>
            <div>
                <input id="usernameInput" type="text" placeholder="Username"/>
                <button id="submit" onClick={handleUserName}}>Login
                </button>
                {component}
            </div>
        </div>
    );
}

function inputPressEnter() {
    const input = document.getElementById('usernameInput');
    input.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById('submit').click();
        }
    })
}

export default LoginPage;
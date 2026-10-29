import {useState} from "react";
import { useNavigate } from "react-router-dom";

function UserNameInput() {

    // Function

    // TODO: Fix useState ASAP to redirect user.
    function CheckValidUsernameButton() {
        const [component, setComponent] = useState(null);
        const username = document.getElementById("username").value.trim();

        // Function
        async function ValidateUserName() {
            try {
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
                localStorage.setItem("username", username);
                const navigate = useNavigate();
                navigate("/");
                console.log("SUCCESS!");
            } catch (err) {
                console.log(err);
                setComponent(() => <p className="errorMessage">Error! Can't connect to API server at the moment.</p>)
            }
        }
        ValidateUserName();
    }


    return (
        <div>
            <input id="username" type="text" placeholder="Username"/>
            <button onClick={CheckValidUsernameButton}>Login</button>
            {component}
        </div>
    )
}


function LoginPage() {
    return (
        <div>
            <h1>Login Page</h1>
            <UserNameInput/>
        </div>
    );
}

export default LoginPage;
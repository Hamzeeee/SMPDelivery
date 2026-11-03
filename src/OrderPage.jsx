import {useNavigate} from "react-router-dom";

function OrderPage() {
    const navigate = useNavigate();
    const loggedInStatus = (localStorage.getItem(process.env.REACT_APP_LOGIN_KEY) === 'true');

    function CheckAuthorization() {
        if (!loggedInStatus) {
            navigate("/");
        }
    }

    function HomeButton() {
        return <button id="homeButton" onClick={() => navigate("/")}>Home</button>
    }


    return (
        <div>
            <CheckAuthorization />
            <title>DepExpress | Orderpage</title>
            <h1>Wähle deine Items aus! :D</h1>
            <HomeButton />
        </div>
    );
}

export default OrderPage;
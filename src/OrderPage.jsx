import {Navigate, useNavigate} from "react-router-dom";
import {loggedInStatus} from "./constans.jsx";

function OrderPage() {
    const navigate = useNavigate();

    function CheckAuthorization() {
        if (!loggedInStatus) {
            return <Navigate to="/" />
        }
    }

    function HomeButton() {
        return <button id="homeButton" onClick={() => navigate("/")}>Home</button>
    }

    function createItem(name, alt, logo, price, quantity) {
        return (
            <div>
                <h3>{name}</h3>
                <img src={logo} alt="item"/>
                <p className="number">Preis: {price}</p>
                <p className="quantity">Stückzahl: {quantity}</p>
            </div>
        );
    }

    // TODO: DO something
    // Temporary item, will be replaced with a Json-Body
    function TempItem() {
        return createItem("Diamonds", "dia", "https://de.minecraft.wiki/images/Diamant.png?60c1a", 20, 64);
    }

    return (
        <div>
            <CheckAuthorization/>
            <title>DepExpress | Orderpage</title>
            <h1>Wähle deine Items aus! :D</h1>
            <HomeButton/>
            <TempItem />
        </div>
    );
}

export default OrderPage;
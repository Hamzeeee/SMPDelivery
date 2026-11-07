import {Navigate, useNavigate} from "react-router-dom";
import {loggedInStatus} from "./Constants.jsx";

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

    function createItem(name, logo, alt, price, quantity) {
        return (
            <div>
                <h3>{name}</h3>
                <img src={logo} alt="item"/>
                <p className="number">Preis: {price}</p>
                <p className="quantity">Stückzahl: {quantity}</p>
                <button className="buyButton" onClick={() => {
                    if (localStorage.getItem(name) !== null) {
                        const extractJson = JSON.parse(localStorage.getItem(name));
                        extractJson.quantity = extractJson.quantity + quantity;
                        extractJson.price = extractJson.price + price;
                        localStorage.setItem(name, JSON.stringify(extractJson));
                        return;
                    };

                    const itemToJson = {
                        name: name,
                        img: logo,
                        price: price,
                        quantity: quantity
                    };

                    localStorage.setItem(name, JSON.stringify(itemToJson));
                }}>Buy!</button>
            </div>
        );
    }

    // Temporary item, will be replaced with a Json-Body
    function TempItem() {
        return createItem("Diamonds", "dia", "https://de.minecraft.wiki/images/Diamant.png?60c1a", 20, 64);
    }

    function TempItem2() {
        return createItem("Wood", "dia", "https://de.minecraft.wiki/images/Netherite.png?60c1a", 20, 64);
    }

    return (
        <div>
            <CheckAuthorization/>
            <title>DepExpress | Orderpage</title>
            <h1>Wähle deine Items aus! :D</h1>
            <HomeButton/>
            <TempItem />
            <TempItem2 />
        </div>
    );
}

export default OrderPage;
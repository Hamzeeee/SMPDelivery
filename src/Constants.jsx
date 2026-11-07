import {Navigate} from "react-router-dom";

export const logInStatusKey = "loggedInStatus";
export const loggedInStatus = (localStorage.getItem(logInStatusKey) === 'true');
export const UserNameKey = "username";

export function CheckAuthorization() {
    if (!loggedInStatus) {
        return <Navigate to="/" />
    }
}
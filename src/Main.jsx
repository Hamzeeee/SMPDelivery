import {createRoot} from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./HomePage.jsx"
import LoginPage from "./LoginPage.jsx"
import Orderpage from "./OrderPage.jsx"

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/orderpage" element={<Orderpage />} />
        </Routes>
    </BrowserRouter>
);
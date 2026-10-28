import {createRoot} from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homepage from "./HomePage.jsx"

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage />} />
        </Routes>
    </BrowserRouter>
);
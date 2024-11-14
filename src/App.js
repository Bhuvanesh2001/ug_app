import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MobileVerification from "./MobileVerification";
import WelcomePage from "./WelcomePage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route
                    path="/MobileVerification"
                    element={<MobileVerification />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

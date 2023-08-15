import "./App.css";
import { Routes, Route } from "react-router-dom";

// ==================== Pages ====================
import LandingPage from "./pages/LandingPage";
import DemoPage from "./pages/DemoPage";

// ==================== components ====================
import Navbar from "./components/general/Navbar";
function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/demo" element={<DemoPage />} />
            </Routes>
        </>
    );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";

// ==================== Pages ====================
import LandingPage from "./pages/LandingPage";
import DemoPage from "./pages/DemoPage";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/demo" element={<DemoPage />} />
            </Routes>
        </>
    );
}

export default App;

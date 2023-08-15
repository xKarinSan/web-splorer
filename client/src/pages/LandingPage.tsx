import React from "react";

// ===================components========================
import LandingBanner from "../components/landing/LandingBanner";
import GuideSection from "../components/landing/GuideSection";
import WhySection from "../components/landing/WhySection";
function LandingPage() {
    return (
        <div>
            <LandingBanner />
            <GuideSection />
            <WhySection />
        </div>
    );
}

export default LandingPage;

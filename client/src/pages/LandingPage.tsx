import React from "react";
import { Box } from "@chakra-ui/react";
// ===================components========================
import LandingBanner from "../components/landing/LandingBanner";
import GuideSection from "../components/landing/GuideSection";
import WhySection from "../components/landing/WhySection";
function LandingPage() {
    return (
        <Box>
            <LandingBanner />
            <GuideSection />
            <WhySection />
        </Box>
    );
}

export default LandingPage;

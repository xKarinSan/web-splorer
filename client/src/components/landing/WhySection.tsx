import { Box, SimpleGrid } from "@chakra-ui/react";
// =========================== components ===========================
import CustomHeader from "../universal/CustomHeader";
import { LandingDisplayCard } from "../../types/landing/display";
import DisplayContainer from "./DisplayContainer";

// =========================== images ===========================
import Hourglass from "../../images/hourglass.png";
import Dollar from "../../images/dollar.png";
import Interactive from "../../images/interactive.png";
function WhySection() {
    const displayItems: LandingDisplayCard[] = [
        {
            title: "Quick and Easy",
            desc: "All it takes is a copy and paste a website and Web-splorer will do the rest!",
            image: Hourglass,
        },
        {
            title: "Free to Use",
            desc: "As this is open source, you do not need to pay a single cent, thus using it for free!",
            image: Dollar,
        },
        {
            title: "Interactive (Beta)",
            desc: "You can interact with the DOM and choose where you want to obtain data",
            image: Interactive,
        },
    ];
    return (
        <Box
            padding="15px"
            id="why"
            width={["100%", null, "80%", "70%"]}
            display="grid"
            margin="auto"
        >
            <CustomHeader fontSize="34px" textAlign={"left"} fontWeight="light">
                Why use Web-splorer?
            </CustomHeader>
            <SimpleGrid columns={[1, null, 3]} spacing={10} padding="15px">
                {displayItems.map(
                    (displayItem: LandingDisplayCard, index: number) => {
                        return (
                            <DisplayContainer
                                displayItem={displayItem}
                                key={index}
                            />
                        );
                    }
                )}
            </SimpleGrid>
        </Box>
    );
}

export default WhySection;

import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
// =========================== components ===========================
import CustomHeader from "../universal/CustomHeader";
import { LandingDisplayCard } from "../../types/landing/display";
import DisplayContainer from "./DisplayContainer";
// =========================== images ===========================
import Copy from "../../images/copy.png";
import Paste from "../../images/paste.png";
import Like from "../../images/thumbsup.png";
function GuideSection() {
    const displayItems: LandingDisplayCard[] = [
        { title: "Step 1:", desc: "Copy the URL of a website", image: Copy },
        {
            title: "Step 2:",
            desc: "Paste the URL inside the search bar and click the arrow.",
            image: Paste,
        },
        {
            title: "Step 3:",
            desc: "Viola! Feel free to explore the DOM structure retrieved and you can extract any data you want!",
            image: Like,
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
            {" "}
            <CustomHeader fontSize="34px" textAlign={"left"} fontWeight="light">
                How do we use this?
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

export default GuideSection;

import React from "react";
import { Box, Image, Card } from "@chakra-ui/react";
import { LandingDisplayCard } from "../../types/landing/display";

// =========================== components ===========================
import CustomText from "../universal/CustomText";
function DisplayContainer({
    displayItem,
}: {
    displayItem: LandingDisplayCard;
}) {
    const { title, desc, image } = displayItem;
    return (
        <Card
            paddingTop="20px"
            boxShadow="0px 0px 4px 0px rgba(0, 0, 0, 0.25);"
        >
            <Box margin="10px">
                <Box
                    width="200px"
                    height="200px"
                    borderRadius={"50%"}
                    margin="auto"
                    background="#5DF6B6"
                    display="flex"
                >
                    <Image src={image} width="100px" margin="auto" />
                </Box>
                <br />
                <CustomText fontSize="25px" color="#32956B">
                    {title}
                </CustomText>
                <br />
                <CustomText fontSize="16px">{desc}</CustomText>
            </Box>
        </Card>
    );
}

export default DisplayContainer;

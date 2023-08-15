import React from "react";
import { Box } from "@chakra-ui/react";

// =========================== components ===========================
import CustomHeader from "../universal/CustomHeader";
import CustomText from "../universal/CustomText";
import CustomButton from "../universal/CustomButton";
function LandingBanner() {
    const toDemo = () => {
        window.location.href = "/demo";
    };
    return (
        <Box
            background="#EFEFEF"
            padding={["15px", null, "25px", "40px"]}
            paddingTop={["25px", null, "50px", "60px"]}
            paddingBottom={["25px", null, "50px", "60px"]}
        >
            <Box width={["100%", null, "50%", "40%"]} margin="auto">
                {" "}
                <CustomHeader
                    fontWeight={"normal"}
                    fontSize="36px"
                    textAlign={"left"}
                >
                    Web-
                    <CustomText variant="span" color="rgba(6, 153, 6, 1)">
                        splorer
                    </CustomText>
                </CustomHeader>
                <br />
                <CustomText fontSize="22px" textAlign={"left"}>
                    Unveil the Web's DNA: Real-Time Exploration with Our{" "}
                    <CustomText variant="span" color="rgba(6, 153, 6, 1)">
                        Live
                    </CustomText>{" "}
                    DOM Viewer!
                </CustomText>
                <br />
                <Box marginTop="5px" display="flex">
                    <CustomButton handleClick={toDemo} label="Try it" />
                </Box>
            </Box>
        </Box>
    );
}

export default LandingBanner;

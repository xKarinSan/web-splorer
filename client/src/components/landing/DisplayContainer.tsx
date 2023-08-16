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
                    width={["160px", "120px", "null", "160px"]}
                    height={["160px", "120px", null, "160px"]}
                    borderRadius={"50%"}
                    margin="auto"
                    background="#5DF6B6"
                    display="flex"
                >
                    <Image
                        src={image}
                        width={["80px", "60px", null, "80px"]}
                        margin="auto"
                    />
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

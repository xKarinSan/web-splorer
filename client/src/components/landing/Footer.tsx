import { Box, Link, Icon, Text } from "@chakra-ui/react";
import CustomText from "../universal/CustomText";
import { AiFillGithub } from "react-icons/ai";

function Footer() {
    return (
        <Box
            background="#f5f5f5"
            height="100px"
            display={"grid"}
            alignItems={"end"}
            padding="20px"
        >
            <CustomText>
                Made with ❤️ by{" "}
                <Link
                    href="https://github.com/xKarinSan/"
                    as="a"
                    target="_blank"
                    fontWeight={"bold"}
                >
                    Siang Meng
                </Link>
                <br />
                <br />
                <Text
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                >
                    <Link
                        href="https://github.com/xKarinSan/web-splorer"
                        as="a"
                        target="_blank"
                        fontWeight={"bold"}
                        display={"block"}
                        margin="auto"
                        alignSelf={"center"}
                    >
                        <Icon as={AiFillGithub} />
                        Source Code
                    </Link>
                </Text>
            </CustomText>
        </Box>
    );
}

export default Footer;

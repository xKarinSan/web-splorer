import { useState } from "react";

import {
    Box,
    Code,
    Input,
    InputGroup,
    IconButton,
    Tooltip,
    useToast,
    Progress,
    Textarea,
} from "@chakra-ui/react";

import CustomText from "../components/universal/CustomText";
import CustomHeader from "../components/universal/CustomHeader";
import { html_beautify } from "js-beautify";

import {
    AiFillCaretRight,
    AiOutlineClose,
    AiOutlineReload,
} from "react-icons/ai";

function DemoPage() {
    const toast = useToast();

    const [url, setUrl] = useState<string>("");
    const [htmlRes, setHtmlRes] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const triggerErrorToast = () => {
        setHtmlRes("");
        toast({
            title: "Retrieval failed",
            description: "Please try again later",
            status: "error",
            duration: 3000,
            isClosable: true,
        });
    };

    const triggerSuccessToast = () => {
        toast({
            title: "Retrieval successful",
            status: "success",
            duration: 3000,
            isClosable: true,
        });
    };

    const resetAll = () => {
        setUrl("");
        setHtmlRes("");
    };

    const submitUrl = async () => {
        try {
            setLoading(true);

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const html = await response.text();
            console.log("html", html);

            setLoading(false);

            if (!html || typeof html !== "string") {
                triggerErrorToast();
            } else {
                // Process and display the HTML content
                const codeArea = document.getElementById("htmlOutput");

                if (codeArea) {
                    codeArea.innerText = html;
                }

                setHtmlRes(html_beautify(html));

                triggerSuccessToast();
            }
        } catch (error) {
            console.log("Error:", error);
            setLoading(false);
            triggerErrorToast();
        }
    };

    return (
        <Box>
            <Box background="#EFEFEF" padding="15px">
                <Box width={["100%", null, "50%", "40%"]} margin="auto">
                    <CustomHeader fontSize="36px">Live Demo</CustomHeader>
                    <br />
                    <CustomText fontSize="14px" color="red" fontWeight="bold">
                        **DISCLAIMER: It may not work on some sites due to CORS
                        policy.**
                    </CustomText>

                    <br />
                    <CustomText fontSize="18px">
                        Enter a website URL here:
                    </CustomText>
                    <InputGroup>
                        <>
                            {loading ? (
                                <Box margin="auto" width="100%">
                                    <br></br>
                                    <CustomText
                                        fontSize="18px"
                                        textAlign={"center"}
                                    >
                                        Fetching ...
                                    </CustomText>
                                    <Progress
                                        size="xs"
                                        colorScheme="green"
                                        isIndeterminate
                                    />
                                </Box>
                            ) : (
                                <>
                                    {" "}
                                    <Input
                                        background={"white"}
                                        placeholder="Place a website URL here :)"
                                        value={url}
                                        onChange={(e) => {
                                            setUrl(e.target.value);
                                        }}
                                    />
                                    {url.length > 0 ? (
                                        <Tooltip label="Clear">
                                            <IconButton
                                                aria-label="reset"
                                                borderRadius={"0"}
                                                icon={<AiOutlineClose />}
                                                background="white"
                                                onClick={() => {
                                                    setUrl("");
                                                }}
                                            />
                                        </Tooltip>
                                    ) : null}
                                    <Tooltip label="Reset">
                                        <IconButton
                                            icon={<AiOutlineReload />}
                                            aria-label="reset"
                                            borderRadius={"0"}
                                            background="white"
                                            onClick={resetAll}
                                            isDisabled={loading}
                                        />
                                    </Tooltip>
                                    <Tooltip label="Proceed">
                                        <IconButton
                                            icon={<AiFillCaretRight />}
                                            aria-label="submit"
                                            borderRadius={"0"}
                                            background="#51B48A"
                                            color="white"
                                            _hover={{
                                                background: "#16CD7F",
                                            }}
                                            onClick={submitUrl}
                                            isDisabled={url.length == 0}
                                        />
                                    </Tooltip>
                                </>
                            )}
                        </>
                    </InputGroup>
                </Box>
            </Box>
            <Box padding="10px">
                <CustomHeader fontSize="28px">HTML output:</CustomHeader>
                {/* <br /> */}
                <Textarea
                    value={htmlRes ? htmlRes : ""}
                    height="70vh"
                    placeholder="Result in HTML format here"
                ></Textarea>
            </Box>
        </Box>
    );
}

export default DemoPage;

import { ReactNode } from "react";
import { Heading } from "@chakra-ui/react";
function CustomHeader({
    children,
    fontWeight,
    fontSize,
    textAlign,
    variant,
    color,
}: {
    children: ReactNode;
    fontWeight?: string;
    fontSize?: string;
    textAlign?: any;
    variant?: any;
    color?: string;
}) {
    return (
        <Heading
            fontWeight={fontWeight ? fontWeight : "normal"}
            fontSize={fontSize ? fontSize : "default"}
            textAlign={textAlign ? textAlign : "center"}
            as={variant ? variant : ""}
            color={color ? color : "default"}
        >
            {children}
        </Heading>
    );
}

export default CustomHeader;

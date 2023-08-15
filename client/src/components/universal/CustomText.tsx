import { ReactNode } from "react";
import { Text } from "@chakra-ui/react";
function CustomText({
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
        <Text
            fontWeight={fontWeight ? fontWeight : "normal"}
            fontSize={fontSize ? fontSize : "default"}
            textAlign={textAlign ? textAlign : "center"}
            as={variant ? variant : ""}
            color={color ? color : "default"}
        >
            {children}
        </Text>
    );
}

export default CustomText;

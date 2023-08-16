import { Button } from "@chakra-ui/react";
function CustomButton({
    label,
    handleClick,
    buttonColor,
    textColor,
    borderRadius,
}: {
    label: string;
    handleClick: () => void;
    buttonColor?: string;
    textColor?: string;
    borderRadius?: any;
}) {
    return (
        <Button
            onClick={handleClick}
            background={buttonColor ? buttonColor : "rgba(6, 153, 6, 1)"}
            color={textColor ? textColor : "white"}
            borderRadius={borderRadius ? borderRadius : "default"}
        >
            {label ? label : "Submit"}
        </Button>
    );
}

export default CustomButton;

import { Button } from "@chakra-ui/react";
function CustomButton({
    label,
    handleClick,
    buttonColor,
    textColor,
}: {
    label: string;
    handleClick: () => void;
    buttonColor?: string;
    textColor?: string;
}) {
    return (
        <Button
            onClick={handleClick}
            background={buttonColor ? buttonColor : "rgba(6, 153, 6, 1)"}
            color={textColor ? textColor : "white"}
        >
            {label ? label : "Submit"}
        </Button>
    );
}

export default CustomButton;

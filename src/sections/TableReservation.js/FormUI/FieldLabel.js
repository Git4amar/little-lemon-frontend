import { HStack, Text, Box } from "@chakra-ui/react"
import { ReactComponent as HelperInfo } from "../../../assets/icons/label-helper-info.svg";
import { ReactComponent as HoverHelperInfo } from "../../../assets/icons/label-helper-info-hover.svg";
import { useState } from "react";


const FieldLabel = ({ children, isRequired = false, hasHelperInfo = false, ...props }) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleHelperInfo = e => {
        switch (e.type) {
            case "pointerenter":
                setIsHovered(true);
                break;
            default:
                setIsHovered(false);
        }
    }

    return (
        <HStack
            as="label"
            spacing={2}
            fontSize="18px"
            fontWeight={500}
            {...props}
        >
            <Text>
                {children}
            </Text>
            {isRequired && <Text>*</Text>}
            {hasHelperInfo
                &&
                <Box
                    cursor="pointer"
                    borderRadius="full"
                    onPointerEnter={handleHelperInfo}
                    onPointerLeave={handleHelperInfo}
                    boxShadow={isHovered ? "0px 4px 4px 0px #33333380" : null}
                >
                    {
                        isHovered
                            ? <HoverHelperInfo />
                            : <HelperInfo />
                    }
                </Box>
            }
        </HStack>
    )
}

export default FieldLabel;
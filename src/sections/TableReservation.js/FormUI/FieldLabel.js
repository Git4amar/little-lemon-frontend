import { HStack, Text, Box, FormLabel } from "@chakra-ui/react"
import { ReactComponent as HelperInfo } from "../../../assets/icons/label-helper-info.svg";
import { ReactComponent as HoverHelperInfo } from "../../../assets/icons/label-helper-info-hover.svg";
import { useState } from "react";


const FieldLabel = ({ children, hasHelperInfoIcon = false }) => {

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
            spacing={2}
        >
            <FormLabel
                fontSize="18px"
                fontWeight={500}
                m={0}
                requiredIndicator={<Text as="span" ml={1}>*</Text>}
            >
                {children}
            </FormLabel>
            {hasHelperInfoIcon
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
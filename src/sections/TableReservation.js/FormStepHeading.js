import { Text, VStack, Box } from "@chakra-ui/react";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

const FormStepHeading = ({ children }) => {

    const [scope, animate] = useAnimate();

    useEffect(() => {
        setTimeout(() => {
            animate(".formHeadingTopLine, .formHeadingBottomLine", { transform: "scale(1)" }, {
                type: "spring",
                stiffness: 100,
                damping: 15
            })
        }, 1740 / 2)
    })

    return (
        <VStack
            spacing={0}
            ref={scope}
        >
            {/* heading top line */}
            <VStack
                w="full"
                py={1}
                pl={0.5}
                pe={4}
                align="start"
            >
                <Box
                    className="formHeadingTopLine"
                    as={motion.div}
                    h="2px"
                    w="full"
                    bg="brand.primary.green"
                    borderRadius="1px"
                    transformOrigin="left center"
                    transform="scale(0)"
                />
            </VStack>

            {/* heading text */}
            <Text
                as="h3"
                fontSize="20px"
                fontWeight={800}
                lineHeight="none"
                textTransform="uppercase"
                color="brand.primary.green"
                w="full"
                textAlign="start"
            >
                {children}
            </Text>

            {/* heading bottom line */}
            <VStack
                w="full"
                py={1}
                pe={0.5}
                pl={4}
                align="start"
            >
                <Box
                    className="formHeadingBottomLine"
                    as={motion.div}
                    h="2px"
                    w="full"
                    bg="brand.primary.green"
                    borderRadius="1px"
                    transformOrigin="right center"
                    transform="scale(0)"
                />
            </VStack>
        </VStack>
    )
}

export default FormStepHeading;
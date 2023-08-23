import ButtonRegular from "./ButtonRegular";

import { Box } from "@chakra-ui/react";
import { motion, useAnimate } from "framer-motion";

const ButtonHoverable = ({ children, ...props }) => {

    const [scope, animate] = useAnimate();

    const hoverEnterSequence = [
        ["button", { color: "#495E57" }],
        [".buttonHoverBg", { bottom: "0px" }, { at: "<" }]
    ]

    const hoverExitSequence = [
        ["button", { color: "#F4CE14", border: "1px solid #F4CE14" }],
        [".buttonHoverBg", { bottom: "100px" }, { at: "<" }],
    ]

    const handleHover = async (e) => {
        if (e.type === "mouseover") {
            // await animate(".buttonHoverBg", { bottom: "-100px" })
            animate(".buttonHoverBg", { visibility: "visible" })
            animate(hoverEnterSequence, { ease: "easeInOut", duration: 0.5 });
        }
        else {
            await animate(hoverExitSequence, { ease: "easeInOut", duration: 0.3 });
            await animate(".buttonHoverBg", { visibility: "hidden" })
            animate(".buttonHoverBg", { bottom: "-100px" })
        }
    }

    const handleClick = e => {
        if (e.type === "mousedown") {
            animate(".buttonHoverBg", { visibility: "hidden" });
        }
        else {
            animate(".buttonHoverBg", { visibility: "visible" });
        }
    }

    return (
        <Box
            ref={scope}
            borderRadius="16px"
            {...props}
        >
            <ButtonRegular
                as={motion.button}
                onMouseOver={handleHover}
                onMouseOut={handleHover}
                onMouseDown={handleClick}
                onMouseUp={handleClick}
                w="full"
                bg="transparent"
                color="brand.primary.yellow"
                border="1px"
                pos="relative"
                _active={{
                    boxShadow: "0px 0px 0px 0px #333333",
                    transform: "translateY(1px)",
                    bg: "brand.secondary.brightGray",
                    color: "brand.primary.green",
                    border: "0px"
                }}
                overflow="hidden"
            >
                {children}
                <Box
                    onMouseOver={e => e.stopPropagation()}
                    onMouseOut={e => e.stopPropagation()}
                    as={motion.div}
                    className="buttonHoverBg"
                    pos="absolute"
                    bottom="-100px"
                    w="full"
                    h="full"
                    bg="brand.primary.yellow"
                    borderRadius="16px"
                    zIndex="hide"
                />
            </ButtonRegular>
        </Box>
    )
}

export default ButtonHoverable;
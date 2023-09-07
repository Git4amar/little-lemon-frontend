import { Center, Heading, Image } from "@chakra-ui/react";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

import LineFrame from "./LineFrame";


const StepIndicator = ({ children, ...props }) => {

    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate("img", { transform: "scale(1)" }, { type: "spring", bounce: 0.6 });
        animate(".indicator-top-right-lineframe", { top: "-4px" }, { type: "spring", bounce: 0.6 });
        animate(".indicator-bottom-left-lineframe", { bottom: "-4px" }, { type: "spring", bounce: 0.6 });
    })

    return (
        <Center
            as={motion.div}
            className="form-step-indicator"
            pos="relative"
            w={{ base: "32px", md: "48px" }}
            h={{ base: "30.86px", md: "46.29px" }}
            ref={scope}
            {...props}
        >
            <Heading
                as={motion.p}
                fontSize={{ base: "22.857px", md: "34.286px" }}
                fontWeight={400}
                lineHeight="none"
                color="brand.primary.green"
                // color="brand.secondary.brightGray"
                // textShadow="0px 4px 4px #33333340"
                zIndex="docked"
            >
                {children}
            </Heading>

            {/* top line & right line frame */}
            <LineFrame
                as={motion.div}
                className="indicator-top-right-lineframe"
            // top={{ base: "-4px", md: "-8px" }}
            />

            {/* bottom line & left line frame */}
            <LineFrame
                as={motion.div}
                className="indicator-bottom-left-lineframe"
                transform="rotateZ(180deg)"
            // bottom={{ base: "-4px", md: "-8px" }}
            />

            {/* bg Image */}
            <Image
                as={motion.img}
                transform="scale(0)"
                pos="absolute"
                w="full"
                h="full"
                objectFit="contain"
                alt="Little Lemon logo"
                src={require("../../../assets/logo/logo_v3.png")}
                zIndex="base"
            />
        </Center>
    )
}

export default StepIndicator;
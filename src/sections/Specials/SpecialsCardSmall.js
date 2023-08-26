import { AspectRatio, VStack, Image, HStack, Text, Box, Center } from "@chakra-ui/react";
import { motion, useAnimate } from "framer-motion";
import { ReactComponent as DeliveryIcon } from "../../assets/icons/cycling.svg";
import PressHoldGesture from "../../components/PressHoldGesture";

const SpecialsCardSmall = ({ title, desc, price, imgSrc }) => {

    const [scope, animate] = useAnimate();
    const handleImgFocus = e => {
        const imgFocusSeq = [
            [".dishDesc", { bottom: "0px", opacity: 1 }],
            [".touchGesture", { opacity: 0 }, { at: "<" }],
            [".imageMask", { opacity: 0.8 }, { at: "<" }],
            [".dishImage", { transform: "scale(1.1)" }, { at: "<" }]
        ]

        const imgBlurSeq = [
            [".dishImage", { transform: "scale(1)" }],
            [".dishDesc", { bottom: "-50px" }, { at: "<" }],
            [".imageMask, .dishDesc", { opacity: 0 }, { at: "<" }],
            [".touchGesture", { opacity: 1 }, { at: "-0.2" }],
        ]

        if (e.type === "touchstart" || e.type === "focus") {
            animate(
                imgFocusSeq,
                {
                    ease: "easeOut",
                    duration: 2 * 0.435
                }
            )
        }
        else {
            animate(
                imgBlurSeq,
                {
                    // type: "spring",
                    // duration: 0.435
                    ease: "easeOut",
                    duration: 2 * 0.435
                }
            );
        }
    }

    const handleOrderFocus = e => {
        const enterSeq = [
            [".deliveryStack", { gap: "32px" }],
            [".deliveryIcon", { filter: "drop-shadow(0px 4px 2px #33333380)" }, { at: "<" }],
        ]

        const exitSeq = [
            [".deliveryStack", { gap: "8px" }],
            [".deliveryIcon", { filter: "drop-shadow(0px 0px 0px #33333380)" }, { at: "<" }],
        ]


        if (e.type === "focus" || e.type === "touchstart") {
            animate(enterSeq, {
                type: "spring",
                stiffness: 600,
                damping: 15
            })
        }
        else {
            animate(exitSeq, {
                ease: "easeOut",
                duration: 0.435
            })
        }
    }

    return (
        <VStack
            as="article"
            bg="brand.secondary.brightGray"
            boxShadow="0px 4px 4px 0px #33333380"
            borderRadius="16px"
            overflow="hidden"
            // w={{ base: "calc(100vw - 40px)", md: "280px" }}
            ref={scope}
        >
            {/* image frame */}
            <Box
                pos="relative"
                cursor="pointer"
                onTouchStart={handleImgFocus}
                onFocus={handleImgFocus}
                onTouchEnd={handleImgFocus}
                onBlur={handleImgFocus}
                tabIndex={0}
            >
                <AspectRatio
                    w={{ base: "calc(100vw - 40px)", md: "280px" }}
                    // w="full"
                    ratio={4 / 3}
                    overflow="hidden"
                >
                    <Image
                        as={motion.img}
                        src={imgSrc}
                        alt={`Image of ${title} special dish`}
                        objectFit="cover"
                        initial={{ transform: "scale(1)" }}
                        className="dishImage"
                    />
                </AspectRatio>
                <Center
                    pos="absolute"
                    w="full"
                    h="full"
                    top="0"
                >
                    <Box
                        as={motion.div}
                        pos="absolute"
                        w="full"
                        h="full"
                        top="0"
                        bg="brand.secondary.darkCharcoal"
                        initial={{ opacity: 0 }}
                        className="imageMask"
                    />
                    <Text
                        as={motion.p}
                        mx={4}
                        color="brand.secondary.brightGray"
                        fontSize="16px"
                        fontWeight={400}
                        lineHeight="150%"
                        zIndex="docked"
                        pos="relative"
                        bottom="-50px"
                        initial={{ opacity: 0 }}
                        className="dishDesc"
                    >
                        {desc}
                    </Text>
                </Center>

                {/* press & hold gesture */}
                <PressHoldGesture
                    pos="absolute"
                    bottom="8px"
                    right="8px"
                />
            </Box>

            {/* body stack */}
            <VStack
                as="header"
                w="full"
                p={4}
                spacing={4}
                align="start"
            >
                {/* dish info */}
                <HStack
                    w="full"
                    justify="space-between"
                >
                    <Text
                        as="h3"
                        fontSize="18px"
                        fontWeight={700}
                        color="brand.secondary.darkCharcoal"
                    >
                        {title}
                    </Text>
                    <Text
                        fontSize="20px"
                        fontWeight={800}
                        color="brand.primary.green"
                    >
                        {price}
                    </Text>
                </HStack>

                {/* deliver order */}
                <HStack
                    justify="start"
                    spacing={2}
                    as={motion.div}
                    cursor="pointer"
                    onFocus={handleOrderFocus}
                    onTouchStart={handleOrderFocus}
                    onBlur={handleOrderFocus}
                    onTouchEnd={handleOrderFocus}
                    tabIndex={0}
                    className="deliveryStack"
                >
                    <Text
                        fontSize="18px"
                        fontWeight={500}
                        color="brand.primary.green"
                    >
                        Order a delivery
                    </Text>
                    {/* <Image
                        as={motion.img}
                        src={deliveryIcon}
                        alt="delivery icon"
                        className="deliveryIcon"
                    /> */}
                    <DeliveryIcon
                        className="deliveryIcon"
                    />
                </HStack>
            </VStack>
        </VStack >
    )
}

export default SpecialsCardSmall;
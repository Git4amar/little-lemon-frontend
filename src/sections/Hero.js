import ScrollIndicator from "../components/ScrollIndicator";
import FullScreenSection from "./FullScreenSection";
import ButtonRegular from "../components/Buttons/ButtonRegular"
import ButtonHoverable from "../components/Buttons/ButtonHoverable";
import HeroImageFrame from "../components/HeroImageFrame";
import { Box, GridItem, Heading, VStack, Text, Center } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

const Hero = () => {

    const [heroBgScope, animateHeroBg] = useAnimate();
    const [heroPicScope, animateHeroPic] = useAnimate();

    const sizeHeroBg = (referenceOffset) => {
        console.log(referenceOffset);
        // const referenceElemToSizeHeroBg = document.getElementById("heroReservationButton");
        animateHeroBg("#heroBg", { height: referenceOffset }, {
            ease: [.44, .44, .49, 1.14],
            duration: 2.175
        });
    }

    const sizeHeroPic = () => {
        console.log(heroPicScope.current.offsetWidth);
    }

    useEffect(() => {
        const reservationBtn = document.getElementById("heroReservationButton");
        const heroTextDesc = document.getElementById("heroTextDesc");

        heroBgScope.current && sizeHeroBg(
            window.innerWidth >= 740
                ? reservationBtn.offsetTop + reservationBtn.offsetHeight + 40
                : heroTextDesc.offsetTop + heroTextDesc.offsetHeight + 40
        );

        heroPicScope.current && sizeHeroPic();
    }, [heroBgScope.current, heroPicScope.current])

    const [scope, animate] = useAnimate();

    const handleHeroPicFlip = async (e) => {
        if (e.type === "mouseover") {
            animate(
                "#heroPicflipBoxInner",
                // { transform: "rotateX(-180deg) translate(-55%, -115%) scale(0.8)" },
                { transform: "rotateX(180deg) translate(-60%, 65%) scale(0.8)" },
                {
                    duration: 0.8,
                    ease: "easeOut"
                }
            );

        }
        else {
            animate(
                "#heroPicflipBoxInner",
                { transform: "rotateX(0deg) translate(0, 0%)" },
                {
                    ease: [.32, -0.41, .62, 1],
                    duration: 0.5
                }
            );
            animate(".heroFlipBoxFront", { boxShadow: "0px 0px 0px 0px #333333" });
        }
    }

    return (
        <Box
            h="100vh"
            pos="relative"
            overflow="visible"
            zIndex="base"
            ref={heroBgScope}
        >
            {/* Hero Section BG */}
            <Box
                as={motion.div}
                id="heroBg"
                initial={{ height: "100vh" }}
                w="full"
                bg="brand.primary.green"
                zIndex={-1}
                pos="absolute"
                border="1px"
            />
            {/* Scroll Indicator */}
            <Center
                pos="absolute"
                top={{ base: "75vh", md: "80vh" }}
                w="100vw"
            >
                <ScrollIndicator />
            </Center>
            {/* Hero Section Griod / Content */}
            <FullScreenSection
                id="hero-section"
            // border="1px"
            >

                {/* Hero Title */}
                <GridItem
                    gridColumn={{ base: "1 / span 4", md: "1/ span 4", xl: "2 / span 4" }}
                    gridRow={{ base: (40 / 4) + 1, md: (216 / 4) + 1 }}
                    h="max"
                >
                    <VStack
                        pt="1px"
                        pb="3px"
                    >
                        <Heading
                            as="h1"
                            fontSize="64px"
                            fontWeight={400}
                            color="brand.primary.yellow"
                            lineHeight="none"
                            w="full"
                            textAlign={{ base: "center", md: "start" }}
                        >
                            Little Lemon
                        </Heading>
                    </VStack>
                </GridItem>

                {/* Hero Subtitle */}
                <GridItem
                    gridColumn={{ base: "1 / span 4", md: "1/ span ", xl: "2 / span 4" }}
                    gridRow={{ base: (92 / 4) + 1, md: (268 / 4) + 1 }}
                    h="max"
                >
                    <VStack
                        py={0.5}
                    >
                        <Heading
                            as="h2"
                            fontSize="40px"
                            fontWeight={400}
                            color="brand.secondary.brightGray"
                            lineHeight="none"
                            w="full"
                            textAlign={{ base: "center", md: "start" }}
                        >
                            Chicago
                        </Heading>
                    </VStack>
                </GridItem>

                {/* Hero description */}
                <GridItem
                    id="heroTextDesc"
                    gridColumn={{ base: "1 / span 4", md: "1/ span 4", xl: "2 / span 4" }}
                    gridRow={{ base: (140 / 4) + 1, md: (324 / 4) + 1 }}
                    h="max"
                >
                    <VStack
                        pt="3px"
                        pb="1px"
                    >
                        <Text
                            color="brand.secondary.brightGray"
                            fontSize="18px"
                            fontWeight={700}
                            lineHeight="125%"
                            textAlign={{ base: "center", md: "start" }}
                        >
                            We are a family owned Mediterranean restaurant, focussed on traditional recipes served with a modern twist.
                        </Text>
                    </VStack>
                </GridItem>

                {/* Reserve your table button */}
                <GridItem
                    gridColumn={{ md: "1/ span 3", xl: "2 / span 3" }}
                    gridRow={{ md: (448 / 4) + 1, xl: (424 / 4) + 1 }}
                    h="max"
                    hideBelow="md"
                    id="heroReservationButton"
                >
                    {useBreakpointValue({
                        base: <ButtonRegular
                            w="full"
                        >
                            Reserve your table
                        </ButtonRegular>,
                        xl: <ButtonHoverable
                            onMouseOver={handleHeroPicFlip}
                            onMouseOut={handleHeroPicFlip}
                            w="full"
                        >
                            Reserve your table
                        </ButtonHoverable>,
                    }, { ssr: false })}
                </GridItem>

                {/* Hero Pic */}
                <GridItem
                    ref={heroPicScope}
                    gridColumn={{ base: "1 / span 4", md: "5 / span 4", xl: "8 / span 5" }}
                    gridRow={{ base: (252 / 4) + 1, xl: (300 / 4) + 1 }}
                    pos="relative"
                    h={466 * 3 / 4}
                >
                    <HeroImageFrame pos="absolute" />
                    <HeroImageFrame scope={scope} />
                </GridItem>
            </FullScreenSection>
        </Box >
    )
}

export default Hero;
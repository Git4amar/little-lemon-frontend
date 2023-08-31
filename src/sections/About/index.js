import { Box, GridItem, Heading, VStack, useBreakpointValue } from "@chakra-ui/react";
import FullScreenGridSection from "../FullScreenGridSection";
import OwnerImagesStack from "./OwnerImagesStack";
import AboutOwnersText from "./AboutOwnersText";
import { useEffect, useState } from "react";


const About = () => {

    const [sectionH, setSectionH] = useState("100vh");

    useEffect(() => {
        const sectionOffestTop = document.getElementById("about-section-box").offsetTop;
        const bodyStackOffestTop = document.getElementById("about-image-stack").offsetTop;
        const bodyStackH = document.getElementById("about-image-stack").offsetHeight;
        const newSectionH = bodyStackOffestTop - sectionOffestTop + bodyStackH + 64;
        setSectionH(newSectionH);
    }, [])

    return (
        <Box
            id="about-section-box"
            overflow="hidden"
            h={{ base: sectionH, xl: "900px" }}
            boxShadow="0px 4px 4px 0px #33333380"
            bg="brand.secondary.darkSalmon"
        >
            <FullScreenGridSection
                id="about-section"
            >
                {/* section header */}
                <GridItem
                    as="header"
                    h="max"
                    gridColumn={{ base: "1 / span 4", xl: "2 / span 3" }}
                    gridRow={{ base: (40 / 4) + 1, md: (216 / 4) + 1, xl: (184 / 4) + 1 }}
                >
                    <VStack
                        w="full"
                        pt="1px"
                        pb="3px"
                    >
                        <Heading
                            as="h2"
                            fontSize="64px"
                            fontWeight={500}
                            lineHeight="none"
                            textAlign={{ base: "center", md: "start" }}
                            w="full"
                            color="brand.primary.green"
                        >
                            About
                        </Heading>
                    </VStack>
                </GridItem>

                {/* sub-header */}
                <GridItem
                    h="max"
                    gridRow={{ base: (92 / 4) + 1, md: (268 / 4) + 1, xl: (236 / 4) + 1 }}
                    gridColumn={{ base: "1 / span 4", xl: "2 / span 3" }}
                >
                    <VStack
                        py={0.5}
                        w="full"
                    >
                        <Heading
                            as="h3"
                            w="full"
                            textAlign={{ base: "center", md: "start" }}
                            fontSize="40px"
                            fontWeight={400}
                            lineHeight="none"
                        >
                            Your hosts
                        </Heading>
                    </VStack>
                </GridItem>

                {/* owner's desc and images for base and md */}
                <GridItem
                    h="max"
                    gridColumn={{ base: "1 / span 4", md: "1 /  span 8", xl: "2 / span 3" }}
                    gridRow={{ base: (140 / 4) + 1, md: (320 / 4) + 1, xl: (288 / 4) + 1 }}
                >
                    <VStack
                        spacing={{ base: 4, xl: 0 }}

                    >
                        <AboutOwnersText />
                        {useBreakpointValue({
                            base: <OwnerImagesStack />,
                            xl: null
                        }, { ssr: false })}
                    </VStack>
                </GridItem>

                {/* owner images stack/group for xl*/}
                {useBreakpointValue({
                    base: null,
                    xl: <GridItem
                        h="max"
                        gridColumn={{ base: "1 / span 4", md: "1 / span 8", xl: "6 / span 7" }}
                        gridRow={{ base: (616 / 4) + 1, md: (572 / 4) + 1, xl: (232 / 4) + 1 }}
                    >
                        <OwnerImagesStack />
                    </GridItem>
                }, { ssr: false })}
            </FullScreenGridSection>
        </Box>
    )
}

export default About;
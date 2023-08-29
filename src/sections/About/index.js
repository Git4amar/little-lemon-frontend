import { Box, GridItem, Heading, VStack, Text, HStack } from "@chakra-ui/react";
import FullScreenGridSection from "../FullScreenGridSection";
import OwnerImageFrame from "./OwnerImageFrame";

const About = () => {
    return (
        <Box
            h={{ base: "175vh", md: "100vh" }}
            overflow="hidden"
            bg="brand.secondary.darkSalmon"
            boxShadow="0px 4px 4px 0px #33333380"
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

                {/* owner's desc */}
                <GridItem
                    h="max"
                    gridColumn={{ base: "1 / span 4", md: "1 /  span 8", xl: "2 / span 3" }}
                    gridRow={{ base: (140 / 4) + 1, md: (320 / 4) + 1, xl: (288 / 4) + 1 }}
                >
                    <VStack
                        w="full"
                        pt="3px"
                        pb="1px"
                    >
                        <Text
                            w="full"
                            fontSize="16px"
                            fontWeight={400}
                            lineHeight="150%"
                            color="brand.secondary.darkCharcoal"
                        // color="brand.secondary.brightGray"
                        >
                            Adrian and Mario are the proud owners of a Mediterranean restaurant located in the heart of Chicago. They specialize in Mediterranean cuisine, utilizing fresh ingredients and flavors from the Mediterranean region. Adrian and Mario have been in the restaurant business for over 10 years and have built up a loyal following of customers who appreciate their attention to detail and the quality of their food. Both Adrian and Mario are passionate about the Mediterranean cuisine and strive to bring the best flavors and ingredients to their customers. They are extremely proud of their restaurant and take great pride in providing the freshest and tastiest food to their customers.
                        </Text>
                    </VStack>
                </GridItem>

                {/* owner images stack/group */}
                <GridItem
                    h="max"
                    gridColumn={{ base: "1 / span 4", md: "1 / span 8", xl: "6 / span 7" }}
                    gridRow={{ base: (616 / 4) + 1, md: (572 / 4) + 1, xl: (232 / 4) + 1 }}
                >
                    <HStack
                        w="full"
                        h={{
                            base: "calc(calc(calc(100vw - 40px - 16px) / 3) * 24 / 9)",
                            md: "calc(calc(calc(100vw - 140px - 32px) / 3) * 24 / 9)",
                            xl: "calc(calc(calc(657px - 32px) / 3) * 24 / 9)",
                        }}
                        spacing={{ base: 2, md: 4 }}
                        align="start"
                    >
                        {/* image 1 */}
                        <OwnerImageFrame
                            src={() => require("../../assets/images/restaurant/owner-image-A.jpg")}
                            alt={"An image of Adrian and Mario"}
                            ratio={9 / 16}
                            justify="end"
                            align="65% top"
                        />
                        {/* image 2 */}
                        <OwnerImageFrame
                            src={() => require("../../assets/images/restaurant/owner-image-C.jpg")}
                            alt={"An image of Adrian and Mario"}
                            ratio={9 / 24}
                            align={{ base: "47% 20px", md: "47% 40px", xl: "47% 45px" }}
                            scale="1.2"
                            borderRadius="0px"
                            boxShadow="0"
                        />
                        {/* image 3 */}
                        <OwnerImageFrame
                            src={() => require("../../assets/images/restaurant/owner-image-B.jpg")}
                            alt={"An image of Adrian and Mario"}
                            ratio={9 / 16}
                            align="65% top"
                        />
                    </HStack>
                </GridItem>

            </FullScreenGridSection>
        </Box>
    )
}

export default About;
import { Box, HStack, Link, VStack, Image, Text, Flex, Center, LinkBox, LinkOverlay } from "@chakra-ui/react";
import Lottie from "lottie-react";
import facebookLogo from "../../assets/logo/facebook-social.json";
import twitterLogo from "../../assets/logo/twitter-social.json";
import { useRef } from "react";

const Footer = () => {

    const navItems = [
        {
            name: "home",
            href: "#",
        },
        {
            name: "about",
            href: "#about-section",
        },
        {
            name: "menu",
            href: "/menu",
        },
        {
            name: "reservations",
            href: "/reservations",
        },
        {
            name: "order online",
            href: "/order-online",
        },
        {
            name: "log in",
            href: "/login",
        }
    ];

    const twitterLogoRef = useRef(null);
    const facebookLogoRef = useRef(null);
    const handleLogoAnimation = e => {
        // eslint-disable-next-line
        switch (e.target.dataset.linkTo) {
            case "facebook":
                e.type === "pointerenter"
                    ? facebookLogoRef.current.play()
                    : facebookLogoRef.current.stop();
                break;
            case "twitter":
                e.type === "pointerenter"
                    ? twitterLogoRef.current.play()
                    : twitterLogoRef.current.stop();
                break;
        }
    }

    return (
        <Box
            bg="brand.primary.green"
            pos="sticky"
            zIndex="base"
            bottom="0"
        >
            <VStack
                id="footer-section"
                as="footer"
                mx="auto"
                pt={{ base: 10, md: 16 }}
                pb={{ base: 24, md: 32, xl: 16 }}
                pl={{ base: "20px", md: "70px", xl: "165px" }}
                pe={{ base: "20px", md: "70px" }}
                w="100vw"
                maxW="container.xl"
                spacing={16}
                color="brand.secondary.brightGray"
                fontSize="18px"
                fontWeight={500}
                lineHeight="none"
            >
                {/* nav and logo stack */}
                <HStack
                    w="full"
                    justify="space-between"
                >
                    {/* navigation */}
                    <VStack
                        as="nav"
                        spacing={2}
                        align="start"
                    >
                        {/* conver nav items to title case and render */}
                        {navItems.map(item => {
                            const words = item.name.split(" ");
                            const itemTitle = words.map(word => word[0].toUpperCase() + word.slice(1));
                            return (
                                <VStack
                                    py="1px"
                                    w="full"
                                    align="start"
                                    key={item.name}
                                >
                                    <Link
                                        href={item.href}
                                    >
                                        {itemTitle.join(" ")}
                                    </Link>
                                </VStack>
                            )
                        })}
                    </VStack>

                    {/* logo */}
                    <Image
                        h="156.27px"
                        src={require("../../assets/logo/logo_v2.png")}
                        alt="Little Lemon logo"
                    />
                </HStack>

                {/* contact stack */}
                <Flex
                    direction={{ base: "column", md: "row" }}
                    w="full"
                    justify={{ md: "space-between" }}
                    spacing={{ base: 8 }}
                >
                    {/* address, phone, and email */}
                    <VStack
                        as="address"
                        align="start"
                    >
                        {/* address */}
                        <VStack
                            py="3px"
                        >
                            <Text
                                lineHeight="125%"
                            >
                                333 North Michigan Avenue,
                                <br />Chicago, IL 60601
                            </Text>
                        </VStack>

                        {/* phone */}
                        <VStack
                            pb="2px"
                        >
                            <Link
                                href="tel:+13125551234"
                            >
                                312-555-1234
                            </Link>
                        </VStack>

                        {/* email */}
                        <VStack
                            py="1px"
                        >
                            <Link
                                href="mailto:little.lemon@icloud.com"
                            >
                                little.lemon@icloud.com
                            </Link>
                        </VStack>
                    </VStack>

                    {/* social animation logos */}
                    <HStack
                        spacing={4}
                    >
                        {/* facebook social link and logo */}
                        <LinkBox
                            pos="relative"
                        >
                            <Lottie
                                autoplay={false}
                                animationData={facebookLogo}
                                style={{ height: "96px" }}
                                lottieRef={facebookLogoRef}
                            />
                            <LinkOverlay
                                boxSize="65px"
                                // border="1px solid white"
                                pos="absolute"
                                top="16px"
                                left="17px"
                                target="_blank"
                                href="https://www.facebook.com/"
                                borderRadius="8px"
                                // visibility="hidden"
                                onPointerEnter={handleLogoAnimation}
                                onPointerLeave={handleLogoAnimation}
                                data-link-to="facebook"
                            />
                        </LinkBox>
                        {/* twitter social link and logo */}
                        <LinkBox
                            pos="relative"
                        >
                            <Center
                                bg="brand.secondary.brightGray"
                                borderRadius="8px"
                            >
                                <Lottie
                                    autoplay={false}
                                    animationData={twitterLogo}
                                    style={{ height: "64px" }}
                                    lottieRef={twitterLogoRef}
                                />
                            </Center>
                            <LinkOverlay
                                boxSize={16}
                                pos="absolute"
                                top="0px"
                                left="0px"
                                target="_blank"
                                href="https://twitter.com/"
                                // visibility="hidden"
                                onPointerEnter={handleLogoAnimation}
                                onPointerLeave={handleLogoAnimation}
                                data-link-to="twitter"
                            />
                        </LinkBox>
                    </HStack>
                </Flex>
            </VStack>
        </Box>
    )
}

export default Footer;
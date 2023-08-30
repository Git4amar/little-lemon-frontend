import { Box, HStack, Link, VStack, Image, Text, Flex } from "@chakra-ui/react";

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
                </Flex>
            </VStack>
        </Box>
    )
}

export default Footer;
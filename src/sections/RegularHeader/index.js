import { Center, VStack, Image, Box } from '@chakra-ui/react';
import Navbar from '../../components/Navigation/Navbar';
import { motion, useAnimate, useScroll } from "framer-motion";
import { useEffect } from 'react';


const RegularHeader = ({ ...props }) => {

    const [scope, animate] = useAnimate();
    const { scrollY } = useScroll();
    let headerPrevStyle = null;

    const animateHeader = () => {
        if (scrollY.current <= 20 && headerPrevStyle !== "transparent") {
            window.requestAnimationFrame(() => {
                headerPrevStyle = "transparent";
                animate([
                    [scope.current, {
                        backgroundColor: "#EDEFEE00",
                        boxShadow: "0px 0px 0px 0px #333333",
                        color: "#EDEFEE",
                        borderBottomColor: "#EDEFEE",
                    }],
                    ["#header-logo-v1", { opacity: 0 }, { at: "<" }],
                    ["#header-logo-v2", { opacity: 1 }, { at: "<" }],
                    ["[class*='line']", { backgroundColor: "#EDEFEE" }, { at: "<" }]
                ], {
                    stiffness: 80,
                    damping: 20
                });
            });
        }
        else if (scrollY.current >= 20 && headerPrevStyle !== "notTransparent") {
            window.requestAnimationFrame(() => {
                headerPrevStyle = "notTransparent";
                animate([
                    [scope.current, {
                        backgroundColor: "#EDEFEEFF",
                        boxShadow: "0px 1px 4px 0px #33333380",
                        color: "#333333",
                        borderBottomColor: "#495E57",
                    }],
                    ["#header-logo-v1", { opacity: 1 }, { at: "<" }],
                    ["#header-logo-v2", { opacity: 0 }, { at: "<" }],
                    ["[class*='line']", { backgroundColor: "#495E57" }, { at: "<" }]
                ], {
                    stiffness: 80,
                    damping: 20
                });
            })
        }
    }

    useEffect(() => {
        document.addEventListener("scroll", animateHeader);
        return () => document.removeEventListener("scroll", animateHeader);
    }, [])

    return (
        <Center
            ref={scope}
            as={motion.header}
            id="regular-header"
            pos={{ md: "fixed" }}
            w="full"
            zIndex={{ md: "sticky" }}
            py={4}
            hideBelow="md"
            left="0"
            color="brand.secondary.brightGray"
            borderBottom="1px"
            borderBottomRadius="150px"
            {...props}
        >
            <VStack
                spacing={4}
                maxW="container.xl"
                w="full"
            >
                <Box
                    // border="1px"
                    pos="relative"
                    w="236px"
                    h="72px"
                >
                    <Image
                        pos="absolute"
                        id="header-logo-v1"
                        as={motion.img}
                        h="full"
                        initial={{ opacity: 0 }}
                        src={require("../../assets/logo/logo_v1.png")}
                        alt="Little Lemon logo"
                    />
                    <Image
                        pos="absolute"
                        id="header-logo-v2"
                        as={motion.img}
                        h="full"
                        initial={{ opacity: 1 }}
                        src={require("../../assets/logo/logo_v4.png")}
                        alt="Little Lemon logo"
                    />
                </Box>
                <Navbar
                    w="full"
                    spacing={{ xl: 16 }}
                    direction="row"
                    justify={{ md: "space-between", xl: "center" }}
                    px={{ base: "20px", md: "70px" }}
                    py={0.5}
                    darkBg={true}
                />
            </VStack>
        </Center >
    )
}

export default RegularHeader;
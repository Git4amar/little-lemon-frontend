import { Center, VStack, Image, Box } from '@chakra-ui/react';
import Navbar from '../../components/Navigation/Navbar';
import { motion, useAnimate, useAnimationFrame, useScroll } from "framer-motion";


const RegularHeader = ({ ...props }) => {

    const [scope, animate] = useAnimate();
    const { scrollY, scrollYProgress } = useScroll();
    let headerPrevStyle = null;

    const animateHeader = () => {
        // used animate function as if else will excute only once
        if (scrollY.current <= 20 && headerPrevStyle !== "transparent") {
            headerPrevStyle = "transparent";
            animate([
                ["#regular-header", {
                    backgroundColor: "#495E57",
                    boxShadow: "0px 0px 0px 0px #333333",
                    color: "#EDEFEE",
                    borderBottomColor: "#EDEFEE",
                }],
                ["#header-logo-v1", { opacity: 0 }, { at: "<" }],
                ["#header-logo-v2", { opacity: 1 }, { at: "<" }],
                ["[class*='line']", { backgroundColor: "#EDEFEE" }, { at: "<" }]
            ], {
                type: "spring",
                stiffness: 80,
                damping: 20
            });
        }
        else if (scrollY.current >= 20 && headerPrevStyle !== "notTransparent") {
            headerPrevStyle = "notTransparent";
            animate([
                ["#regular-header", {
                    backgroundColor: "#EDEFEE",
                    boxShadow: "0px 1px 4px 0px #33333380",
                    color: "#333333",
                    borderBottomColor: "#495E57",
                }],
                ["#header-logo-v1", { opacity: 1 }, { at: "<" }],
                ["#header-logo-v2", { opacity: 0 }, { at: "<" }],
                ["[class*='line']", { backgroundColor: "#495E57" }, { at: "<" }]
            ], {
                type: "spring",
                stiffness: 80,
                damping: 20
            });
        }
        scope.current.querySelector("#header-scroll-bar").style.width = `${scrollYProgress.current * 100}%`;
    }

    useAnimationFrame(animateHeader);

    return (
        <Box
            ref={scope}
        >
            <Center
                as={motion.header}
                id="regular-header"
                pos={{ md: "fixed" }}
                w="full"
                zIndex={{ md: "sticky" }}
                py={4}
                hideBelow="md"
                left="0"
                color="brand.secondary.brightGray"
                borderBottom="2px"
                borderBottomRadius={{ md: "75px", xl: "150px" }}
                // bg={scrollY.current > 25 ? "brand.secondary.brightGray" : "brand.primary.green"}
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
            <Box
                pos={{ md: "fixed" }}
                w="full"
                h="158px"
                zIndex={{ md: "docked" }}
                hideBelow="md"
                left="0"
                // bg="brand.secondary.brightGray"
                overflow="hidden"
                borderBottomRadius={{ md: "79px", xl: "158px" }}
            // visibility="hidden"
            >
                <Box
                    id="header-scroll-bar"
                    as={motion.div}
                    h="full"
                    initial={{ width: "0" }}
                    bg="brand.primary.green"
                />
            </Box>
        </Box>
    )
}

export default RegularHeader;
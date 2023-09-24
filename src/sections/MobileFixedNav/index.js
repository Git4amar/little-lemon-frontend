import { HStack, VStack, Image } from '@chakra-ui/react';
import HamburgerMenuIcon from './HamburgerMenuIcon';
import ButtonRegular from '../../components/Buttons/ButtonRegular';
import NavBar from "../../components/Navigation/Navbar"
import { useAnimate, motion } from 'framer-motion';
import useFormOverlayHandler from '../../util/customHooks/useFormOverlayHandler';

const MobileFixedNav = () => {

    const [overlayMenuScope, animateOverlayMenu] = useAnimate();

    const showOverlayMenu = status => {
        switch (status) {
            case true:
                animateOverlayMenu(overlayMenuScope.current, { left: "-20vw" }, {
                    ease: "easeOut",
                    duration: 1.74 / 2
                })
                break;
            default:
                animateOverlayMenu(overlayMenuScope.current, { left: "calc(-1 * 120vw)" }, {
                    ease: "backIn",
                    duration: 1.74 / 2
                })
        }
    }

    const { setIsFormOpen } = useFormOverlayHandler();

    return (
        <>
            {/* overlay menu */}
            <VStack
                as={motion.div}
                border="1px"
                bg="brand.primary.green"
                pos="fixed"
                initial={{ left: "calc(-1 * 120vw)" }}
                zIndex="sticky"
                w="120vw"
                h="100vh"
                justify={{ md: "center" }}
                hideFrom="xl"
                pt={{ base: 10, md: 0 }}
                pl={"20vw"}
                ref={overlayMenuScope}
            >
                {/* log and nav stack */}
                <VStack
                    spacing={{ base: 10, md: 16 }}
                >
                    <Image
                        h="156.27px"
                        src={require("../../assets/logo/logo_v2.png")}
                        alt="Little Lemon logo"
                    />
                    <NavBar
                        align="center"
                        color="brand.secondary.brightGray"
                        spacing={4}
                        darkBg={true}
                    />
                </VStack>
            </VStack>

            {/* bottom fixed nav */}
            <HStack
                as={motion.div}
                id="mobile-fixed-nav"
                pos="fixed"
                left="0"
                bottom="0"
                w="full"
                py={{ base: 2, md: 8 }}
                px={{ base: "20px", md: "70px" }}
                bg="brand.primary.green"
                zIndex="sticky"
                spacing={{ base: 6, md: 8 }}
                boxShadow="0px -1px 4px 0px #333333"
                hideFrom="xl"
            >
                <ButtonRegular
                    flexGrow={1}
                    onClick={() => setIsFormOpen(true)}
                >Reserve your table</ButtonRegular>
                <HamburgerMenuIcon
                    showOverlayMenu={showOverlayMenu}
                />
            </HStack>
        </>
    )
}

export default MobileFixedNav;
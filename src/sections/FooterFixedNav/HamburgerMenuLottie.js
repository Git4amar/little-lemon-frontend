import { Box, Center } from "@chakra-ui/react";
import { create } from '@lottiefiles/lottie-interactivity';
import { useEffect, useRef, useState } from "react";
require('@lottiefiles/lottie-player');

const HamburgerMenu = () => {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const lottiePlayer = useRef(null);

    const lottieInteraction = useRef(null);

    const addLottieInterativity = () => {
        lottieInteraction.current = create({
            player: "#hamburger-menu",
            mode: "chain",
            actions: [
                {
                    state: "none",
                    frames: [30],
                },
                {
                    state: "autoplay",
                    frames: [30, 85],
                },
                {
                    state: "autoplay",
                    frames: [140, 180],
                },
            ]
        });
    }


    if (lottieInteraction.current) {
        menuIsOpen && lottieInteraction.current.jumpToInteraction(1);
        !menuIsOpen && lottieInteraction.current.jumpToInteraction(2);
    }


    useEffect(() => {
        lottiePlayer.current.addEventListener("load", addLottieInterativity);
    }, [lottiePlayer])

    return (
        <Center
            boxSize={12}
        // border="1px"
        >
            <Box
                as="button"
                boxSize={10}
                border="1px"
                borderColor="brand.primary.yellow"
                borderRadius="8px"
                overflow="visible"
                onClick={() => { setMenuIsOpen(!menuIsOpen) }}
            >
                <Center
                    bg="brand.primary.green"
                    boxSize={12}
                    zIndex={-1}
                    // border="1px"
                    pos="relative"
                    left="-5px"
                    top="-5px"
                >
                    <lottie-player
                        ref={lottiePlayer}
                        id="hamburger-menu"
                        src="https://lottie.host/36ee9179-9153-4178-8ad8-b73362eac96e/V4O4XXoTbZ.json"
                        // https://lottie.host/6f5db245-773c-4abc-bde0-81350120aea3/DHhcfYbjvz.json
                        style={{ height: '32px', width: '32px' }}
                    />
                </Center>
            </Box>
        </Center>

    )
}

export default HamburgerMenu;
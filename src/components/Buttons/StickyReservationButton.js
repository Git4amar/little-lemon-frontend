import { Box } from "@chakra-ui/react";
import ButtonHoverable from "./ButtonHoverable";
import { useState, useEffect, useRef } from "react";
import { useAnimationFrame, useScroll } from "framer-motion";
import chakraPropFilter from "../../util/chakraPropFilter";

const StickyReservationButton = ({ ...props }) => {

    const [position, setPosition] = useState({
        mode: "absolute",
        top: 0,
        left: 35
    });

    const ref = useRef(null);
    const headerH = useRef(null);
    const buttonW = useRef(null);
    const specialCardCarouselTop = useRef(null);
    useEffect(() => {
        headerH.current = document.getElementById("regular-header").offsetHeight;
        specialCardCarouselTop.current = document.getElementById("specials-card-carousel").offsetTop;
        buttonW.current = ref.current.offsetWidth;
        setPosition(prev => {
            return {
                ...prev,
                top: specialCardCarouselTop.current + 32 + buttonW.current
            }
        });
    }, [])

    const { scrollY } = useScroll();

    const handleStickiness = () => {
        if (scrollY.current >= specialCardCarouselTop.current - headerH.current + 16 && position.mode !== "sticky") {
            setPosition(prevState => {
                return {
                    ...prevState,
                    mode: "sticky",
                    top: ref.current.offsetWidth + headerH.current + 16
                }
            })
        }
        else if (scrollY.current < specialCardCarouselTop.current - headerH.current + 16 && position.mode !== "absolute") {
            setPosition(prevState => {
                return {
                    ...prevState,
                    mode: "absolute",
                    top: specialCardCarouselTop.current + ref.current.offsetWidth + 32
                }
            })
        }
    }

    useAnimationFrame(handleStickiness);

    const { chakraProps, nonChakraProps } = chakraPropFilter(props);

    return (
        <Box
            ref={ref}
            transformOrigin="left center"
            transform="rotateZ(-90deg)"
            pos={position.mode}
            top={position.top}
            left={position.left}
            zIndex="sticky"
            w="max"
            h={0}
            hideBelow="xl"
            {...chakraProps}
        >
            <ButtonHoverable
                darkBg={false}
                {...nonChakraProps}
            >
                Reserve your table
            </ButtonHoverable>
        </Box>
    )
}

export default StickyReservationButton;
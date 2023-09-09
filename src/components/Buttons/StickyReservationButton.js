import { Box } from "@chakra-ui/react";
import ButtonHoverable from "./ButtonHoverable";
import { useState, useEffect, useRef } from "react";
import { useScroll } from "framer-motion";

const StickyButton = ({ ...props }) => {

    const { scrollY } = useScroll();
    const [position, setPosition] = useState({
        mode: "absolute",
        top: 0,
        left: 35
    });
    const stickyButtomElemRef = useRef(null);

    const handleStickiness = () => {
        const headerHeight = document.getElementById("regular-header").offsetHeight;
        const specialCardCarouselTop = document.getElementById("specials-card-carousel").offsetTop;
        if (scrollY.current >= specialCardCarouselTop - headerHeight + 16) {
            setPosition(prevState => {
                return {
                    ...prevState,
                    mode: "sticky",
                    top: stickyButtomElemRef.current.offsetWidth + headerHeight + 16
                }
            })
        }
        else {
            setPosition(prevState => {
                return {
                    ...prevState,
                    mode: "absolute",
                    top: specialCardCarouselTop + stickyButtomElemRef.current.offsetWidth + 32
                }
            })
        }
    }

    useEffect(() => {
        document.addEventListener("scroll", () => {
            window.requestAnimationFrame(handleStickiness);
        });
        return () => document.removeEventListener("scroll", () => {
            window.requestAnimationFrame(handleStickiness);
        });
        // eslint-disable-next-line
    }, [])


    return (
        <Box
            ref={stickyButtomElemRef}
            transformOrigin="left center"
            transform="rotateZ(-90deg)"
            pos={position.mode}
            top={position.top}
            left={position.left}
            zIndex="sticky"
            w="max"
            h={0}
            hideBelow="xl"
            {...props}
        >
            <ButtonHoverable
                darkBg={false}
            >
                Reserve your table
            </ButtonHoverable>
        </Box>
    )
}

export default StickyButton;
import { useAnimationFrame, useScroll } from "framer-motion";
import theme from "../../theme";
import { useBreakpointValue } from "@chakra-ui/react";

const useCardAnimator = (scope, cardIndex, breakpoint = "md") => {
    const { scrollYProgress } = useScroll({
        target: scope,
        offset: ["start end", "end start"]
    })

    let animationBreakpoint = useBreakpointValue(theme.breakpoints);
    animationBreakpoint = parseInt(animationBreakpoint.match(/^\d+px$/));

    // let elapsedTime = 0;
    useAnimationFrame((t, d) => {
        if (parseInt(theme.breakpoints[breakpoint].match(/^\d+px$/)) > animationBreakpoint || !scope) return;
        // elapsedTime += d;
        // if (elapsedTime > 100) {
        //     elapsedTime = 0;
        if (scrollYProgress.current > 0 && scrollYProgress.current <= 0.5) {
            scope.current.style.cssText = `
            padding-top : ${cardIndex % 2 ? `${16 - (2 * scrollYProgress.current * 16)}px` : `${(2 * scrollYProgress.current * 16) + 16}px`};
            padding-bottom: ${cardIndex % 2 ? `${(2 * scrollYProgress.current * 16) + 16}px` : `${16 - (2 * scrollYProgress.current * 16)}px`};
            transform: ${cardIndex % 2 ? `rotateZ(${4 * scrollYProgress.current}deg)` : `rotateZ(-${4 * scrollYProgress.current}deg)`};
            `;
        }
        else if (scrollYProgress.current > 0.5 && scrollYProgress.current < 1) {
            scope.current.style.cssText = `
            padding-top : ${cardIndex % 2 ? `${16 - (2 * (1 - scrollYProgress.current) * 16)}px` : `${(2 * (1 - scrollYProgress.current) * 16) + 16}px`};
            padding-bottom: ${cardIndex % 2 ? `${(2 * (1 - scrollYProgress.current) * 16) + 16}px` : `${16 - (2 * (1 - scrollYProgress.current) * 16)}px`};
            transform: ${cardIndex % 2 ? `rotateZ(${4 * (1 - scrollYProgress.current)}deg)` : `rotateZ(-${4 * (1 - scrollYProgress.current)}deg)`};
            `;
        }
        // }
    })
};

export default useCardAnimator;
import { VStack, Text } from "@chakra-ui/react";
import { useAnimationFrame, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";

const AboutOwnersText = ({ children }) => {

    const scope = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scope,
        offset: ["center end", "center"]
    })

    const words = children.split(" ");
    let wordSpanElems = useRef(null);
    let wordSpanElemsL = useRef(null);
    useEffect(() => {
        wordSpanElems.current = scope.current.querySelectorAll("span");
        wordSpanElemsL.current = wordSpanElems.current.length;
    }, [])

    useAnimationFrame(() => {
        if (scrollYProgress.current > 0 && scrollYProgress.current < 1) {
            let wordElem = wordSpanElems.current[Math.trunc((wordSpanElemsL.current) * scrollYProgress.current)];
            wordElem.style.cssText = `color: #333333;`
        }
    })

    return (
        <VStack
            ref={scope}
            w="full"
            pt="3px"
            pb="1px"
        >
            <Text
                w="full"
                fontSize="16px"
                fontWeight={400}
                lineHeight="150%"
                color="brand.primary.yellow"
            // color="brand.secondary.brightGray"
            >
                {words.map((word, index) => <span
                    key={word + "-" + index}
                >
                    {word + " "}
                </span>)}
            </Text>
        </VStack>
    )
}

export default AboutOwnersText;
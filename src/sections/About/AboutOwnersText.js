import { VStack, Text } from "@chakra-ui/react";
import { useAnimationFrame, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";

const AboutOwnersText = ({ children }) => {

    const scope = useRef(null);
    const { scrollYProgress, scrollY } = useScroll({
        target: scope,
        offset: ["center end", "0.25 center"]
    })

    const words = children.split(" ");
    let wordSpanElems = useRef(null);
    let wordSpanElemsL = useRef(null);
    useEffect(() => {
        wordSpanElems.current = Array.from(scope.current.querySelectorAll("span"));
        wordSpanElemsL.current = wordSpanElems.current.length;
    }, [])

    let i = 0;
    let coloredWordSpans = []
    useAnimationFrame(() => {
        if (scrollYProgress.current * 100 > 0 && scrollYProgress.current * 100 < 100) {
            if (scrollY.current > scrollY.prev && scrollYProgress.current * 100 > i * 100 / wordSpanElemsL.current && i < wordSpanElemsL.current) {
                wordSpanElems.current[0].style.cssText = "color: #333333;";
                coloredWordSpans.unshift(wordSpanElems.current[0]);
                wordSpanElems.current.shift();
                i++;
            }
            else if (scrollY.current < scrollY.prev && scrollYProgress.current * 100 < i * 100 / wordSpanElemsL.current && i >= 0) {
                coloredWordSpans[0].style.cssText = "color: #F4CE14;";
                wordSpanElems.current.unshift(coloredWordSpans[0]);
                coloredWordSpans.shift();
                i--;
            }
        }
        else if (scrollYProgress.current >= 1 && wordSpanElems.current.length > 0) {
            i = wordSpanElemsL.current;
            for (let word of wordSpanElems.current) {
                word.style.cssText = "color: #333333;";
                coloredWordSpans.unshift(word);
            }
            wordSpanElems.current = [];
        }
        else if (scrollYProgress.current <= 0 && coloredWordSpans.length > 0) {
            i = 0;
            for (let word of coloredWordSpans) {
                word.style.cssText = "color: #F4CE14;";
                wordSpanElems.current.unshift(word);
            }
            coloredWordSpans = [];
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
                    data-word-indicator={word + "-" + index}
                >
                    {word + " "}
                </span>)}
            </Text>
        </VStack>
    )
}

export default AboutOwnersText;
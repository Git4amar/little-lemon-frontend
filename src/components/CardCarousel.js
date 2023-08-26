import { HStack, VStack, Box } from "@chakra-ui/react";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

const CardCarousel = ({ Card, itemList, sectionRefForDrag }) => {

    const [scrollScope, animateScroll] = useAnimate();

    const sizeScroll = () => {
        const scrollW = Math.floor((scrollScope.current.offsetWidth - 8) / itemList.length);
        animateScroll("div", { width: scrollW });
    }

    useEffect(() => {
        sizeScroll();
    })

    return (
        <VStack
            spacing={{ base: 2, md: 8 }}
            align="start"
        >
            {/* carousel scrollbar */}
            <VStack
                // hideFrom="xl"
                py="2px"
                px="4px"
                bg="brand.primary.green"
                w="full"
                borderRadius="4px"
                align="Start"
                ref={scrollScope}
            >
                <Box
                    as={motion.div}
                    bg="brand.primary.yellow"
                    h={1}
                    w="40px"
                    borderRadius="2px"
                />
            </VStack>

            {/* carousel cards */}
            <HStack
                id="temp4carousel"
                as={motion.div}
                w="max"
                spacing={{ base: 4, md: 8 }}
                cursor="grab"
                drag="x"
                dragConstraints={sectionRefForDrag}
                pl={{ base: "20px", md: "70px", xl: "165px" }}
                pe={{ base: "20px", md: "70px" }}
                pos="relative"
                left={{
                    base: "-20px",
                    md: "-70px",
                    xl: "-165px"
                }}
            >
                {itemList.map(item => <Card
                    key={item.title}
                    imgSrc={item.imgSrc()}
                    title={item.title}
                    price={`$ ${item.price}`}
                    desc={item.desc}
                />)}
            </HStack>
        </VStack>
    )
}

export default CardCarousel;
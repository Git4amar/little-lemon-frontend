import { SimpleGrid } from "@chakra-ui/react";

const FullScreenSection = ({ children, ...props }) => {
    return (
        <>
            <SimpleGrid
                as="section"
                h="100vh"
                maxW="container.xl"
                mx="auto"
                px={{ base: "20px", md: "70px" }}
                columns={{ base: 4, md: 8, xl: 12 }}
                columnGap={4}
                rowGap="4px"
                autoRows="0px"
                {...props}
            >
                {children}
            </SimpleGrid>
        </>
    )
}

export default FullScreenSection;
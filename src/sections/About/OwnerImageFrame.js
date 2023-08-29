import { VStack, AspectRatio, Image, Box } from "@chakra-ui/react";

const OwnerImageFrame = ({
    src, alt, ratio, align, scale,
    scrollAnimation = false,
    fit = "cover",
    boxShadow = "0px 4px 4px 0px #33333380",
    borderRadius = "16px",
    ...props }) => {
    return (
        <VStack
            h="full"
            w="full"
            {...props}
        >
            <AspectRatio
                w="full"
                ratio={ratio}
            >
                <Box
                    overflow="hidden"
                    borderRadius={borderRadius}
                    boxShadow={boxShadow}
                >
                    <Image
                        w="full"
                        h="full"
                        src={src()}
                        alt={alt}
                        objectFit={fit}
                        align={align}
                        transform={`scale(${scale})`}
                    />
                </Box>
            </AspectRatio>
        </VStack>
    )
}

export default OwnerImageFrame;
import { forwardRef } from "react";
import { Center, Image } from "@chakra-ui/react";

const DishImageBox = forwardRef(({ imgSrc, renderState, imagePosProps = () => null, ...props }, ref) => {
    return (
        <Center
            border="1px"
            ref={ref}
            pos="absolute"
            {...imagePosProps()}
        >
            <Image
                src={imgSrc()}
                alt="An image of a dish"
                h="full"
                fit="cover"
                display={renderState ? "block" : "none"}
                {...props}
            />
        </Center>
    )
})

export default DishImageBox;
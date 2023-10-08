import { forwardRef, useEffect } from "react";
import { Center, Image } from "@chakra-ui/react";

const DishImageBox = forwardRef(({ imgSrc, renderState, imagePosProps = () => null, ...props }, ref) => {

    return (
        <Center
            ref={ref}
            pos="absolute"
            {...imagePosProps()}
        >
            <Image
                src={imgSrc()}
                alt="An image of a dish"
                h="full"
                fit="scale-down"
                display={renderState ? "block" : "none"}
                {...props}
            />
        </Center>
    )
})

export default DishImageBox;
import { forwardRef } from "react";
import { Center, Image } from "@chakra-ui/react";

const DishImageBox = forwardRef(({ imgSrc, renderState, srcSet, imagePosProps = () => null, ...props }, ref) => {

    // useEffect(() => {
    //     if (!renderState || imagePosProps().display === "none") return;
    //     console.log(ref.current, imagePosProps().h);
    // });

    return (
        <Center
            ref={ref}
            pos="absolute"
            {...imagePosProps()}
        // maxH={
        //     renderState && Object.keys(imagePosProps()).includes("maxH")
        //         ? imagePosProps().maxH > 336
        //             ? "336px"
        //             : imagePosProps().maxH
        //         : "336px"
        // }
        >
            <Image
                src={imgSrc()}
                alt="An image of a dish"
                h="full"
                w="full"
                fit="scale-down"
                display={renderState ? "block" : "none"}
                {...props}
            />
        </Center>
    )
})

export default DishImageBox;
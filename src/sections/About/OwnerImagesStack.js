import { HStack } from "@chakra-ui/react";
import OwnerImageFrame from "./OwnerImageFrame";

const OwnerImagesStack = ({ ...props }) => {
    return (
        <HStack
            id="about-image-stack"
            w="full"
            h={{
                base: "calc(calc(calc(100vw - 40px - 16px) / 3) * 24 / 9)",
                md: "calc(calc(calc(100vw - 140px - 32px) / 3) * 24 / 9)",
                xl: "calc(calc(calc(657px - 32px) / 3) * 24 / 9)",
            }}
            spacing={{ base: 2, md: 4 }}
            align="start"
            {...props}
        >
            {/* image 1 */}
            <OwnerImageFrame
                src={() => require("../../assets/images/restaurant/owner-image-A.jpg")}
                alt={"An image of Adrian and Mario"}
                ratio={9 / 16}
                justify="end"
                align="65% top"
            />
            {/* image 2 */}
            <OwnerImageFrame
                src={() => require("../../assets/images/restaurant/owner-image-C.jpg")}
                alt={"An image of Adrian and Mario"}
                ratio={9 / 24}
                align={{ base: "47% 20px", md: "47% 40px", xl: "47% 45px" }}
                scale="1.2"
                borderRadius="0px"
                boxShadow="0"
            />
            {/* image 3 */}
            <OwnerImageFrame
                src={() => require("../../assets/images/restaurant/owner-image-B.jpg")}
                alt={"An image of Adrian and Mario"}
                ratio={9 / 16}
                align="65% top"
            />
        </HStack>
    )
}

export default OwnerImagesStack;
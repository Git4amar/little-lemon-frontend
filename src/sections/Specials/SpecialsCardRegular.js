import { AspectRatio, VStack, Image, Text } from "@chakra-ui/react";
import CardHeaderDishInfo from "./CardHeaderDishInfo";
import OrderDelivery from "./OrderDelivery";

const SpecialsCardRegular = ({ title, desc, price, imgSrc, cardIndex }) => {
    return (
        <VStack
            pt={cardIndex % 2 === 0 ? 8 : 0}
        >
            <VStack
                as="article"
                w="280px"
                h={`${280 * 16 / 9}px`}
                bg="brand.secondary.brightGray"
                boxShadow="0px 4px 4px 0px #33333380"
                spacing={0}
                borderRadius="16px"
                overflow="hidden"
            >
                {/* Dish Card Image */}
                <AspectRatio
                    w="full"
                    ratio={4 / 3}
                >
                    <Image
                        src={imgSrc()}
                        alt={`Image of ${title} special dish`}
                        objectFit="cover"
                        className="dishImage"
                    />
                </AspectRatio>

                {/* Card Body */}
                <VStack
                    spacing={4}
                    h="full"
                    w="full"
                    p={4}
                    align="start"
                >
                    {/* Dish Name and price header */}
                    <CardHeaderDishInfo title={title} price={price} />
                    {/* Dish desc  */}
                    <Text
                        fontSize="16px"
                        fontWeight={400}
                        lineHeight="150%"
                        h="full"
                    >
                        {desc}
                    </Text>
                    {/* Order Delivery */}
                    <OrderDelivery />
                </VStack>
            </VStack>
        </VStack>
    )
}

export default SpecialsCardRegular;
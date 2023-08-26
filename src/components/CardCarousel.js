import { HStack } from "@chakra-ui/react";

const CardCarousel = ({ Card, itemList }) => {
    return (
        <HStack
            w="max"
            spacing={{ base: 4, md: 8 }}
            cursor="grab"
        >
            {itemList.map(item => <Card
                key={item.title}
                imgSrc={item.imgSrc()}
                title={item.title}
                price={`$ ${item.price}`}
                desc={item.desc}
            />)}
        </HStack>
    )
}

export default CardCarousel;
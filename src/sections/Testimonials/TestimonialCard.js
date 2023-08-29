import { Image, HStack, VStack, Text } from "@chakra-ui/react"
import { ReactComponent as RatingStarDefault } from "../../assets/icons/star-default.svg"
import { ReactComponent as RatingStarLiked } from "../../assets/icons/star-liked.svg"

const TestimonialCard = ({ reviewer, imgSrc, rating, review, cardIndex }) => {

    const possibleRatings = [1, 2, 3, 4, 5];

    return (
        <VStack
            pt={{ base: 0, md: cardIndex % 2 === 0 ? 8 : 0 }}
        >
            <VStack
                as="article"
                w={{ base: "calc(100vw - 40px)", md: "280px" }}
                h={{ base: "calc(calc(100vw - 40px) * 4 / 3)", md: "calc(280px * 4 / 3)" }}
                p={4}
                spacing={4}
                bg="brand.secondary.brightGray"
                boxShadow="0px 4px 4px 0px #33333380"
                borderRadius="16px"
                align="start"
            >
                {/* testimonial header */}
                <VStack
                    as="header"
                    align="start"
                >
                    {/* reviewer image and name */}
                    <HStack
                        spacing={4}
                        h="96px"
                    >
                        <Image
                            maxH="full"
                            src={imgSrc()}
                            size="full"
                            objectFit="cover"
                            alt={`Image of reviewer ${reviewer}`}
                        />
                        <Text
                            as="h3"
                            fontSize="18px"
                            fontWeight={700}
                            lineHeight="none"
                            color="brand.primary.green"
                        >
                            {reviewer}
                        </Text>
                    </HStack>

                    {/* ratings */}
                    <HStack
                        spacing={2}
                    >
                        {
                            possibleRatings.map(r => {
                                return r <= rating
                                    ? <RatingStarLiked key={`star${r}`} />
                                    : <RatingStarDefault key={`star${r}`} />;
                            })
                        }
                    </HStack>
                </VStack>

                {/* review  */}
                <Text
                    fontSize="16px"
                    fontWeight={400}
                    lineHeight="150%"
                >
                    {review}
                </Text>
            </VStack>
        </VStack>
    )
}

export default TestimonialCard;
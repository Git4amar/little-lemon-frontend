import { HStack, Text } from "@chakra-ui/react"

const ReservationReviewItem = ({ item, desc }) => {
    return (
        <HStack
            spacing={1}
            fontSize="16px"
            fontWeight={400}
            lineHeight="150%"
            w="full"
        >
            <Text
                fontSize="18px"
                fontWeight={500}
                lineHeight="none"
            >
                {item}
            </Text>
            <Text>
                :
            </Text>
            <Text
                w="min"
                flexGrow={1}
            >
                {desc}
            </Text>
        </HStack >
    )
}

export default ReservationReviewItem;
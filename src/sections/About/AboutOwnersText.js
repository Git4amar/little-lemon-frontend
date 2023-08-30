import { VStack, Text } from "@chakra-ui/react";

const AboutOwnersText = () => {
    return (
        <VStack
            w="full"
            pt="3px"
            pb="1px"
        >
            <Text
                w="full"
                fontSize="16px"
                fontWeight={400}
                lineHeight="150%"
                color="brand.secondary.darkCharcoal"
            // color="brand.secondary.brightGray"
            >
                Adrian and Mario are the proud owners of a Mediterranean restaurant located in the heart of Chicago. They specialize in Mediterranean cuisine, utilizing fresh ingredients and flavors from the Mediterranean region. Adrian and Mario have been in the restaurant business for over 10 years and have built up a loyal following of customers who appreciate their attention to detail and the quality of their food. Both Adrian and Mario are passionate about the Mediterranean cuisine and strive to bring the best flavors and ingredients to their customers. They are extremely proud of their restaurant and take great pride in providing the freshest and tastiest food to their customers.
            </Text>
        </VStack>
    )
}

export default AboutOwnersText;
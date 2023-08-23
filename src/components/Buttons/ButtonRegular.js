import { Button } from "@chakra-ui/react";

const ButtonRegular = ({ children, ...props }) => {

    return (
        <Button
            color="brand.primary.green"
            borderRadius="16px"
            bg="brand.primary.yellow"
            colorScheme="none"
            py={4}
            fontWeight={500}
            fontSize="18px"
            lineHeight="none"
            size="lg"
            boxShadow="0px 4px 4px 0px #333333"
            _active={{
                boxShadow: "0px 0px 0px 0px #333333",
                transform: "translateY(1px)",
                bg: "brand.secondary.brightGray",
            }}
            {...props}
        >
            {children}
        </Button>
    )
}

export default ButtonRegular;
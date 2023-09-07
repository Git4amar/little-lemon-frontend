import { Center, VStack, Image } from '@chakra-ui/react';
import Navbar from '../../components/Navigation/Navbar';

const RegularHeader = ({ ...props }) => {
    return (
        <Center
            id="regular-header"
            as="header"
            pos={{ md: "fixed" }}
            w="full"
            zIndex={{ md: "sticky" }}
            bg="brand.secondary.brightGray"
            py={4}
            boxShadow={{ md: "0px 1px 4px 0px #333333" }}
            hideBelow="md"
            {...props}
        >
            <VStack
                spacing={4}
                maxW="container.xl"
                w="full"
            >
                <Image
                    h="72px"
                    src={require("../../assets/logo/logo_v1.png")}
                    alt="Little Lemon logo"
                />
                <Navbar
                    w="full"
                    spacing={{ xl: 16 }}
                    direction="row"
                    justify={{ md: "space-between", xl: "center" }}
                    px={{ base: "20px", md: "70px" }}
                    py={0.5}
                />
            </VStack>
        </Center >
    )
}

export default RegularHeader;
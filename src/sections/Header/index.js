import { Center, VStack, Image } from '@chakra-ui/react';
import Navbar from './Navbar';

const Header = ({ ...props }) => {
    return (
        <Center
            as="header"
            pos={{ md: "fixed" }}
            w="full"
            zIndex={{ md: "docked" }}
            bg="brand.secondary.brightGray"
            py={4}
            boxShadow={{ md: "0px 1px 4px 0px #333333" }}
            hideBelow="md"
            {...props}
        >
            <VStack
                spacing={2}
                maxW="container.xl"
                w="full"
            >
                <Image
                    h={16}
                    src={require("../../assets/logo/logo_v1.png")}
                    alt="Little Lemon logo"
                />
                <Navbar />
            </VStack>
        </Center >
    )
}

export default Header;
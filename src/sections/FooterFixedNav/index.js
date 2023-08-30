import { HStack } from '@chakra-ui/react';
import HamburgerMenu from './HamburgerMenu';
import ButtonRegular from '../../components/Buttons/ButtonRegular';

const FooterFixedNav = () => {
    return (
        <HStack
            pos="fixed"
            bottom="0"
            w="full"
            py={{ base: 2, md: 8 }}
            px={{ base: "20px", md: "70px" }}
            bg="brand.primary.green"
            zIndex="sticky"
            spacing={{ base: 6, md: 8 }}
            boxShadow="0px -1px 4px 0px #333333"
            hideFrom="xl"
        >
            <ButtonRegular flexGrow={1} >Reserve your table</ButtonRegular>
            <HamburgerMenu />
        </HStack>
    )
}

export default FooterFixedNav;
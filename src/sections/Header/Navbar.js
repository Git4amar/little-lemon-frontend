import { Stack } from "@chakra-ui/react";
import NavItem from "./NavItem";
import { useState } from 'react';

const Navbar = () => {

    const [navMenuItems] = useState([
        {
            name: "HOME",
            href: "/",
        },
        {
            name: "ABOUT",
            href: "/about",
        },
        {
            name: "MENU",
            href: "/menu",
        },
        {
            name: "RESERVATIONS",
            href: "/reservations",
        },
        {
            name: "ORDER ONLINE",
            href: "/order-online",
        },
        {
            name: "LOG IN",
            href: "/login",
        }
    ]);

    const [activeItem, setActiveItem] = useState("HOME");

    return (
        <Stack
            w="full"
            as="nav"
            spacing={{ xl: 16 }}
            direction="row" hideBelow="md"
            justify={{ md: "space-between", xl: "center" }}
            px={{ base: "20px", md: "70px" }}
            py={0.5}
        >
            {navMenuItems.map(item => {
                return (
                    <NavItem
                        as="li"
                        key={item.name}
                        href={item.href}
                        isActive={item.name === activeItem}
                        setActiveItem={setActiveItem}
                    >
                        {item.name}
                    </NavItem>
                )
            }
            )}
        </Stack >
    )
}

export default Navbar;
import { Stack } from "@chakra-ui/react";
import NavItem from "./NavItem";
import { useState } from 'react';

const Navbar = () => {

    const [navMenuItems] = useState([
        {
            name: "home",
            href: "/",
        },
        {
            name: "about",
            href: "/about",
        },
        {
            name: "menu",
            href: "/menu",
        },
        {
            name: "reservations",
            href: "/reservations",
        },
        {
            name: "order online",
            href: "/order-online",
        },
        {
            name: "log in",
            href: "/login",
        }
    ]);

    const [activeItem, setActiveItem] = useState("home");

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
                        key={item.name}
                        href={item.href}
                        isActive={item.name === activeItem}
                        setActiveItem={setActiveItem}
                    >
                        {item.name.toUpperCase()}
                    </NavItem>
                )
            }
            )}
        </Stack >
    )
}

export default Navbar;
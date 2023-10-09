import { Stack } from "@chakra-ui/react";
import NavItem from "./NavItem";
import { useState } from 'react';

const Navbar = ({ darkBg = false, ...props }) => {

    const [navMenuItems] = useState([
        { name: "home", href: "/", },
        { name: "specials", href: "/specials" },
        { name: "testimonials", href: "/testimonials" },
        { name: "about", href: "/about", },
        // {
        //     name: "menu",
        //     href: "/menu",
        // },
        // {
        //     name: "reservations",
        //     href: "/reservations",
        // },
        // {
        //     name: "order online",
        //     href: "/order-online",
        // },
        // {
        //     name: "log in",
        //     href: "/login",
        // }
    ]);

    const [activeItem, setActiveItem] = useState("home");

    return (
        <Stack
            as="nav"
            {...props}
        >
            {navMenuItems.map(item => {
                return (
                    <NavItem
                        key={item.name}
                        href={item.href}
                        isActive={item.name === activeItem}
                        setActiveItem={setActiveItem}
                        darkBg={darkBg}
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
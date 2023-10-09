import { Stack } from "@chakra-ui/react";
import NavItem from "./NavItem";
import { useState } from 'react';

const Navbar = ({ darkBg = true, ...props }) => {

    const [navMenuItems] = useState([
        { name: "home", href: "#hero-section", },
        { name: "specials", href: "#specials-section" },
        { name: "testimonials", href: "#testimonials-section" },
        { name: "about", href: "#about-section", },
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
import { Stack } from "@chakra-ui/react";
import NavItem from "./NavItem";
import { useState, useEffect, useRef } from 'react';
import { useAnimationFrame, useScroll } from "framer-motion";

const Navbar = ({ darkBg = true, ...props }) => {

    const [navMenuItems, setNavMenuItems] = useState([
        { name: "home", href: "#hero-section", active: true },
        { name: "specials", href: "#specials-section", active: false },
        { name: "testimonials", href: "#testimonials-section", active: false },
        { name: "about", href: "#about-section", active: false },
    ]);

    const isScrollActivationLocked = useRef(false);
    const handleActivation = event => {
        switch (event.type) {
            case "click":
                isScrollActivationLocked.current = true;
                handleClickActivation(event);
                break;
            default:
                handleScrollActivation();
        }
    };

    const handleClickActivation = event => {
        event.preventDefault();
        const sectionId = event.target.href.split("/").slice(-1)[0];
        document.querySelector(sectionId).scrollIntoView({
            behavior: "smooth",
        });
        setNavMenuItems(prev => {
            return prev.map(item => {
                return { ...item, active: item.name === event.target.text.toLowerCase() }
            });
        });
    };

    const sectionScrollOffsets = useRef(null);
    const { scrollY } = useScroll();
    const handleScrollActivation = () => {
        let isInTimeout = false;
        let timeout = 5000;
        if (!isInTimeout) {
            const compareArray = sectionScrollOffsets.current.map(offset => scrollY.current - offset + (window.innerHeight * 0.2));
            let i = compareArray.length;
            while (i >= 0) {
                i--;
                if (compareArray[i] >= 0) {
                    break;
                }
            }
            if (isScrollActivationLocked.current) {
                isScrollActivationLocked.current = !navMenuItems[i].active;
            }
            if (!navMenuItems[i].active && !isScrollActivationLocked.current) {
                setNavMenuItems(prev => {
                    return prev.map((item, index) => {
                        return {
                            ...item,
                            active: i === index
                        }
                    })
                });
            }
            setTimeout(() => {
                isInTimeout = true
            }, timeout);
        }
    }

    useEffect(() => {
        sectionScrollOffsets.current = navMenuItems.map((item) => {
            return document.querySelector(item.href).getBoundingClientRect().top - document.body.getBoundingClientRect().top;
        });
        document.addEventListener("scroll", handleActivation);
        return () => document.removeEventListener("scroll", handleActivation);
    });


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
                        isActive={item.active}
                        handleActivation={handleActivation}
                        itemColor={item.name === "home" && item.active ? "brand.secondary.brightGray" : "brand.primary.green"}
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
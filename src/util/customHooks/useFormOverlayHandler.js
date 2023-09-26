import { animate } from "framer-motion";
import { useEffect, useState } from "react";

const useFormOverlayHandler = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleOverlay = async () => {
        switch (isFormOpen) {
            case true:
                await animate([
                    ['#table-reservation-section', { left: 0 }],
                    ['#regular-header, #mobile-fixed-nav', { left: "100vw", opacity: 0 }, { at: "<" }],
                ], {
                    type: "spring",
                    stiffness: 80,
                    damping: 20
                });
                break;
            default:
                await animate([
                    ['#table-reservation-section', { left: "-100vw" }],
                    ['#regular-header, #mobile-fixed-nav', { left: "0", opacity: 1 }, { at: "<" }],
                ], {
                    type: "spring",
                    stiffness: 80,
                    damping: 20
                });
        }
    }

    useEffect(() => {
        handleOverlay()
        // document.getElementById("form-close-btn").addEventListener("click", () => setIsFormOpen(false));
        // return () => document.getElementById("form-close-btn").removeEventListener("click", () => setIsFormOpen(false));
        //eslint-disable-next-line
    }, [isFormOpen])

    return {
        isFormOpen: isFormOpen,
        setIsFormOpen: setIsFormOpen
    }
}

export default useFormOverlayHandler;
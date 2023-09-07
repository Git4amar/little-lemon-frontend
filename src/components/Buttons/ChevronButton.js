import { Center } from "@chakra-ui/react";
import { ReactComponent as ChevronSvg } from "../../assets/icons/chevron.svg"
import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import { motion } from "framer-motion";

const ChevronButton = ({
    hexColorCode,
    filter = "drop-shadow(0px 2px 2px #33333340)",
    ...props
}) => {

    const [scope, animate] = useAnimate();

    useEffect(() => {
        scope.current.querySelector("path").style.fill = hexColorCode;
        scope.current.querySelector("svg").style.filter = filter;
    })

    return (
        <Center
            as={motion.div}
            w={6}
            h={8}
            ref={scope}
            {...props}
        >
            <ChevronSvg />
        </Center>
    )
}

export default ChevronButton;
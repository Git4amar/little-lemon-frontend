import { Button, HStack, useNumberInput } from "@chakra-ui/react";
import InputBox from "./InputBox";

const NumberInputMobile = ({ step = 1, defaultValue = 4, min = 1, max = 16, ...props }) => {

    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
        step: step,
        defaultValue: defaultValue,
        min: min,
        max: max
    });

    const numBtnProps = {
        size: "lg",
        boxShadow: "0px 4px 4px 0px #33333380",
        colorScheme: "none",
        bg: "brand.secondary.brightGray",
        color: "brand.primary.green",
        fontSize: "40px",
        fontWeight: 400,
        fontFamily: "Markazi Text",
        borderRadius: "8px",
        _active: {
            bg: "brand.primary.green",
            color: "brand.secondary.brightGray",
            boxShadow: "0px 0px 0px 0px #33333380",
            transform: "translateY(4px)"
        }
    }
    const numInputProps = {
        textAlign: "center",
        ...props
    }

    const input = getInputProps(numInputProps);
    const inc = getIncrementButtonProps(numBtnProps);
    const dec = getDecrementButtonProps(numBtnProps);

    return (
        <HStack>
            <Button
                {...dec}
            >
                -
            </Button>
            <InputBox {...input} />
            <Button
                {...inc}
            >
                +
            </Button>
        </HStack>
    )
}
export default NumberInputMobile;
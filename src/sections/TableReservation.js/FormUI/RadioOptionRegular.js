import { Circle, useRadio, HStack, Text } from "@chakra-ui/react";
import { ReactComponent as RadioCheck } from "../../../assets/icons/radio-check.svg";


const RadioOptionRegular = ({ rightIcon = null, children, formikMeta, formikHelpers, ...props }) => {

    const { getInputProps, getLabelProps, getRadioProps, state } = useRadio(props);

    return (
        <HStack
            as="label"
            spacing={1}
            cursor="pointer"
            htmlFor={children}
        >
            <input {...getInputProps()} id={children} />
            <Circle
                {...getRadioProps()}
                w={6}
                h={6}
                border="2px"
                borderColor="brand.primary.green"
                bg={state.isChecked ? "brand.primary.green" : "brand.secondary.brightGray"}
            >
                <RadioCheck />
            </Circle>
            <Text
                // as="label"
                {...getLabelProps()}
                fontSize="18px"
                fontWeight={500}
                lineHeight="none"
            >
                {children}
            </Text>
            {rightIcon}
        </HStack>
    )
}

export default RadioOptionRegular;
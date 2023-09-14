import { Circle, useCheckbox, HStack, Text } from "@chakra-ui/react";
import { ReactComponent as Check } from "../../../assets/icons/radio-check.svg";
import { useEffect } from "react";


const CheckboxOptionRegular = ({ rightIcon = null, children, formikMeta, formikHelpers, ...props }) => {

    const { getInputProps, getLabelProps, getCheckboxProps, state, htmlProps } = useCheckbox({
        ...props,
        defaultChecked: formikMeta.value
    });

    const handleFormikValue = async value => {
        await formikHelpers.setValue(value);
        formikHelpers.setTouched(true);
    }

    useEffect(() => {
        handleFormikValue(state.isChecked);
        // eslint-disable-next-line
    }, [state.isChecked])

    return (
        <HStack
            as="label"
            spacing={1}
            cursor="pointer"
            htmlFor={props.id}
            {...htmlProps}
        >
            <input {...getInputProps()} />
            <Circle
                {...getCheckboxProps()}
                w={6}
                h={6}
                border="2px"
                borderColor="brand.primary.green"
                bg={formikMeta.value ? "brand.primary.green" : "brand.secondary.brightGray"}
            >
                <Check />
            </Circle>
            <Text
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

export default CheckboxOptionRegular;
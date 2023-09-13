import { HStack, useRadioGroup } from "@chakra-ui/react";
import RadioOptionRegular from "./RadioOptionRegular";
import { useEffect } from "react";


const RegularRadioOptionGroup = ({
    options = ["option1", "option2"],
    name, formikMeta, formikHelpers,
    ...otherProps }) => {

    const { getRootProps, getRadioProps, value } = useRadioGroup({
        defaultValue: formikMeta.initialValue,
    });

    const handleFormikValue = async value => {
        await formikHelpers.setValue(value);
        formikHelpers.setTouched(true);
    }

    useEffect(() => {
        value && handleFormikValue(value);
    }, [value])

    return (
        <HStack
            spacing={4}
            {...getRootProps()}
        >
            {options.map(value => <RadioOptionRegular
                {...getRadioProps({ value })}
                name={name}
                key={value}
                value={value}
            >
                {value}
            </RadioOptionRegular>)}
        </HStack>
    )
}

export default RegularRadioOptionGroup;
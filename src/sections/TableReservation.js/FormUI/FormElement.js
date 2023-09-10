import { FormControl, FormErrorMessage, VStack } from "@chakra-ui/react";
import FieldLabel from "./FieldLabel";
import { useField } from "formik";
import { useEffect } from "react";


const FormElement = ({ inputComponent, label = "Label", ...props }) => {

    const { name, type } = props;

    const [field, meta, helpers] = useField({ name, type });

    return (
        <FormControl {...props} isInvalid={meta.touched && meta.error}>
            <VStack
                align="start"
                w={{ base: "full" }}
                spacing={2}
            >
                <FieldLabel>
                    {label}
                </FieldLabel>
                <VStack
                    w={{ base: "full" }}
                    spacing={0}
                    align="start"
                >
                    {inputComponent({ ...field, helpers: helpers })}
                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                </VStack>
            </VStack>
        </FormControl>
    )
}

export default FormElement;
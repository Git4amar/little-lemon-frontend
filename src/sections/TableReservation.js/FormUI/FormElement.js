import { FormControl, FormErrorMessage, VStack } from "@chakra-ui/react";
import FieldLabel from "./FieldLabel";
import { useField } from "formik";


const FormElement = ({ inputComponent, label = "Label", isRequired, ...props }) => {

    const { name, type } = props;

    const [field, meta, helpers] = useField({ name, type });

    return (
        <FormControl {...props} isInvalid={meta.touched && meta.error} isRequired={isRequired}
            isReadOnly={type === "text" || type === "number" ? false : true}
        >
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
                    {inputComponent({ ...field, ...props, formikHelpers: helpers, formikMeta: meta })}
                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                </VStack>
            </VStack>
        </FormControl>
    )
}

export default FormElement;
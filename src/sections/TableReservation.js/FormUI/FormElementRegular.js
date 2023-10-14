import { FormControl, FormErrorMessage, VStack } from "@chakra-ui/react";
import FieldLabel from "./FieldLabel";
import { useField, useFormikContext } from "formik";


const FormElementRegular = ({ inputComponent, label = "Label", isRequired, hasHelperInfoIcon, infoFor, ...props }) => {

    const { name, type, id } = props;

    const [field, meta, helpers] = useField(name);

    // const formikContext = useFormikContext();

    // props = displayDependsOn ? { ...props, displayDependsOn: displayDependsOn } : props

    return (
        <FormControl
            as={(type === "radio" || type === "checkbox") && "fieldset"}
            isInvalid={meta.touched && meta.error}
            isRequired={isRequired}
            id={id}
            name={name}
            type={type}
        // display={displayDependsOn
        //     ? !formikContext.values[displayDependsOn] || Object.keys(formikContext.errors).includes(displayDependsOn) ? "none" : "block"
        //     : "block"}
        >
            <VStack
                align="start"
                w={{ base: "full" }}
                spacing={2}
            >
                <FieldLabel
                    radio={type === "radio"}
                    checkbox={type === "checkbox"}
                    hasHelperInfoIcon={hasHelperInfoIcon}
                    infoFor={infoFor}
                >
                    {label}
                </FieldLabel>
                <VStack
                    w={{ base: "full" }}
                    spacing={0}
                    align="start"
                >
                    {
                        type === "textarea"
                            ? inputComponent({ ...field, ...props })
                            : inputComponent({
                                ...field,
                                ...props,
                                formikHelpers: helpers,
                                formikMeta: meta,
                            })
                    }
                    <FormErrorMessage>{meta.error}</FormErrorMessage>
                </VStack>
            </VStack>
        </FormControl>
    )
}

export default FormElementRegular;
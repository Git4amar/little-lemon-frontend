import { VStack, Box } from "@chakra-ui/react";
import FormStepHeading from "./FormStepHeading";
import { useFormikContext } from "formik";
import { useEffect } from "react";


const FormStepFrame = ({ children, stepDetails, formStatus, setFormStatus, ...props }) => {

    return (
        <Box
            w={{ base: "100vw", xl: "container.xl" }}
            h={{ base: "full" }}
            overflowY="auto"
            overflowX="hidden"
            {...props}
        >
            <VStack
                w="full"
                h="max"
                pt={{ base: 2 }}
                pb={{ base: 4 }}
                px={{ base: "20px", md: "70px" }}
                spacing={{ base: 4 }}
                align="start"
            >
                <FormStepHeading
                    formStatus={formStatus}
                >
                    {stepDetails.stepHeading}
                </FormStepHeading>
                {children}
            </VStack>
        </Box>
    )
}

export default FormStepFrame;
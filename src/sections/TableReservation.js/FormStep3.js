import FormStepFrame from "./FormStepFrame";
import { HStack } from "@chakra-ui/react";
import FormCTAButton from "./FormUI/FormCTAButton";


const FormStep3 = ({ stepHeading }) => {
    return (
        <FormStepFrame
            stepHeading={stepHeading}
        >
            {/* CTA button Stack */}
            <HStack
                w="full"
                spacing={4}
            >
                <FormCTAButton
                >
                    Previous
                </FormCTAButton>
                <FormCTAButton
                    primary
                    type="submit"
                >
                    Next
                </FormCTAButton>
            </HStack>
        </FormStepFrame>
    )
}

export default FormStep3;
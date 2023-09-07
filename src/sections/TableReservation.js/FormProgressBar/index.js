import { HStack, Box } from "@chakra-ui/react";
import StepIndicator from "./StepIndicator";

const FormProgressBar = () => {

    const numOfSteps = [1, 2, 3, 4]

    return (
        <HStack
            w="full"
            justify="space-between"
            divider={<Box
                bg="brand.primary.yellow"
                h="2px"
                flexGrow={1}
            />}
            spacing={0}
            px={0.5}
            py={2}
        >
            {numOfSteps.map(step => <StepIndicator
                key={`stepNo-${step}`}
            >
                {step}
            </StepIndicator>)}
        </HStack>
    )
}

export default FormProgressBar;
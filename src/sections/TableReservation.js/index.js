import { HStack, Heading, VStack, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ChevronButton from "../../components/Buttons/ChevronButton";
import FormProgressBar from "./FormProgressBar";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import FormStep4 from "./FormStep4";
import FormStep5 from "./FormStep5";


const TableReservation = () => {

    const formSteps = {
        step1: {
            stepHeading: "let's set up your table"
        },
        step2: {
            stepHeading: "customizations"
        },
        step3: {
            stepHeading: "your details"
        },
        step4: {
            stepHeading: "hold your reservation"
        },
        step5: {
            stepHeading: "review and confirm"
        }
    }

    return (
        <VStack
            as={motion.section}
            id="table-reservation-section"
            pos="fixed"
            w="100vw"
            h="100vh"
            spacing={0}
            top="0"
            left="0"
            // left="-100vw"
            bg="linear-gradient(180deg, #EDEFEE 0%, #D4E2CE 25%, #D1D0A6 50%, #DDB882 75%, #EE9972 100%);"
            zIndex="overlay"
        >
            {/* Header */}
            <VStack
                w="full"
                bg="brand.primary.green"
            >
                <VStack
                    w="full"
                    maxW="container.xl"
                    as="header"
                    pt={{ base: 2, md: 4 }}
                    pb={{ base: 4, md: 8, xl: 4 }}
                    px={{ base: "20px", md: "70px" }}
                    color="brand.primary.yellow"
                    spacing={{ base: 0, md: 4, xl: 2 }}
                >
                    {/* title & form close button */}
                    <HStack
                        w="full"
                        justify="space-between"
                    >
                        {/* heading */}
                        <Heading
                            as="h2"
                            fontSize="40px"
                            fontWeight={400}
                            lineHeight="none"
                        >
                            Table Reservation
                        </Heading>
                        {/* close btn */}
                        <ChevronButton />
                    </HStack>

                    {/* form progress bar */}
                    <FormProgressBar />
                </VStack>
            </VStack>

            {/* Form */}
            <Box
                w="full"
                maxW="container.xl"
                h="full"
                // overflow="hidden"
                border="2px"
            >
                <HStack
                    w="max"
                    h={{ base: "full" }}
                    pos="relative"
                    spacing={0}
                    left={{ base: `${-0 * 100}vw`, xl: `${-0 * 1280}px` }}
                >
                    <FormStep1
                        stepHeading={formSteps.step1.stepHeading}
                    />
                    <FormStep2
                        stepHeading={formSteps.step2.stepHeading}
                    />
                    <FormStep3
                        stepHeading={formSteps.step3.stepHeading}
                    />
                    <FormStep4
                        stepHeading={formSteps.step4.stepHeading}
                    />
                    <FormStep5
                        stepHeading={formSteps.step5.stepHeading}
                    />
                </HStack>
            </Box>
        </VStack >
    )
}

export default TableReservation;
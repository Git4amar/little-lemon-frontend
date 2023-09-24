import { HStack, Heading, VStack, Box } from "@chakra-ui/react";
import { motion, useAnimate } from "framer-motion";
import ChevronButton from "../../components/Buttons/ChevronButton";
import FormProgressBar from "./FormProgressBar";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import FormStep4 from "./FormStep4";
import FormStep5 from "./FormStep5";
import { useEffect, useState } from "react";


const TableReservation = () => {

    const formSteps = [
        {
            stepNum: 1,
            stepHeading: "let's set up your table"
        },
        {
            stepNum: 2,
            stepHeading: "customizations"
        },
        {
            stepNum: 3,
            stepHeading: "your details"
        },
        {
            stepNum: 4,
            stepHeading: "hold your reservation"
        },
        {
            stepNum: 5,
            stepHeading: "review and confirm"
        }
    ]

    const [formStatus, setFormStatus] = useState({
        totalNumOfSubForms: 4,
        stepInProgress: parseInt(sessionStorage.getItem("formStepInProgress")) || 1,
        previousStep: 1,
        stepsCompleted: sessionStorage.getItem("formStepsCompleted")
            ? new Set([...sessionStorage.getItem("formStepsCompleted").split(",").map(n => parseInt(n))])
            : new Set([])
    });

    const [formScope, animateForm] = useAnimate();

    useEffect(() => {
        const viewportWidth = window.innerWidth;
        switch (viewportWidth <= 1280) {
            case true:
                animateForm(formScope.current, {
                    left: `${-(formStatus.stepInProgress - 1) * 100}%`
                }, {
                    type: "spring",
                    stiffness: 80,
                    damping: 20
                });
                break;
            default:
                animateForm(formScope.current, {
                    left: -(formStatus.stepInProgress - 1) * 1280
                }, {
                    type: "spring",
                    stiffness: 80,
                    damping: 20
                });
        }
        sessionStorage.setItem("formStepInProgress", formStatus.stepInProgress);
        sessionStorage.setItem("formStepsCompleted", [...formStatus.stepsCompleted].toString());
        // console.log(formStatus);
        //eslint-disable-next-line
    }, [formStatus.stepInProgress])

    const goToPreviousFormStep = (event, stepValue = null) => {
        const trigger = event.target.innerHTML === "Previous"
            ? "previousBtn"
            : "headerBtn"
        setFormStatus(prev => {
            return {
                ...prev,
                stepInProgress: trigger === "previousBtn"
                    ? event.target.value - 1
                    : stepValue,
                previousStep: formStatus.stepInProgress,
            }
        })
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
            left="-100vw"
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
                        <ChevronButton
                            id="form-close-btn"
                        />
                    </HStack>

                    {/* form progress bar */}
                    <FormProgressBar formStatus={formStatus} goToPreviousFormStep={goToPreviousFormStep} />
                </VStack>
            </VStack>

            {/* Form  container*/}
            <Box
                w="full"
                maxW="container.xl"
                h={{ base: "calc(100% - 111px)", md: "calc(100% - 166px)", xl: "calc(100% - 142px)" }}
                overflow="hidden"
            >
                <HStack
                    as={motion.div}
                    id="reservation-form-stack"
                    w="max"
                    h={{ base: "full" }}
                    pos="relative"
                    spacing={0}
                    align="start"
                    ref={formScope}
                    left={{ base: `${-(formStatus.previousStep - 1) * 100}vw`, xl: `${-(formStatus.previousStep - 1) * 1280}px` }}
                >
                    <FormStep1
                        stepDetails={formSteps[0]}
                        formStatus={formStatus}
                        setFormStatus={setFormStatus}
                    />
                    <FormStep2
                        stepDetails={formSteps[1]}
                        formStatus={formStatus}
                        setFormStatus={setFormStatus}
                        goToPreviousFormStep={goToPreviousFormStep}
                    />
                    <FormStep3
                        stepDetails={formSteps[2]}
                        formStatus={formStatus}
                        setFormStatus={setFormStatus}
                        goToPreviousFormStep={goToPreviousFormStep}
                    />
                    <FormStep4
                        stepDetails={formSteps[3]}
                        formStatus={formStatus}
                        setFormStatus={setFormStatus}
                        goToPreviousFormStep={goToPreviousFormStep}
                    />
                    <FormStep5
                        stepDetails={formSteps[4]}
                        formStatus={formStatus}
                        setFormStatus={setFormStatus}
                        goToPreviousFormStep={goToPreviousFormStep}
                    />
                </HStack>
            </Box>
        </VStack >
    )
}

export default TableReservation;
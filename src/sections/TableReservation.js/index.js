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


const TableReservation = ({ handleFormOverlay }) => {

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
            : new Set([]),
        stepsInvalid: sessionStorage.getItem("formStepsInvalid")
            ? new Set([...sessionStorage.getItem("formStepsInvalid").split(",").map(n => parseInt(n))])
            : new Set([])
    });

    const formikOnSubmitLogic = (values, formikBag, stepNum) => {
        sessionStorage.setItem(`tableReservationStep${stepNum}`, JSON.stringify(values));
        setFormStatus(prev => {
            formStatus.stepsInvalid.delete(stepNum);
            return {
                ...prev,
                stepInProgress: formStatus.stepsCompleted.size === formStatus.totalNumOfSubForms
                    ? formStatus.stepsInvalid.size > 0
                        ? formStatus.stepsInvalid.values().next().value
                        : formStatus.totalNumOfSubForms + 1
                    : stepNum + 1,
                previousStep: stepNum,
                stepsCompleted: formStatus.stepsCompleted.add(stepNum),
                stepsInvalid: formStatus.stepsInvalid
            }
        });
        formikBag.setSubmitting(false);
    }

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
        sessionStorage.setItem("formStepsInvalid", [...formStatus.stepsInvalid].toString());
        // console.log(formStatus);
        //eslint-disable-next-line
    }, [formStatus.stepInProgress, formStatus.stepsInvalid.size]);

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

    const variants = {
        hidden: {
            left: "-100vw",
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 20
            }
        },
        visible: {
            left: 0,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 20
            }
        }
    }

    return (
        <VStack
            as={motion.section}
            id="table-reservation-section"
            pos="fixed"
            zIndex="overlay"
            w="100vw"
            h="100vh"
            spacing={0}
            top="0"
            bg="linear-gradient(180deg, #EDEFEE 0%, #D4E2CE 25%, #D1D0A6 50%, #DDB882 75%, #EE9972 100%);"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
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
                            onClick={handleFormOverlay}
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
                        formikOnSubmitLogic={formikOnSubmitLogic}
                    />
                    <FormStep2
                        stepDetails={formSteps[1]}
                        formStatus={formStatus}
                        setFormStatus={setFormStatus}
                        formikOnSubmitLogic={formikOnSubmitLogic}
                        goToPreviousFormStep={goToPreviousFormStep}
                    />
                    <FormStep3
                        stepDetails={formSteps[2]}
                        formStatus={formStatus}
                        setFormStatus={setFormStatus}
                        formikOnSubmitLogic={formikOnSubmitLogic}
                        goToPreviousFormStep={goToPreviousFormStep}
                    />
                    <FormStep4
                        stepDetails={formSteps[3]}
                        formStatus={formStatus}
                        setFormStatus={setFormStatus}
                        formikOnSubmitLogic={formikOnSubmitLogic}
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
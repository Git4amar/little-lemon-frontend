import { HStack, VStack, Text, Stack, Box } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormStepFrame from "./FormStepFrame";
import FormCTAButton from "./FormUI/FormCTAButton";
import FormElementRegular from "./FormUI/FormElementRegular";
import InputBox from "./FormUI/InputBox";
import CheckboxOptionRegular from "./FormUI/CheckboxOptionRegular";
import { AsYouType, parsePhoneNumber } from "libphonenumber-js";


const emailValidator = require("email-validator");

const FormStep3 = ({ stepDetails, formStatus, setFormStatus, goToPreviousFormStep }) => {
    return (
        <Formik
            initialValues={{
                firstname: "",
                lastname: "",
                email: "",
                phone: "",
                ...JSON.parse(sessionStorage.getItem("tableReservationStep3"))
            }}
            validationSchema={Yup.object().shape({
                firstname: Yup.string()
                    .required("Required"),
                lastname: Yup.string()
                    .required("Required"),
                email: Yup.string()
                    .required("Required")
                    .test(
                        'is-email-valid',
                        "Please enter a valid email address",
                        value => emailValidator.validate(value)
                    ),
                phone: Yup.string()
                    .when("phone", val => {
                        return val[0]
                            ? Yup.string()
                                .required("Required")
                                .test(
                                    'is-valid-phone',
                                    "Phone Number is Invalid",
                                    value => {
                                        if (value) {
                                            try {
                                                const phoneNum = parsePhoneNumber(value, "US")
                                                return phoneNum.isValid();
                                            }
                                            catch {
                                                return false;
                                            }
                                        }
                                    }
                                )
                            : Yup.string()
                                .notRequired()
                    })
            }, [
                ["phone", "phone"]
            ])}
            onSubmit={values => {
                sessionStorage.setItem("tableReservationStep3", JSON.stringify(values));
                !formStatus.stepsCompleted.has(stepDetails.stepNum)
                    &&
                    setFormStatus(prev => {
                        return {
                            ...prev,
                            stepInProgress: stepDetails.stepNum + 1,
                            previousStep: stepDetails.stepNum,
                            stepsCompleted: formStatus.stepsCompleted.add(stepDetails.stepNum)
                        }
                    });
            }}
        >
            <Form
                id="tableReservationStep3"
                style={{ height: "100%" }}
                noValidate
            // method="post"
            >
                <FormStepFrame
                    stepHeading={stepDetails.stepHeading}
                >
                    {/* login or guest info stack */}
                    <VStack
                        w="full"
                        spacing={2}
                    >
                        {/* log in button */}
                        <Box
                            as="h4"
                        >
                            <FormCTAButton
                                primary
                                w="280px"
                            >
                                Log in
                            </FormCTAButton>
                        </Box>

                        <Text
                            fontSize="16px"
                            lineHeight="150%"
                        >
                            OR
                        </Text>

                        {/* guest info stack */}
                        <Text
                            as="h4"
                            fontSize="18px"
                            fontWeight={500}
                            lineHeight="none"
                        >
                            Continue as a guest
                        </Text>
                    </VStack>
                    {/* name stack */}
                    <Stack
                        w="full"
                        spacing={4}
                        direction={{ xl: "row" }}
                    >
                        <FormElementRegular
                            label="First name"
                            name="firstname"
                            id="firstname"
                            type="text"
                            isRequired
                            inputComponent={inputProps => <InputBox
                                {...inputProps}
                                onChange={e => {
                                    const val = e.target.value.trimStart();
                                    inputProps.formikHelpers.setValue(val);
                                }}
                            />}
                        />
                        <FormElementRegular
                            label="Last name"
                            name="lastname"
                            id="lastname"
                            type="text"
                            isRequired
                            inputComponent={inputProps => <InputBox
                                {...inputProps}
                                onChange={e => {
                                    const val = e.target.value.trimStart();
                                    inputProps.formikHelpers.setValue(val);
                                }}
                            />}
                        />
                    </Stack>

                    {/* contact info stack */}
                    <Stack
                        w="full"
                        spacing={4}
                        direction={{ xl: "row" }}
                    >
                        <FormElementRegular
                            label="Email"
                            name="email"
                            id="email"
                            type="text"
                            isRequired
                            inputComponent={inputProps => <InputBox
                                {...inputProps}
                                onChange={e => {
                                    const val = e.target.value.trim();
                                    inputProps.formikHelpers.setValue(val);
                                }}
                            />}
                        />
                        <FormElementRegular
                            label="Phone"
                            name="phone"
                            id="phone"
                            type="text"
                            inputComponent={inputProps => <InputBox
                                {...inputProps}
                                onChange={e => {
                                    let val = e.target.value.trim();
                                    const formattedVal = val.length === 4 || val.length === 6 ? val : new AsYouType('US').input(val);
                                    inputProps.formikHelpers.setValue(formattedVal);
                                }}
                            />}
                        />
                    </Stack>

                    {/* easy reservation option */}
                    <FormElementRegular
                        label={false}
                        name="signUpForEasyReservation"
                        id="signUpForEasyReservation"
                        type="checkbox"
                        inputComponent={inputProps => <CheckboxOptionRegular
                            {...inputProps}
                        >
                            Sign me up as well
                        </CheckboxOptionRegular>}
                    />


                    {/* CTA button Stack */}
                    <HStack
                        w="full"
                        spacing={4}
                    >
                        <FormCTAButton
                            value={stepDetails.stepNum}
                            onClick={goToPreviousFormStep}
                        >
                            Previous
                        </FormCTAButton>
                        <FormCTAButton
                            primary
                            type="submit"
                        >
                            {formStatus.stepsCompleted.has(stepDetails.stepNum) ? "Make Changes" : "Next"}
                        </FormCTAButton>
                    </HStack>
                </FormStepFrame>
            </Form>
        </Formik>
    )
}

export default FormStep3;
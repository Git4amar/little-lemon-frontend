import { HStack, VStack, Text, Stack, Box } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormStepFrame from "./FormStepFrame";
import FormCTAButton from "./FormUI/FormCTAButton";
import FormElementRegular from "./FormUI/FormElementRegular";
import InputBox from "./FormUI/InputBox";
import CheckboxOptionRegular from "./FormUI/CheckboxOptionRegular";


const FormStep3 = ({ stepHeading }) => {
    return (
        <Formik
            initialValues={{
                firstname: "",
                lastname: "",
                email: "",
                phone: ""
            }}
            validationSchema={Yup.object({
                firstname: Yup.string()
                    .required("Required"),
                lastname: Yup.string()
                    .required("Required"),
                email: Yup.string()
                    .required("Required"),
                phone: Yup.string()
                    .notRequired()
            })}
            onSubmit={values => {
                console.log(values)
            }}
        >
            <Form
                id="tableReservationStep3"
                style={{ height: "100%" }}
                noValidate
            // method="post"
            >
                <FormStepFrame
                    stepHeading={stepHeading}
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
                            inputComponent={inputProps => <InputBox {...inputProps} />}
                        />
                        <FormElementRegular
                            label="Last name"
                            name="lastname"
                            id="lastname"
                            type="text"
                            isRequired
                            inputComponent={inputProps => <InputBox {...inputProps} />}
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
                            inputComponent={inputProps => <InputBox {...inputProps} />}
                        />
                        <FormElementRegular
                            label="Phone"
                            name="phone"
                            id="phone"
                            type="text"
                            inputComponent={inputProps => <InputBox {...inputProps} />}
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
            </Form>
        </Formik>
    )
}

export default FormStep3;
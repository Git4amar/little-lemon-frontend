import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Box, HStack, Image, Text } from "@chakra-ui/react";
import FormStepFrame from "./FormStepFrame";
import FormCTAButton from "./FormUI/FormCTAButton";
import FormElementRegular from "./FormUI/FormElementRegular";
import CheckboxOptionRegular from "./FormUI/CheckboxOptionRegular";
import InputBox from "./FormUI/InputBox";


const FormStep4 = ({ stepHeading }) => {
    return (
        <Formik
            initialValues={{
                easyReservationSignUp: false,
                cardNumber: "",
                expirationDate: "",
                securityCode: "",
                cardHolderName: ""
            }}
            onSubmit={values => {
                console.log(values)
            }}
        >
            <Form
                id="tableReservationStep4"
                style={{ height: "100%" }}
                noValidate
            // method="post"
            >
                <FormStepFrame
                    stepHeading={stepHeading}
                >
                    {/* reservation price info */}
                    <Text
                        as="h4"
                        fontSize="18px"
                        color="brand.primary.green"
                        fontWeight={700}
                        lineHeight="none"
                    >
                        A hold of $10.00 will be placed on your card.
                    </Text>
                    {/* payment method secure info */}
                    <HStack
                        w="full"
                        py={2}
                        spacing={4}
                        bg="linear-gradient(90deg, rgba(238, 153, 114, 0.00) 0%, #EE9972 47.2%, rgba(238, 153, 114, 0.00) 100%);"
                        justify="center"
                    >
                        <Image
                            alt="SSL secure payment"
                            src={require("../../assets/icons/lock-icon.png")}
                            objectFit="cover"
                            height="32px"
                        />
                        <Text
                            fontSize="16px"
                            color="brand.secondary.darkCharcoal"
                            fontWeight={400}
                            lineHeight="150%"
                        >
                            This is a secure 128-bit SSL Encrypted payment. You’re safe.
                        </Text>
                    </HStack>

                    {/* credit card num */}
                    <FormElementRegular
                        label="Card Number (no dashes or spaces)"
                        isRequired
                        name="cardNumber"
                        id="cardNumber"
                        hasHelperInfoIcon
                        infoFor="card-number"
                        inputComponent={inputProps => <InputBox {...inputProps} />}
                    />

                    {/* card expiration date */}
                    <FormElementRegular
                        label="Expiration Date (MM/YYYY)"
                        isRequired
                        name="expirationDate"
                        id="expirationDate"
                        hasHelperInfoIcon
                        infoFor="card-expiration-date"
                        inputComponent={inputProps => <InputBox {...inputProps} />}
                    />

                    {/* card security code */}
                    <FormElementRegular
                        label="Security Code"
                        isRequired
                        name="securityCode"
                        id="securityCode"
                        hasHelperInfoIcon
                        infoFor="card-security-code"
                        inputComponent={inputProps => <InputBox {...inputProps} />}
                    />
                    {/* name on the card */}
                    <FormElementRegular
                        label="Name on this card"
                        isRequired
                        name="cardHolderName"
                        id="cardHolderName"
                        hasHelperInfoIcon
                        infoFor="card-holder-name"
                        inputComponent={inputProps => <InputBox {...inputProps} />}
                    />

                    {/* easy reservation checkbox */}
                    <FormElementRegular
                        label={false}
                        name="easyReservationSignUp"
                        id="easyReservationSignUp"
                        type="checkbox"
                        inputComponent={inputProps => <CheckboxOptionRegular
                            {...inputProps}
                        >
                            Save this card for easy reservations
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

export default FormStep4;
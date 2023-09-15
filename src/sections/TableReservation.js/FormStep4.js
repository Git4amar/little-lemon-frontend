import { Form, Formik } from "formik";
import * as Yup from "yup";
import { HStack, Image, Text } from "@chakra-ui/react";
import FormStepFrame from "./FormStepFrame";
import FormCTAButton from "./FormUI/FormCTAButton";
import FormElementRegular from "./FormUI/FormElementRegular";
import CheckboxOptionRegular from "./FormUI/CheckboxOptionRegular";
import InputBox from "./FormUI/InputBox";


const dayjs = require("dayjs").extend(require("dayjs/plugin/isSameOrAfter"));

const FormStep4 = ({ stepHeading }) => {
    return (
        <Formik
            initialValues={{
                cardNumber: "",
                cardExpiration: "",
                securityCode: "",
                cardHolderName: "",
                easyReservationSignUp: false
            }}
            validationSchema={Yup.object({
                cardNumber: Yup.string()
                    .trim()
                    .required("Required")
                    .matches(/^\d{15,16}$/, "Please enter a valid 15 or 16 digit number without any dashes or spaces"),
                cardExpiration: Yup.string()
                    .trim()
                    .required("Required")
                    .matches(/^\d{2}\/\d{4}$/, "Please enter a valid expiration")
                    .test(
                        'is-valid-future-date',
                        "The expiration is invalid as it is in the past",
                        (value) => dayjs(value, "MM/YYYY").isSameOrAfter(dayjs(), "M")
                    ),
                securityCode: Yup.string()
                    .trim()
                    .required("Required")
                    .matches(/^\d{3,4}$/, "Please enter a valid 3 or 4 code"),
                cardHolderName: Yup.string()
                    .trim()
                    .required("Required"),
                easyReservationSignUp: Yup.boolean()
                    .notRequired(),
            })}
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
                        label="Card Expiration (MM/YYYY)"
                        isRequired
                        name="cardExpiration"
                        id="cardExpiration"
                        hasHelperInfoIcon
                        infoFor="card-expiration"
                        inputComponent={inputProps => <InputBox
                            {...inputProps}
                            onChange={e => {
                                let value = e.target.value;
                                if (value.length === 3) {
                                    value = value[2] === "/" ? value : value.substr(0, 2) + "/" + value[2]
                                }
                                inputProps.formikHelpers.setValue(value);
                            }}
                        />}
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
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormStepFrame from "./FormStepFrame";
import CheckboxOptionRegular from "./FormUI/CheckboxOptionRegular";
import { ReactComponent as DisabilityIcon } from "../../assets/icons/disability-accommodation-icon.svg"
import { HStack, Textarea } from "@chakra-ui/react";
import FormCTAButton from "./FormUI/FormCTAButton";
import RegularRadioOptionGroup from "./FormUI/RegularRadioOptionGroup";
import FormElementRegular from "./FormUI/FormElementRegular";
import SelectInput from "./FormUI/SelectInput";
import { ReactComponent as OccasionIcon } from "../../assets/icons/occasion.svg";


const FormStep2 = ({ stepDetails, formStatus, setFormStatus }) => {

    const seatingOptions = ["Indoors", "Outdoors"]
    const occasionOptions = ["Birthday", "Date", "Engagement", "Anniversary", "other"]

    return (
        <Formik
            initialValues={{
                disabilityAccomodation: false,
                seatingOptions: seatingOptions[0],
                occasions: "",
                additionalInfo: ""
            }}
            validationSchema={Yup.object({
                disabilityAccomodation: Yup.boolean()
                    .notRequired(),
                seatingOptions: Yup.string()
                    .notRequired(),
                occasions: Yup.string()
                    .notRequired(),
                additionalInfo: Yup.string()
                    .notRequired()
            })}
            onSubmit={values => {
                console.log(values);
            }}
        >
            <Form
                id="tableReservationStep2"
                style={{ height: "100%" }}
                noValidate
            // method="post"
            >
                <FormStepFrame
                    stepHeading={stepDetails.stepHeading}
                >
                    {/* disability accommodation */}
                    <FormElementRegular
                        label={false}
                        name="disabilityAccomodation"
                        id="disabilityAccomodation"
                        type="checkbox"
                        inputComponent={inputProps => <CheckboxOptionRegular
                            rightIcon={<DisabilityIcon />}
                            {...inputProps}
                        >
                            Disability Accommodation
                        </CheckboxOptionRegular>}
                    />

                    {/* seating preference */}
                    <FormElementRegular
                        label="What would you prefer?"
                        type="radio"
                        name="seatingOptions"
                        id="seatingOptions"
                        inputComponent={inputProps => <RegularRadioOptionGroup
                            options={seatingOptions}
                            {...inputProps}
                        />}
                    />

                    {/* occassion */}
                    <FormElementRegular
                        label="What's the occasion?"
                        name="occasions"
                        id="occasions"
                        type="select"
                        inputComponent={inputProps => <SelectInput
                            {...inputProps}
                            options={occasionOptions}
                            placeHolder="Occasion"
                            leftIcon={(iconProps) => <OccasionIcon {...iconProps} />}
                        />}
                    />

                    {/* additional info */}
                    <FormElementRegular
                        label="Anything else that'll make your reservation more pleasant?"
                        name="additionalInfo"
                        id="additionalInfo"
                        type="textarea"
                        inputComponent={inputProps => <Textarea
                            {...inputProps}
                            focusBorderColor="brand.primary.green"
                        />}
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
        </Formik >
    )
}

export default FormStep2;
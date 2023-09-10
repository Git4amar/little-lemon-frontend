import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "@chakra-ui/react";
import FormStepFrame from "./FormStepFrame";
import FormElement from "./FormUI/FormElement";
import NumberInput from "./FormUI/NumberInput"
// import SelectInput from "./FormUI/SelectInput";


const FormStep1 = ({ stepHeading }) => {
    return (
        <Formik
            initialValues={{
                numOfGuests: 4
            }}
            validationSchema={Yup.object({
                numOfGuests: Yup.number()
                    .required("Required")
                    .max(10, "Max number of 10 guests are allowed")
                    .min(1, "Min number of 1 guest is allowed")
            })}
            onSubmit={values => {
                console.log(values);
            }}
        >
            <Form>
                <FormStepFrame
                    stepHeading={stepHeading}
                >
                    {/* num of guests */}
                    <FormElement
                        id="numOfGuests"
                        name="numOfGuests"
                        label="How many in your party?"
                        isRequired
                        inputComponent={inputProps => <NumberInput {...inputProps} />}
                    />
                </FormStepFrame>
                <Button type="submit">Submit</Button>
            </Form>
        </Formik>
    )
}

export default FormStep1;
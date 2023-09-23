import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormStepFrame from "./FormStepFrame";
import FormElementRegular from "./FormUI/FormElementRegular";
import NumberInput from "./FormUI/NumberInput"
import SelectInput from "./FormUI/SelectInput";
import FormCTAButton from "./FormUI/FormCTAButton";
import TimeSelectRadioInputGroup from "./FormUI/TimeSelectRadioInputGroup.js/index.js";


const FormStep1 = ({ stepDetails, formStatus, setFormStatus }) => {

    const dayjs = require("dayjs")
    // simulate receive available dates from backend API
    const firstAvailableDate = dayjs(dayjs().format("YYYY-MM-DD")).toDate();

    // simulate receive available options from backend API
    const momentOptions = [
        "Breakfast (6 a.m. to noon)",
        "Lunch (noon to 6 p.m.)",
        "Dinner (6 p.m. to midnight)",
        "Bar (4 p.m. to midnight)"
    ]

    return (
        <Formik
            initialValues={{
                numOfGuests: 4,
                reservationDay: dayjs(firstAvailableDate).format("YYYY-MM-DD"),
                reservationMoment: "",
                reservationTime: "",
                ...JSON.parse(sessionStorage.getItem("tableReservationStep1"))
            }}
            validationSchema={Yup.object({
                numOfGuests: Yup.number()
                    .required("Required")
                    .max(16, "Max number of 10 guests are allowed")
                    .min(1, "Min number of 1 guest is allowed"),
                reservationDay: Yup.date()
                    .required("Required")
                    .min(dayjs(firstAvailableDate).toDate(), "Pick an available date within 4 weeks from today")
                    .max(dayjs(firstAvailableDate).add(4, "week").toDate(), "Reservations are available within 4 weeks from today."),
                reservationMoment: Yup.string()
                    .required("Required")
                    .oneOf(momentOptions, "Pick a valid option"),
                reservationTime: Yup.string()
                    .required("Required")
            })}
            onSubmit={values => {
                sessionStorage.setItem("tableReservationStep1", JSON.stringify(values));
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
                id="tableReservationStep1"
                style={{ height: "100%" }}
                noValidate
            // method="post"
            >
                <FormStepFrame
                    stepHeading={stepDetails.stepHeading}
                >
                    {/* num of guests */}
                    <FormElementRegular
                        id="numOfGuests"
                        name="numOfGuests"
                        label="How many in your party?"
                        isRequired
                        inputComponent={inputProps => <NumberInput {...inputProps} />}
                    />

                    {/* day of reservation */}
                    <FormElementRegular
                        id="reservationDay"
                        name="reservationDay"
                        label="When would you like to dine?"
                        isRequired
                        type="date"
                        inputComponent={inputProps => <SelectInput
                            {...inputProps}
                            renderAsDatePicker={true}
                        />}
                    />

                    {/* moment of reservation */}
                    <FormElementRegular
                        id="reservationMoment"
                        name="reservationMoment"
                        label="Choose your moment"
                        isRequired
                        type="select"
                        inputComponent={inputProps => <SelectInput
                            {...inputProps}
                            options={momentOptions}
                            placeHolder="Moment"
                        />}
                    />

                    {/* show available time */}
                    <FormElementRegular
                        name="reservationTime"
                        type="radio"
                        id="reservationTime"
                        label="Select an available time"
                        isRequired
                        inputComponent={inputProps => <TimeSelectRadioInputGroup
                            {...inputProps}
                        />}
                        displayDependsOn="reservationMoment"
                    />
                    <FormCTAButton
                        primary
                        type="submit"
                    >
                        {formStatus.stepsCompleted.has(stepDetails.stepNum) ? "Make Changes" : "Next"}
                    </FormCTAButton>
                </FormStepFrame>
            </Form>
        </Formik>
    )
}

export default FormStep1;
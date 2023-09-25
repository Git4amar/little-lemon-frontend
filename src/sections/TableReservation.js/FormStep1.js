import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormStepFrame from "./FormStepFrame";
import FormElementRegular from "./FormUI/FormElementRegular";
import NumberInput from "./FormUI/NumberInput"
import SelectInput from "./FormUI/SelectInput";
import FormCTAButton from "./FormUI/FormCTAButton";
import TimeSelectRadioInputGroup from "./FormUI/TimeSelectRadioInputGroup.js/index.js";


const FormStep1 = ({ stepDetails, formStatus, setFormStatus, formikOnSubmitLogic }) => {

    const dayjs = require("dayjs")
    // simulate receive available dates from backend API
    const todayDate = dayjs(dayjs().format("YYYY-MM-DD")).toDate();

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
                reservationDay: dayjs(todayDate).format("YYYY-MM-DD"),
                reservationMoment: "",
                reservationTime: "",
                // ...JSON.parse(sessionStorage.getItem(`tableReservationStep${stepDetails.stepNum}`))
            }}
            validationSchema={Yup.object({
                numOfGuests: Yup.number()
                    .required("Required")
                    .max(16, "Max number of 10 guests are allowed")
                    .min(1, "Min number of 1 guest is allowed"),
                reservationDay: Yup.date()
                    .required("Required")
                    .min(dayjs(todayDate).toDate(), "Pick an available date within 4 weeks from today")
                    .max(dayjs(todayDate).add(4, "week").toDate(), "Reservations are available within 4 weeks from today."),
                reservationMoment: Yup.string()
                    .required("Required")
                    .oneOf(momentOptions, "Pick a valid option"),
                reservationTime: Yup.string()
                    .required("Required")
            })}
            onSubmit={(values, formikBag) => {
                formikOnSubmitLogic(values, formikBag, stepDetails.stepNum)
            }}
            onReset={(values, formikBag) => {
                sessionStorage.removeItem(`tableReservationStep${stepDetails.stepNum}`);
            }}
        >
            <Form
                id={`tableReservationStep${stepDetails.stepNum}`}
                style={{ height: "100%" }}
                noValidate
            // method="post"
            >
                <FormStepFrame
                    stepDetails={stepDetails}
                    formStatus={formStatus}
                    setFormStatus={setFormStatus}
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
                        formStatus={formStatus}
                        setFormStatus={setFormStatus}
                        stepNum={stepDetails.stepNum}
                    >
                        {formStatus.stepsInvalid.size === 0 ? "Review" : "Next"}
                    </FormCTAButton>
                    <FormCTAButton
                        type="reset"
                        display={formStatus.stepsCompleted.size === formStatus.totalNumOfSubForms ? "block" : "none"}
                    >
                        Reset
                    </FormCTAButton>
                </FormStepFrame>
            </Form>
        </Formik>
    )
}

export default FormStep1;
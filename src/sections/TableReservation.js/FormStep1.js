import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormStepFrame from "./FormStepFrame";
import FormElementRegular from "./FormUI/FormElementRegular";
import NumberInput from "./FormUI/NumberInput"
import SelectInput from "./FormUI/SelectInput";
import FormCTAButton from "./FormUI/FormCTAButton";
import TimeSelectRadioInputGroup from "./FormUI/TimeSelectRadioInputGroup.js/index.js";


const FormStep1 = ({ stepHeading }) => {

    const dayjs = require("dayjs")
    // ToDo: receive available dates from backend API
    const firstAvailableDate = dayjs(dayjs().format("YYYY-MM-DD")).toDate();

    // ToDo: receive available options from backend API
    const momentOptions = [
        "Breakfast (6 a.m. to noon)",
        "Lunch (noon to 6 p.m.)",
        "Dinner (6 p.m. to midnight)",
        "Bar (noon to midnight)"
    ]

    // ToDo: receive available times from backend API
    const timeOptions = [
        "4:00 PM",
        "4:15 PM",
        "4:30 PM",
        "4:45 PM",
        "5:00 PM",
        "5:15 PM",
        "5:30 PM",
        "5:45 PM",
        "6:00 PM",
        "6:15 PM",
        "6:30 PM",
        "6:45 PM",
        "7:00 PM",
        "7:15 PM",
        "7:30 PM",
        "7:45 PM",
        "8:00 PM"
    ]

    return (
        <Formik
            initialValues={{
                numOfGuests: 4,
                reservationDay: dayjs(firstAvailableDate).format("YYYY-MM-DD"),
                reservationMoment: "",
                reservationTime: ""
            }}
            validationSchema={Yup.object({
                numOfGuests: Yup.number()
                    .required("Required")
                    .max(10, "Max number of 10 guests are allowed")
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
                    .oneOf(timeOptions, "Pick a valid option")
            })}
            onSubmit={values => {
                console.log(values);
            }}
        >
            <Form
                id="tableReservationStep1"
                style={{ height: "100%" }}
                noValidate
            // method="post"
            >
                <FormStepFrame
                    stepHeading={stepHeading}
                >
                    {/* num of guests */}
                    <FormElementRegular
                        id="numOfGuests"
                        name="numOfGuests"
                        label="How many in your party?"
                        isRequired
                        type="number"
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
                            options={timeOptions}
                            {...inputProps}
                        />}
                    />
                    <FormCTAButton
                        primary
                        type="submit"
                    >
                        Next
                    </FormCTAButton>
                </FormStepFrame>
            </Form>
        </Formik>
    )
}

export default FormStep1;
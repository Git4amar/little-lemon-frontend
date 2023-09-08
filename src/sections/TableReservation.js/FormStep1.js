import FormStepFrame from "./FormStepFrame";
import { ReactComponent as OccasionIcon } from "../../assets/icons/occasion.svg"
import InputBox from "./FormUI/InputBox";
import NumberInputMobile from "./FormUI/NumberInput";
import SelectInput from "./FormUI/SelectInput";
import TimeSelectRadioInputGroup from "./FormUI/TimeSelectRadioInput.js";


const FormStep1 = ({ stepHeading }) => {

    return (
        <FormStepFrame
            stepHeading={stepHeading}
        >
            <InputBox />
            <NumberInputMobile />
            <SelectInput
                leftIcon={<OccasionIcon />}
                placeHolder="Occasion"
                options={[
                    "birthday",
                    "date",
                    "engagement",
                    "anniversary"
                ]}
            />
            <SelectInput
                renderAsDatePicker={true}
            // nextAvailableDate={"2023-09-10"}
            />

            <TimeSelectRadioInputGroup
                name="reservationTime"
                options={["4:00 PM", "4:30 PM", "4:15 PM", "5:00 PM", "4:45 PM"]}
            />

        </FormStepFrame>
    )
}

export default FormStep1;
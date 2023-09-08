import FormStepFrame from "./FormStepFrame";
import { ReactComponent as OccasionIcon } from "../../assets/icons/occasion.svg"
import InputBox from "./FormUI/InputBox";
import NumberInputMobile from "./FormUI/NumberInput";
import SelectInput from "./FormUI/SelectInput";


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
        </FormStepFrame>
    )
}

export default FormStep1;
import FormStepFrame from "./FormStepFrame";
import InputBox from "./FormUI/InputBox";
import NumberInputMobile from "./FormUI/NumberInput";
import SelectInput from "./FormUI/SelectInput";
import { ReactComponent as OccasionIcon } from "../../assets/icons/occasion.svg"


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
                    "engagement",
                    "anniversary"
                ]}
            />
        </FormStepFrame>
    )
}

export default FormStep1;
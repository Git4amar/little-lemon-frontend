import FormStepFrame from "./FormStepFrame";
import { ReactComponent as OccasionIcon } from "../../assets/icons/occasion.svg"
import InputBox from "./FormUI/InputBox";
import NumberInputMobile from "./FormUI/NumberInput";
import SelectInput from "./FormUI/SelectInput";
import TimeSelectRadioInputGroup from "./FormUI/TimeSelectRadioInput.js";
import RadioOptionRegular from "./FormUI/RadioOptionRegular";
import { ReactComponent as DisabilityIcon } from "../../assets/icons/disability-accommodation-icon.svg";
import { HStack, Textarea, useRadioGroup } from "@chakra-ui/react";
import FieldLabel from "./FormUI/FieldLabel";


const FormStep1 = ({ stepHeading }) => {

    const { getRadioProps, getRootProps } = useRadioGroup();

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

            <RadioOptionRegular
                rightIcon={<DisabilityIcon />}
            >
                Disability Accommodation
            </RadioOptionRegular>

            <HStack
                spacing={4}
                {...getRootProps()}
            >
                {["Indoors", "Outdoors"].map(value => <RadioOptionRegular
                    key={value}
                    {...getRadioProps({ value })}
                >
                    {value}
                </RadioOptionRegular>)}
            </HStack>

            <Textarea
                color="brand.primary.green"
                focusBorderColor="brand.primary.green"
                borderRadius="16px"
                border="1px"
            />

            <FieldLabel
                hasHelperInfo={true}
                isRequired={true}
            >
                Field Label
            </FieldLabel>

        </FormStepFrame>
    )
}

export default FormStep1;
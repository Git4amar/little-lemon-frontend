import { HStack, VStack, Box } from "@chakra-ui/react";
import { useRadioGroup } from "@chakra-ui/react";
import TimeRadioInputOption from "./TimeRadioInputOption";
import timeSortingFunction from "../../../../util/timeSortingFunction";
import getAvailableTimes from "../../../../util/getAvailableTimes";
import { useEffect, useState } from "react";
import { useFormikContext } from "formik";


const dayjs = require("dayjs");

const TimeSelectRadioInputGroup = ({ formikHelpers, formikMeta, displayDependsOn, ...props }) => {

    const { id, name } = props;
    const { getRadioProps, getRootProps, value, setValue } = useRadioGroup({
        defaultValue: formikMeta.initialValue
    });

    const [options, setOptions] = useState([
        "0:00",
        "12:00"
    ])

    const formikContext = useFormikContext();

    // simulate recieving available time optionsm from backend API
    const reservationMomentInitialValue = formikContext.initialValues[displayDependsOn].split(" ")[0];
    const reservationMomentValue = formikContext.values[displayDependsOn].split(" ")[0];
    useEffect(() => {
        if (reservationMomentValue !== reservationMomentInitialValue) {
            formikHelpers.setValue("")
                .then(() => {
                    setValue("");
                })
        }
        else {
            formikHelpers.setValue(formikMeta.initialValue)
                .then(() => {
                    setValue(formikMeta.initialValue);
                })
        }
        setOptions(getAvailableTimes(
            reservationMomentValue,
            reservationMomentInitialValue === reservationMomentValue
                ? dayjs(formikMeta.initialValue, "h:mm a").format("H:mm")
                : null
        ));
        // eslint-disable-next-line
    }, [reservationMomentValue, reservationMomentInitialValue])

    const timeOptions = timeSortingFunction(options);

    // split the timeOption into groups of threes
    const timeOptionsGroups = []
    for (let i = 0; 3 * i <= timeOptions.length; i++) {
        timeOptionsGroups.push(timeOptions.slice(3 * i, 3 * (i + 1)));
    }

    const handleRadioValue = async (value) => {
        await formikHelpers.setValue(value);
        formikHelpers.setTouched(true);
    }

    useEffect(() => {
        value && handleRadioValue(value);
        // eslint-disable-next-line
    }, [value])

    return (
        <Box
            w={{ base: "100vw", xl: "full" }}
            overflow="auto"
            pos="relative"
            left={{ base: "-20px", md: "-70px", xl: null }}
        >
            <HStack
                w="max"
                px={{ base: "20px", md: "70px", xl: null }}
                pb={2}
                spacing={{ base: 2, md: 4 }}
                align="start"
                id={id}
                {...getRootProps()}
            >
                {timeOptionsGroups.map(timeGroup => {
                    return (
                        <VStack
                            key={timeGroup.toString()}
                            spacing={2}
                        >
                            {timeGroup.map(value => {
                                return (
                                    <TimeRadioInputOption
                                        {...getRadioProps({ value })}
                                        name={name}
                                        key={value}
                                        value={value}
                                        setValue={setValue}
                                    >
                                        {value}
                                    </TimeRadioInputOption>
                                )
                            })}
                        </VStack>
                    )
                })
                }
            </HStack>
        </Box>
    )
}

export default TimeSelectRadioInputGroup;
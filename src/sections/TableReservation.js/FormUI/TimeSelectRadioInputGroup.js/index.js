import { HStack, VStack, Box } from "@chakra-ui/react";
import { useRadioGroup } from "@chakra-ui/react";
import TimeRadioInputOption from "./TimeRadioInputOption";
import timeSortingFunction from "../../../../util/timeSortingFunction";
import { useEffect } from "react";


const TimeSelectRadioInputGroup = ({ options = ["00:00 AM", "00:00 PM"], formikHelpers, formikMeta, ...props }) => {

    const { id, name } = props;
    const { getRadioProps, getRootProps, value } = useRadioGroup();

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
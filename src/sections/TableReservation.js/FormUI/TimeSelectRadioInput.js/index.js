import { HStack, VStack } from "@chakra-ui/react";
import { useRadioGroup } from "@chakra-ui/react";
import TimeRadioInputOption from "./TimeRadioInputOption";
import { useEffect } from "react";
import timeSortingFunction from "../../../../util/timeSortingFunction";


const TimeSelectRadioInputGroup = ({ options, ...props }) => {

    const { getRadioProps, getRootProps } = useRadioGroup(props);

    const timeOptions = timeSortingFunction(options);

    // split the timeOption into groups of threes
    const timeOptionsGroups = []
    for (let i = 0; 3 * i <= timeOptions.length; i++) {
        timeOptionsGroups.push(timeOptions.slice(3 * i, 3 * (i + 1)));
    }

    return (
        <HStack
            spacing={{ base: 2, md: 4 }}
            align="start"
        >
            {timeOptionsGroups.map(timeGroup => {
                return (
                    <VStack
                        key={timeGroup.toString()}
                        spacing={2}
                        {...getRootProps()}
                    >
                        {timeGroup.map(value => {
                            return (
                                <TimeRadioInputOption
                                    key={value}
                                    value={value}
                                    {...getRadioProps({ value })}
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
    )
}

export default TimeSelectRadioInputGroup;
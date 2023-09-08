import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { ReactComponent as ChevronIcon } from "../../../../assets/icons/chevron.svg"
import { useAnimate, motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import convertToTitleCase from "../../../../util/convertToTitleCase";
import OptionsStack from "./OptionsStack";
import DateSelector from "./DateSelector";


const SelectInput = ({ leftIcon = null, placeHolder = "placeholder", renderAsDatePicker = false, ...props }) => {

    const {
        name, defaultValue, nextAvailableDate,
        options = ["option1", "option2", "option3", "option4"],
        ...otherProps
    } = props;

    const [scope, animate] = useAnimate();

    const [isOpen, setIsOpen] = useState(false);

    const LeftIcon = () => leftIcon ? <Box className="leftIcon">{leftIcon}</Box> : null;

    const [selectedOption, setSelectedOption] = useState(defaultValue);
    const handleOptionSelection = option => {
        const optionValue = option.target.getElementsByTagName("p")[0].innerHTML.toLowerCase();
        setSelectedOption(optionValue);
        scope.current.getElementsByTagName("select")[0].value = optionValue;
        wasOpen.current = isOpen;
        setIsOpen(false);
    }

    const dayjs = require("dayjs");
    const today = dayjs()
    const [selectedDate, setSelectedDate] = useState(
        nextAvailableDate
            ? nextAvailableDate
            : today.format('YYYY-MM-DD')
    );
    const firstDatePicked = useRef(false);
    const handleDateSelection = date => {
        setSelectedDate(dayjs(date).format("YYYY-MM-DD"));
        wasOpen.current = isOpen;
        firstDatePicked.current = true;
        setIsOpen(false);
    }

    const wasOpen = useRef(false);

    useEffect(() => {
        animate(".select-btn-chevron path", {
            fill: selectedOption || firstDatePicked.current
                ? "#EDEFEE"
                : "#495E57"
        }, { duration: 0.01 });
        leftIcon && animate(".leftIcon path", {
            fill: selectedOption
                ? "#EDEFEE"
                : "#495E57"
        }, { duration: 0.01 });
        isOpen
            ? animate([
                [".select-btn-chevron", { transform: "rotateZ(90deg)" }],
                [".rendered-select-button", {
                    boxShadow: "0px 4px 4px 0px #33333380",
                    border: "0px",
                    transform: "translateY(-1px)"
                }, { at: "<" }]
            ], {
                ease: "easeOut",
                duration: 1.74 / 4
            })
            : wasOpen.current
            &&
            animate([
                [".select-btn-chevron", { transform: "rotateZ(-90deg)" }],
                [".rendered-select-button", {
                    boxShadow: "0px 0px 0px 0px #33333380",
                    border: "1px solid #495E57",
                    transform: "translateY(1px)"
                }, { at: "<" }]
            ], {
                ease: "easeOut",
                duration: 1.74 / 4
            });
    })

    return (
        <VStack
            w={{ base: "full" }}
            spacing={2}
            ref={scope}
        >
            {/* form select button (hidden) */}
            {renderAsDatePicker
                ? <input
                    type="date"
                    name={name}
                    value={selectedDate}
                    readOnly
                    style={{ display: "none" }}
                />
                : <select
                    name={name}
                    defaultValue={defaultValue}
                    style={{ display: "none" }}
                >
                    {options.map(option => <option
                        key={option}
                        value={option}
                    >
                        {option}
                    </option>)}
                </select>
            }

            {/* Rendered select button */}
            {/* selected button */}
            <HStack
                className="rendered-select-button"
                as={motion.div}
                w={{ base: "full" }}
                justify="space-between"
                bg={selectedOption || firstDatePicked.current ? "brand.primary.green" : "brand.secondary.brightGray"}
                color={selectedOption || firstDatePicked.current ? "brand.secondary.brightGray" : "brand.primary.green"}
                borderRadius="16px"
                px={8}
                py={4}
                cursor="pointer"
                border={selectedOption ? "0px" : "1px"}
                onClick={() => { wasOpen.current = isOpen; setIsOpen(!isOpen) }}
            >
                {/* left icon */}
                <LeftIcon className="leftIcon" />

                {/* selected item or placeholder */}
                <Text
                    fontSize="18px"
                    fontWeight={500}
                    lineHeight="none"
                >
                    {
                        renderAsDatePicker
                            ? selectedDate === today.format("YYYY-MM-DD")
                                ? "Today"
                                : dayjs(selectedDate).format("dddd, MMMM D, YYYY")
                            : selectedOption
                                ? convertToTitleCase(selectedOption)
                                : defaultValue
                                    ? convertToTitleCase(defaultValue)
                                    : placeHolder
                    }
                </Text>
                {/* right icon */}
                <ChevronIcon
                    as={motion.svg}
                    className="select-btn-chevron"
                    style={{
                        width: "10.62",
                        height: "18",
                        viewBox: "0 0 10.62 18",
                        filter: "drop-shadow(0px 4px 4px #33333340)",
                        transform: "rotateZ(-90deg)"
                    }}
                />
            </HStack>
            {/* select options stack */}
            {renderAsDatePicker
                ? <AnimatePresence>
                    {isOpen && <DateSelector
                        key="selectDateSelector"
                        handleDateSelection={handleDateSelection}
                        selectedDate={selectedDate}
                        nextAvailableDate={nextAvailableDate}
                    />}
                </AnimatePresence>
                : <AnimatePresence>
                    {isOpen && <OptionsStack
                        key="selectOptionsStack"
                        options={options}
                        selectedOption={selectedOption}
                        handleOptionSelection={handleOptionSelection}
                    />}
                </AnimatePresence>
            }
        </VStack >
    )
}

export default SelectInput;
import { VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Calendar, Application } from 'react-rainbow-components';


const brandTheme = {
    rainbow: {
        palette: {
            brand: '#495E57',
            mainBackground: '#EDEFEE',
        }
    }
}


const DateSelector = ({ selectedDate, handleDateSelection, nextAvailableDate, ...props }) => {

    const dayjs = require("dayjs");

    const calenderStack = {
        hidden: {
            opacity: 0,
            scaleY: 0,
            transition: {
                ease: "easeIn",
                duration: 1.74 / 4
            }
        },
        visible: {
            opacity: 1,
            scaleY: 1,
            transition: {
                ease: "easeOut",
                duration: 1.74 / 4
            }
        }
    }

    return (
        <VStack
            as={motion.div}
            bg="brand.secondary.brightGray"
            w="full"
            borderRadius="16px"
            borderColor="brand.primary.green"
            border="1px"
            px={2}
            py={4}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={calenderStack}
            transformOrigin="center top"
            {...props}
        >
            <Application
                theme={brandTheme}
                style={{
                    background: "#EDEFEE",
                }}
            >
                <Calendar
                    value={dayjs(selectedDate).toDate()}
                    onChange={handleDateSelection}
                    minDate={nextAvailableDate ? dayjs(nextAvailableDate).toDate() : dayjs().toDate()}
                    maxDate={dayjs().add(1, 'month').toDate()}
                />
            </Application>
        </VStack>
    )
}

export default DateSelector;
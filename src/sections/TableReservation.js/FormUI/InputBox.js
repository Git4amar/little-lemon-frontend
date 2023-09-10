import { Input, VStack, Text } from "@chakra-ui/react";
import { forwardRef } from "react";

const InputBox = forwardRef((props, ref) => {

    return (
        <Input
            color="brand.primary.green"
            size="lg"
            borderRadius="16px"
            focusBorderColor="brand.primary.green"
            variant="outline"
            border="1px"
            ref={ref}
            {...props}
        />
    );
})

export default InputBox;
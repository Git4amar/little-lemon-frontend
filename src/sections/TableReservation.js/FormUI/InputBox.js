import { Input } from "@chakra-ui/react";
import { forwardRef } from "react";

const InputBox = forwardRef((props, ref) => {

    const { type = "text", ...otherProps } = props;

    return (
        <Input
            color="brand.primary.green"
            size="lg"
            type={type}
            borderRadius="16px"
            focusBorderColor="brand.primary.green"
            variant="outline"
            border="1px"
            ref={ref}
            {...otherProps}
        />
    );
})

export default InputBox;
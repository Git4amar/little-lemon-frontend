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
            _placeholder={{
                color: "inherit",
                opacity: 0.5
            }}
            variant="outline"
            ref={ref}
            {...otherProps}
        />
    );
})

export default InputBox;
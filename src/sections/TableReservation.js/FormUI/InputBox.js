import { Input } from "@chakra-ui/react";
import { forwardRef } from "react";

const InputBox = forwardRef((props, ref) => {

    const { type = "text", placeholder = "placeholder", ...otherProps } = props;

    return (
        <Input
            color="brand.primary.green"
            size="lg"
            type={type}
            placeholder={placeholder}
            borderRadius="16px"
            focusBorderColor="brand.primary.green"
            _placeholder={{
                color: "inherit",
                opacity: 0.8
            }}
            variant="outline"
            ref={ref}
            {...otherProps}
        />
    );
})

export default InputBox;
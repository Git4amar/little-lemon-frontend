import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const outline = defineStyle({
    _hover: {
        borderColor: "brand.primary.yellow"
    },
    bg: "brand.secondary.brightGray",
})

export const textareaTheme = defineStyleConfig({
    variants: { outline },
})
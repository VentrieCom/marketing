import { defineStyleConfig } from "@chakra-ui/react";

const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontFamily: "heading",
    borderRadius: "xl",
  },
  variants: {
    overridable: {},
    solid: {
      background: "blue.300",
      color: "secondary.900",
      height: 12,
      _hover: {
        color: "secondary.900",
        background: "blue.200",
      },
    },
    light: {
      background: "secondary.900",
      fontFamily: "heading",
      color: "secondary.100",
      height: 12,
      _hover: {
        background: "secondary.300",
        color: "secondary.900",
      },
    },
    outline: {
      fontFamily: "heading",
      borderWidth: 2,
      borderColor: "blue.300",
      color: "blue.300",
      height: 12,
      _hover: {
        background: "blue.300",
        color: "secondary.900",
      },
    },
    outlineLight: {
      fontFamily: "heading",
      borderWidth: 2,
      borderColor: "secondary.900",
      color: "secondary.900",
      height: 12,
      _hover: {
        borderColor: "secondary.900",
        color: "secondary.100",
        background: "secondary.900",
      },
    },
    base: {
      background: "secondary.500",
      color: "secondary.200",
      borderRadius: "xl",
      height: 12,
      _hover: {
        background: "secondary.500",
        color: "secondary.50",
      },
    },
    ghost: {
      fontFamily: "heading",
    },
    link: {
      fontFamily: "heading",
    },
  },
  defaultProps: {
    colorScheme: "secondary",
  },
});

export default Button;

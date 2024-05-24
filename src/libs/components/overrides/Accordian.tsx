import { defineStyleConfig } from "@chakra-ui/react";

const Accordion = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    container: {
      bg: "secondary.900",
    //   color: "secondary.100",
      padding: 0,
      overflow: "hidden",
    },

    item: {
      bg: "secondary.900",
      px: 6,
      py: 3,
      _hover: {
        bg: "secondary.100",
        color: "secondary.900",
      },
      _focus: {
        bg: "secondary.100",
        color: "secondary.900",
      },
      _dark: {
        bg: "secondary.700",
        _hover: {
          color: "secondary.100",
          bg: "secondary.600",
        },
        _focus: {
          color: "secondary.100",
          bg: "secondary.600",
        },
      },
    },
  },
});

export default Accordion;

import { extendTheme } from "@chakra-ui/react";
import * as Controls from "./overrides";

export const darkColors = {
  primary: {
    50: "#EDF4FA",
    100: "#DFECF2",
    200: "#D0E1E9",
    300: "#BBD1DC",
    900: "#3F4048",
  },
  whiteAlpha: {
    100: "#5e6264",
  },

  gray: {
    100: "#8e9295",
  },
  blue: {
    200: "#4dff98",
    300: "#38db7d",
    301: "#38db7d1c",
    400: "#249353",
    500: "#000000",
    600: "#4CACE2",
  },
  red: {
    300: "#FC8181",
    900: "#ff3974",
    901: "#ff39741c",
  },
  green: {
    900: "#6ed7c7",
  },
  status: {
    active: "#c7ec50",
    danger: "#ff3974",
    warning: "#f3a74f",
    info: "#4baae3",
  },
  secondary: {
    50: "#ffffff",
    100: "#707e80",
    200: "#6f7d7f",
    300: "#4d6170",
    400: "#2c3b46",
    500: "#283943",
    600: "#202f36",
    700: "#1a262e",
    800: "#131e22",
    900: "#0f161b",
  },
};

export const BaseTheme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  colors: darkColors,
  textStyles: {
    widerSubHeading: {
      // you can also use responsive styles
      fontSize: "xs",
      letterSpacing: "0.2em",
      textTransform: "uppercase",
    },
  },
  semanticTokens: {
    colors: {
      "chakra-body-text": "secondary.50",
      "chakra-body-bg": "secondary.800",
      "chakra-border-color": "secondary.400",
      "chakra-placeholder-color": "secondary.200",
    },
  },
  fonts: {
    body: "'Poppins', sans-serif",
    heading: "'Poppins', sans-serif",
    mono: "monospace",
  },
  components: {
    ...Controls,
    Text: {
      sizes: {
        h1: {
          fontSize: "40px",
          fontWeight: "bold",
        },
        h2: {
          fontSize: "32px",
          fontWeight: "bold",
        },
        h4: {
          fontSize: "24px",
          fontWeight: "bold",
        },
        h5: {
          fontSize: "20px",
          fontWeight: "bold",
        },
        h6: {
          fontSize: "16px",
          fontWeight: "bold",
        },
      },
    },
  },
});

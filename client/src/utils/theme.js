import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#d2fded", /* mint */
    200: "#1c5858", /* forest */
    300: "#e4ccf7", /* pale lavender */
    400: "#c59ae2", /* dark lavender  */
    500: "#024C4F", /* Dark Teal Green */
    600: "#E95F2E", /* Bright Burnt Orange */
    700: "#5af29b", /* Bright Mint */
    800: "#3b072e", /* Dark Cherry */
    900: "#a7ff3f", /* Radioactive Green */
  },
};

const customTheme = extendTheme({ colors });

export default customTheme;
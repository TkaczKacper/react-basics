import { extendTheme } from "@chakra-ui/react";

const theme_ = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  styles: {
    body: {
      margin: 0,
      "font-family":
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale",
    },

    code: {
      "font-family":
        "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
    },
  },
};

const theme = extendTheme(theme_)

export default theme;
import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    black: {
      500: "rgb(120, 113, 108)",
      900: "rgb(28, 25, 23)",
    },
    blue: {
      500: "rgb(59, 130, 246)",
      800: "#0606AB",
      900: "rgb(30, 58, 138)",
    },
    gray: {
      200: "rgb(241, 241, 241)",
      300: "#E4E4E4"
    },
    green: {
      300: "#00FF47",
      400: "#7CFF3F",
      500: "rgb(132, 204, 22)",
      800: "#00C537",
      900: "rgb(54, 83, 20)",
    },
    muted: {
      800: "#262626",
      900: "#171717",
    },
    purple: {
      500: "rgb(168, 85, 247)",
      900: "rgb(88, 28, 135)",
    },
    yellow: {
      500: "rgb(234, 179, 8)",
      900: "rgb(113, 63, 18)",
    },
    red: {
      400: "#FF4141",
      500: "rgb(239, 68, 68)",
      900: "rgb(127, 29, 29)",
    },
    slate: {
      900: "rgb(15, 23, 42)",
    }
  },
  fonts: {
    title: "Inter_700Bold",
    body: "Inter_400Regular",
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  },
});
const darkThemeOption = {
  palette: {
    mode: "dark",
    primary: {
      main: "#ff4d4d",
      dark: "#ff4d4d",
      light: "#f9cb28",
    },
    secondary: {
      main: "#7928ca",
      dark: "#ff0080",
    },
    info: {
      main: "#B8C7FF",
      dark: "#1E1938",
      light: "#7B78ED",
    },
    warning: {
      main: "#FEC201",
      dark: "#FF7A00",
    },
    success: {
      main: "#B3DCEA",
      dark: "#0FD960",
    },
    common: {
      white: "#FFFFFF",
      black: "#000000",
    },
    text: {
      primary: "#ffffff",
    },
    background: {
      default: "#11113f",
      paper: "#1a1a54",
    },
    custom: {
      navbar: "#0a004f",
      footer: "#0a004f",
    },
  },

  typography: {
    fontFamily: [
      "Alliance1",
      "Alliance1HeaderFallback",
      "-apple-system",
      "BlinkMacSystemFont",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Helvetica",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
    ].join(","),
    button: {
      textTransform: "capitalize",
    },
    fontSize: 16,
  },
  components: {
    MuiPopover: {
      styleOverrides: {
        paper: {
          borderRadius: "12px",
          backgroundColor: "#111",
          backgroundImage: "none",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#111",
          backgroundImage: "none",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        container: {
          backdropFilter: "blur(3px)",
        },
        paper: {
          backgroundColor: "#111",
          backgroundImage: "none",
        },
      },
    },
  },
};

export default darkThemeOption;

import { createTheme } from "@mui/material";

export const FplTheme = createTheme({
  // palette: {
  //   primary: {
  //     // main: "#FFE5B2",
  //   },
  // },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
  },
});

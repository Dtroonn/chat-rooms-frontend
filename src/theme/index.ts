import { createTheme } from "@material-ui/core";
import { palette } from "./palette";

export const theme = createTheme({
    palette,
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 20,
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: "none",
                    "&:hover": {
                        textDecoration: "underline",
                    },
                },
            },
        },
    },
});

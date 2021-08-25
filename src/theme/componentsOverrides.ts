import { PaletteOptions, ThemeOptions } from "@material-ui/core";

export const componentsOverrides = (palette: PaletteOptions): ThemeOptions["components"] => ({
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
});

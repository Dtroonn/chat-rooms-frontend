import React from "react";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { ProfileMenu } from "./ProfileMenu";
import { Typography } from "@material-ui/core";

export const Header = () => {
    return (
        <AppBar sx={{ backgroundColor: "secondary.light" }}>
            <Container maxWidth="lg">
                <Toolbar>
                    <div style={{ marginLeft: "auto" }}>
                        {true ? (
                            ProfileMenu
                        ) : (
                            <Box
                                component={Link}
                                to="/login"
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    textDecoration: "none",
                                    color: "#000",
                                    "& p, svg ": {
                                        transition: "all 0.4s ease-in-out 0s",
                                    },
                                    "&:hover": {
                                        "& svg ": {
                                            color: "secondary.dark",
                                        },
                                        "& p": {
                                            color: "secondary.dark",
                                        },
                                    },
                                }}>
                                <AccountCircleIcon sx={{ fontSize: 50, mr: 1 }} />
                                <Typography sx={{ fontWeight: 500 }}>Войти</Typography>
                            </Box>
                        )}

                        <ProfileMenu />
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

import React from "react";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Container from "@material-ui/core/Container";
import { ProfileMenu } from "./ProfileMenu";
import { Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const Header = () => {
    return (
        <AppBar>
            <Container maxWidth="xl">
                <Toolbar>
                    <div style={{ marginLeft: "auto" }}>
                        {true ? (
                            <ProfileMenu />
                        ) : (
                            <LoginLink to="/login">
                                <AccountCircleIcon sx={{ fontSize: 55, mr: 1 }} />
                                <Typography sx={{ fontWeight: 500 }}>Войти</Typography>
                            </LoginLink>
                        )}
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

const LoginLink = styled(Link)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "#000",
    "& p, svg ": {
        transition: "all 0.4s ease-in-out 0s",
        color: theme.palette.secondary.main,
    },
    "&:hover": {
        "& svg, p ": {
            color: theme.palette.secondary.light,
        },
    },
}));

import React from "react";
import { Route } from "react-router-dom";

import Paper from "@material-ui/core/Paper";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import { LoginForm } from "../components/LoginForm";
import { RegisterForm } from "../components/RegisterForm";
import Container from "@material-ui/core/Container";

export const LoginAndRegisterPage: React.FC = () => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "calc(100vh - 130px)",
            }}>
            <Container maxWidth="sm">
                <Paper
                    elevation={3}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        px: 5,
                        pt: 2,
                        pb: 4,
                    }}>
                    <Avatar sx={{ backgroundColor: "primary.main", margin: 1 }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        <Route exact path="/login">
                            Авторизация
                        </Route>
                        <Route exact path="/register">
                            Регистрация
                        </Route>
                    </Typography>
                    <Route exact path="/login" component={LoginForm} />
                    <Route exact path="/register" component={RegisterForm} />
                </Paper>
            </Container>
        </div>
    );
};

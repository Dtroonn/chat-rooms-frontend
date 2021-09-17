import React from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { UsersList } from "./UsersList";
import Divider from "@material-ui/core/Divider";
import { MessagesBlock } from "./MessagesBlock";
import Typography from "@material-ui/core/Typography";
import { styled } from "@material-ui/core/styles";
import { AddMessageForm } from "./AddMessageForm";

export const Chat: React.FC = () => {
    return (
        <Paper
            elevation={8}
            sx={{
                height: "calc(100vh - 124px)",
                overflow: "hidden",
            }}>
            <Grid container sx={{ height: "100%", flexWrap: "nowrap" }}>
                <Grid item container sx={{ flex: "0 0 320px", height: "100%" }}>
                    <UsersList />
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item sx={{ flexGrow: 1, height: "100%", flexDirection: "column" }} container>
                    <StyledChatHeader>
                        <Typography variant="subtitle2">Название комнаты</Typography>
                        <Typography color="gray" variant="body2">
                            100 человек, 2 онлайн
                        </Typography>
                    </StyledChatHeader>
                    <Divider />
                    <MessagesBlock />
                    <AddMessageForm />
                </Grid>
            </Grid>
        </Paper>
    );
};

const StyledChatHeader = styled("div")(({ theme }) => ({
    padding: theme.spacing(1.5),
}));

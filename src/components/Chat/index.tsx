import React from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { UsersList } from "./UsersList";
import Divider from "@material-ui/core/Divider";
import { Messages } from "./Messages";
import Typography from "@material-ui/core/Typography";
import { styled } from "@material-ui/core/styles";

export const Chat: React.FC = () => {
    return (
        <Paper
            elevation={8}
            sx={{
                overflow: "hidden",
                mb: 3,
                height: "calc(100vh - 124px)",
            }}>
            <Grid container sx={{ height: "100%" }}>
                <Grid item container xs={4}>
                    <UsersList />
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item flexGrow={1}>
                    <StyledChatHeader>
                        <Typography variant="subtitle2">Название комнаты</Typography>
                        <Typography color="gray" variant="body2">
                            100 человек, 2 онлайн
                        </Typography>
                    </StyledChatHeader>
                    <Divider />
                    <Messages />
                </Grid>
            </Grid>
        </Paper>
    );
};

const StyledChatHeader = styled("div")(({ theme }) => ({
    padding: theme.spacing(1.5),
}));

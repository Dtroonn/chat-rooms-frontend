import React from "react";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { UsersList } from "./UsersList";
import Divider from "@material-ui/core/Divider";

export const Chat: React.FC = () => {
    return (
        <Paper elevation={8} sx={{ overflow: "hidden" }}>
            <Grid container>
                <Grid item container xs={4}>
                    <UsersList />
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item flexGrow={1}>
                    <div>chat</div>
                </Grid>
            </Grid>
        </Paper>
    );
};

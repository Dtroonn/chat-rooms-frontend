import React from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { RoomCard } from "../components/RoomCard";
import { Typography } from "@material-ui/core";

export const HomePage: React.FC = () => {
    return (
        <Container maxWidth="lg">
            <div style={{ textAlign: "center", marginBottom: 24 }}>
                <Typography sx={{ fontWeight: 700, mb: 1 }} variant="h4">
                    Бесплатные онлайн чаты
                </Typography>
                <Typography color="gray" variant="subtitle1">
                    Это сайт бесплатных онлайн-чатов. Где вы можете встретить новых друзей и
                    пообщаться на разные темы.
                </Typography>
            </div>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <RoomCard></RoomCard>
                </Grid>
                <Grid item xs={4}>
                    <RoomCard></RoomCard>
                </Grid>
                <Grid item xs={4}>
                    <RoomCard></RoomCard>
                </Grid>
            </Grid>
        </Container>
    );
};

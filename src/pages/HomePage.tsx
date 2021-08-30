import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { RoomCard } from '../components/RoomCard';
import { Typography } from '@material-ui/core';

export const HomePage: React.FC = () => {
    return (
        <Container maxWidth="lg">
            <Typography sx={{ fontWeight: 700, textAlign: 'center', mb: 3 }} variant="h4">
                Бесплатные онлайн чаты
            </Typography>
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

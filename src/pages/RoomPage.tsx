import React from "react";
import { Chat } from "../components/Chat";
import Container from "@material-ui/core/Container";

export const RoomPage: React.FC = () => {
    return (
        <Container maxWidth="xl">
            <Chat />
        </Container>
    );
};

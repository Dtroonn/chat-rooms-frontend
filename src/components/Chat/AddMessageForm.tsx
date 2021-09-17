import React from "react";

import AttachFileIcon from "@material-ui/icons/AttachFile";
import Grid from "@material-ui/core/Grid";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import TextField from "@material-ui/core/TextField";
import { styled } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";

import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";

export const AddMessageForm: React.FC = () => {
    return (
        <div style={{ padding: "5px 10px" }}>
            <Grid container sx={{ minHeight: 50, backgroundColor: "#fff" }} spacing={1}>
                <Grid item sx={{ alignSelf: "flex-end" }}>
                    <AttachFileIcon
                        sx={{
                            transform: "rotate(-135deg)",
                            cursor: "pointer",
                            color: "gray",
                            fontSize: 30,
                        }}
                        fontSize="large"
                    />
                </Grid>
                <Grid item flexGrow={1}>
                    <StyledTextField
                        sx={{ width: "100%" }}
                        multiline
                        variant="standard"
                        maxRows={5}
                        placeholder="Напишите сообщение..."
                    />
                </Grid>
                <Grid item sx={{ alignSelf: "flex-end" }}>
                    <InsertEmoticonIcon
                        color="primary"
                        fontSize="large"
                        sx={{
                            cursor: "pointer",
                            fontSize: 30,
                            mr: 1,
                        }}
                    />
                </Grid>
                <Grid item sx={{ alignSelf: "flex-end" }}>
                    <SendIcon
                        color="primary"
                        sx={{
                            cursor: "pointer",
                            fontSize: 30,
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

const StyledTextField = styled(TextField)({
    height: "100%",
    display: "flex",
    "& .MuiInput-root": {
        height: "100%",
        "&::after, &::before": {
            border: "0 !important",
        },
    },
});

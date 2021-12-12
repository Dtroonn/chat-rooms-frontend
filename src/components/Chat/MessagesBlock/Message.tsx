import React from "react";

import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { styled } from "@material-ui/core/styles";

export const Message: React.FC<any> = React.memo(
    ({ fullname, text, avatar, showAvatar, showArrow }) => {
        const mountRef = React.useRef(false);
        React.useEffect(() => {
            console.log("DID MOUNT", fullname);
            return () => console.log("will UNMOUNT:", fullname);
        }, []);

        React.useEffect(() => {
            if (!mountRef.current) {
                mountRef.current = true;
                return;
            }
            console.log("did update", fullname);
        }, [fullname]);

        return (
            <StyledMessage>
                {/* {false && (
                <Avatar
                    sx={{ width: 35, height: 35, mb: -0.5, position: "sticky", bottom: 0 }}
                    src={avatar}
                />
            )} */}
                <Paper
                    elevation={3}
                    sx={{
                        padding: "8px 16px",
                        borderBottomLeftRadius: showArrow ? 0 : "",
                    }}>
                    <div style={{ marginRight: 45 }}>
                        <Typography variant="subtitle2">{fullname}</Typography>
                        <Typography sx={{ lineHeight: 1.4 }} component="p" variant="subtitle1">
                            {text}
                        </Typography>
                    </div>
                    <Typography
                        color="gray"
                        sx={{ textAlign: "end", lineHeight: 0, mb: 1 }}
                        variant="body2">
                        14:30
                    </Typography>
                </Paper>
            </StyledMessage>
        );
    },
);

const StyledMessage = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "flex-end",
    maxWidth: 500,
}));

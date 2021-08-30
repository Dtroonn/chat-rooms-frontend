import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Theme } from "@material-ui/core/styles";

export const UsersList: React.FC = () => {
    return (
        <List sx={{ p: 0 }}>
            <ListItem
                alignItems="flex-start"
                button
                sx={{
                    backgroundColor: (theme: Theme) => `${theme.palette.primary.main} !important`,
                    "& p": {
                        color: "#fff",
                    },
                    color: "#fff",
                }}>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <Typography sx={{ mb: 0.5 }} component="div" variant="subtitle2">
                            Дмитрий Плотников
                        </Typography>
                    }
                    secondary={" — I'll be in your neighborhood doing errands this…"}
                />
            </ListItem>
            <ListItem alignItems="flex-start" button>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <Typography component="div" variant="subtitle2">
                            Дмитрий Плотников
                        </Typography>
                    }
                    secondary={" — I'll be in your neighborhood doing errands this…"}
                />
            </ListItem>
            <ListItem alignItems="flex-start" button>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <Typography component="div" variant="subtitle2">
                            Дмитрий Плотников
                        </Typography>
                    }
                    secondary={" — I'll be in your neighborhood doing errands this…"}
                />
            </ListItem>
        </List>
    );
};

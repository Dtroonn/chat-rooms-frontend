import React from "react";

import "react-perfect-scrollbar/dist/css/styles.css";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import PerfectScrollbar from "react-perfect-scrollbar";

export const UsersList: React.FC = () => {
    return (
        <List sx={{ p: 0, height: "calc(100vh - 124px)" }}>
            <PerfectScrollbar>
                {Array(200)
                    .fill(0)
                    .map((i, index) => (
                        <ListItem key={index} alignItems="flex-start" button>
                            <ListItemAvatar>
                                <Avatar alt="Дмитрий Плотников" src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary={
                                    <Typography
                                        sx={{ mb: 0.5 }}
                                        component="div"
                                        variant="subtitle2">
                                        Дмитрий Плотников
                                    </Typography>
                                }
                                secondary={" — I'll be in your neighborhood doing errands this…"}
                            />
                        </ListItem>
                    ))}
            </PerfectScrollbar>
        </List>
    );
};

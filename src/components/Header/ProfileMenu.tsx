import React from "react";

import IconButton from "@material-ui/core/IconButton";
import ExitIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import Avatar from "@material-ui/core/Avatar";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import ListSubheader from "@material-ui/core/ListSubheader";
import Divider from "@material-ui/core/Divider";

export const ProfileMenu = () => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return;
        }

        setOpen(false);
    };

    return (
        <div>
            <IconButton ref={anchorRef} onClick={handleToggle} size="large">
                <Avatar
                    sx={{ width: 50, height: 50 }}
                    src="https://s1.cdn.teleprogramma.pro/wp-content/uploads/2020/12/08de3bbea2bf9268efcb25b1d948fbc7.jpg"
                />
            </IconButton>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom"
                transition
                disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin: "left right",
                        }}>
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    subheader={
                                        <ListSubheader
                                            disableGutters
                                            sx={{ mb: 1 }}
                                            component="div">
                                            <Typography sx={{ mb: 1, fontWeight: 500 }}>
                                                Вы авторизованы как{" "}
                                                <Typography
                                                    fontWeight="inherit"
                                                    component="span"
                                                    color="black">
                                                    Dtroonn
                                                </Typography>
                                            </Typography>
                                            <Divider />
                                        </ListSubheader>
                                    }
                                    sx={{ minWidth: 240 }}
                                    autoFocusItem={open}>
                                    <MenuItem sx={{ mb: 1 }} onClick={handleClose}>
                                        <ListItemIcon>
                                            <PersonIcon />
                                        </ListItemIcon>
                                        <Typography color="black">Профиль</Typography>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                            <ExitIcon />
                                        </ListItemIcon>
                                        <Typography color="black">Выйти</Typography>
                                    </MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
};

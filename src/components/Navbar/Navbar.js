import React, {useContext} from 'react';
import { AppBar, Grid, Toolbar, Button, Typography, Menu, MenuItem, Avatar } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import { LOGIN_ROUTE } from '../../utils/consts';

import { signOut } from "firebase/auth";
import {useAuthState} from 'react-firebase-hooks/auth'
import { Context } from '../../index';

const Navbar = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    const logOut = () => {
        signOut(auth)
            .then(() => navigate(LOGIN_ROUTE))
            .catch((e) => console.log(e))
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar color={'primary'} position="static">
            <Toolbar variant="dense">
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ mr: 2, display:'flex' }}
                >
                    CHAT
                </Typography>
                <Grid container alignItems={'center'} justifyContent={'flex-end'}>
                    {user ? 
                        <>
                            <Typography
                                noWrap
                                component="span"
                                sx={{ mr: 2, display: 'flex' }}
                            >
                                {user.displayName}
                            </Typography>
                            <Avatar onClick={handleClick} alt={user.displayName} src={user.photoURL} />
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem>Профиль</MenuItem>
                                <MenuItem 
                                    onClick={() => {
                                        handleClose(); 
                                        logOut();
                                    }}
                                >
                                    Выйти
                                </MenuItem>
                            </Menu>
                        </>
                    :
                        <Button onClick={() => navigate('/login')} variant='outline'>Логин</Button> 
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;

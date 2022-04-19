import React, {useContext} from 'react';
import { AppBar, Grid, Toolbar, Button } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import { LOGIN_ROUTE } from './../utils/consts';

import { signOut } from "firebase/auth";
import {useAuthState} from 'react-firebase-hooks/auth'
import { Context } from './../index';


const Navbar = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    const logOut = () => {
        signOut(auth)
            .then(() => navigate(LOGIN_ROUTE))
            .catch((e) => console.log(e))
    }

    return (
        <AppBar color={'primary'} position="static">
            <Toolbar variant="dense">
                <Grid container justifyContent={'flex-end'}>
                    {user ? 
                        <Button onClick={logOut} variant='outline'>Выйти</Button>
                    :
                        <Button variant='outline'>Логин</Button> 
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;

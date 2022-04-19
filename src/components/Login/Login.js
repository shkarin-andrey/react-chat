import React, {useContext} from 'react';
import { Context } from '../../index'
import { Container, Grid, Button, Box } from '@mui/material';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Login = () => {
    const {auth} = useContext(Context);

    const login = async () => {
        const provider = new GoogleAuthProvider();
        const {user} = await signInWithPopup(auth, provider)
        console.log(user)
    }
    
    return (
        <Container>
            <Grid 
                container 
                style={{height: window.innerHeight - 50}}
                alignItems={'center'}    
                justifyContent={'center'}
            >
                <Grid
                    container 
                    style={{width: 400, background: 'lightgray'}}
                    alignItems={'center'}    
                    direction={'column'}
                >
                    <Box p={5}>
                        <Button variant={'contained'} onClick={login}>Войти с помощью Google</Button>
                    </Box>
                </Grid>

            </Grid>
        </Container>
    );
}

export default Login;

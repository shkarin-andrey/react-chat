import React from 'react';
import { Container, Grid } from '@mui/material';

const Main = () => {
    return (
        <Container>
            <Grid 
                container 
                style={{height: window.innerHeight - 50}}
                alignItems={'center'}    
                justifyContent={'center'}
            >
                <h1>Главная страница</h1>
            </Grid>
        </Container>
    );
}

export default Main;

import React from 'react';
import { Grid, Container } from '@mui/material';
import Spinner from '../../assets/Spinner';

const Loader = () => {
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
                    alignItems={'center'}    
                    direction={'column'}
                >
                    <Spinner/>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Loader;

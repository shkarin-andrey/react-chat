import React from 'react';
import { Snackbar, Alert} from '@mui/material';

const CustomizeSnackbar = ({setOpenResp, openResp}) => {
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenResp({
            open: false,
            success: true
        })
    };

    return (
        <Snackbar open={openResp.open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={openResp.success ? 'success' : 'error'} sx={{ width: '100%' }}>
                {openResp.message}
            </Alert>
        </Snackbar>
    );
}

export default CustomizeSnackbar;

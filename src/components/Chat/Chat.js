import React, {useContext, useState} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import { collection, addDoc, query, orderBy } from "firebase/firestore"; 
import { Container, Grid, TextField, Button} from '@mui/material';
import { Context } from '../../index';
import Loader from '../Loader/Loader';
import CustomizeSnackbar from '../CustomizeSnackbar/CustomizeSnackbar';
import Messages from '../Messages/Messages';

const Chat = () => {
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(
        query(collection(firestore, "messages"), orderBy('createdAt'))
    )

    const [openResp, setOpenResp] = React.useState({
        success: false,
        open: false,
        message: ''
    });

    const sendMessage = async () => {
        try {
            if (value.length < 1) {
                return setOpenResp({
                    open: true,
                    success: false,
                    message: 'Введите сообщение!'
                })
            }

            await addDoc(collection(firestore, "messages"), {
              uid: user.uid,
              displayName: user.displayName,
              photoURL: user.photoURL,
              text: value,
              createdAt: new Date()
            });
            setValue('')
            setOpenResp({
                open: true,
                success: true,
                message: 'Сообщение отправленно!'
            })
        } catch (e) {
            setOpenResp({
                open: true,
                success: false,
                message: 'Произошла какая-то ошибка!'
            })
        }
    }

    if (loading) {
        return <Loader/>
    }

    return (
        <Container>
            <Grid 
                container 
                style={{
                    height: window.innerHeight - 90, 
                    marginTop: 20, 
                    marginBottom: 20}
                }
                justifyContent={'center'}
            >
                <Messages messages={messages} user={user}/>
                <Grid 
                    container
                    direction={'column'}
                    alignItems={'flex-end'}
                    style={{width: '80%'}}
                >
                    <TextField 
                        label="Сообщение"
                        required
                        fullWidth
                        multiline
                        maxRows={5}
                        variant={'outlined'} 
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <Button 
                        style={{marginTop: 10}} 
                        variant={'contained'} 
                        onClick={sendMessage}
                    >
                        Отправить
                    </Button>
                </Grid>
            </Grid>

            {openResp.open && 
                <CustomizeSnackbar openResp={openResp} setOpenResp={setOpenResp}/>
            }
        </Container>
    );
}

export default Chat;

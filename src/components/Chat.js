import React, {useContext, useState} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import { collection, addDoc, query, orderBy } from "firebase/firestore"; 
import { Container, Grid, TextField, Button, Avatar} from '@mui/material';
import { Context } from '../index';
import Loader from './Loader';

const Chat = () => {
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(
        query(collection(firestore, "messages"), orderBy('createdAt'))
    )

    const sendMessage = async () => {
        try {
            const docRef = await addDoc(collection(firestore, "messages"), {
              uid: user.uid,
              displayName: user.displayName,
              photoURL: user.photoURL,
              text: value,
              createdAt: new Date()
            });
            await setValue('')
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    if (loading) {
        return <Loader/>
    }

    return (
        <Container>
            <Grid 
                container 
                style={{height: window.innerHeight - 70, marginTop: 20}}
                justifyContent={'center'}
            >
                <div style={{width: '80%', height: '70vh', border: '1px solid gray', overflowY: 'auto'}}>
                    {messages.map((message, i) => {
                        return (
                            <div key={i} style={{
                                margin: 10,
                                border: user.uid === message.uid ? '2px solid green' : '2px dashed red',
                                marginLeft: user.uid === message.uid ? 'auto' : '10px',
                                width: 'fit-content',
                                padding: 5
                            }}>
                                <Grid container>
                                    <Avatar src={message.photoURL}/>
                                    <div>{message.displayName}</div>
                                </Grid>
                                <div>{message.text}</div>
                            </div>
                        )
                    })}
                </div>
                <Grid 
                    container
                    direction={'column'}
                    alignItems={'flex-end'}
                    style={{width: '80%'}}
                >
                    <TextField 
                        fullWidth
                        maxRows={2}
                        variant={'outlined'} 
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <Button variant={'contained'} onClick={sendMessage}>Отправить</Button>

                </Grid>
            </Grid>
        </Container>
    );
}

export default Chat;

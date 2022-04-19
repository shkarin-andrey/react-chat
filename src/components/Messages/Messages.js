import React, { useRef, useEffect } from 'react';
import {Grid, Avatar} from '@mui/material';
import { Wrapper } from './styled';

const Messages = ({messages, user}) => {
    const messageRef = useRef()
    
    useEffect(() => {
        const wrapper = messageRef.current
        wrapper.scrollTo(0, wrapper.scrollHeight)
    }, [messages.length]);

    return(
        <Wrapper ref={messageRef}>
            {
                messages.map((message, i) => {
                    return (
                        <div 
                            key={i} 
                            className={`message_wrapper ${user.uid === message.uid ? 'message_user' : 'message_guest'}`} 
                        >
                            <Grid container alignItems={'center'}>
                                <Avatar style={{marginRight: 10}} src={message.photoURL}/>
                                <div>{message.displayName}</div>
                            </Grid>
                            <div>{message.text}</div>
                        </div>
                    )
                })
            }
        </Wrapper>
    )
}

export default Messages;

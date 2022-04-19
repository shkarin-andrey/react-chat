import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 80%; 
    height: 70vh; 
    overflow-y: auto;
    box-shadow: 0 0 10px #1976d2;
    border-radius: 10px;
    margin-bottom: 20px;
    
    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background-color: #dbdbdb;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 6px rgb(255 255 255);
        background: #9d9d9d;
        border-radius: 10px;
    }

    .message_wrapper {
        margin: 10px;
        width: fit-content;
        padding: 5px 10px;
        border-radius: 10px;
        color: white;

        &.message_user {
            margin-left: auto;
            background: #2c7600;
        }

        &.message_guest {
            margin-left: 10px;
            background: #00000063;
        }
    }
`
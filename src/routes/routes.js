import { LOGIN_ROUTE, CHAT_ROUTE, DEFAULT_ROUTE } from './../utils/consts';
import Login from '../components/Login/Login';
import Chat from '../components/Chat/Chat';
import Main from '../components/Main/Main';

export const publicRoutes = [
    {
        path: DEFAULT_ROUTE,
        Component: Main
    },
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
]

export const privateRoutes = [
    {
        path: DEFAULT_ROUTE,
        Component: Main
    },
    {
        path: CHAT_ROUTE,
        Component: Chat
    }
]
import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import Navbar from "./components/Navbar/Navbar";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from './index';
import Loader from "./components/Loader/Loader";

const App = () => {
  const {auth} = useContext(Context)
  // eslint-disable-next-line no-unused-vars
  const [user, loading] = useAuthState(auth)

  if (loading) {
    return <Loader/>
  }

  return (
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
  );
}

export default App;

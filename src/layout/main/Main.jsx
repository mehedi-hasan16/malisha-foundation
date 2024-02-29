import React from 'react'
import Footer from '../footer/Footer';
import Header from '../header/Header';
import AppRouter from "./../../router/AppRouter";
const Main = () => {
    return (
        <>
            <Header/>
            <AppRouter />
            <Footer/>
          
        </>
    )
}

export default Main
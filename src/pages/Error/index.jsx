import React from 'react';
import Header from '../../Components/Header';
import ErrorImage from '../../Components/Images/Error-404';
import Footer from '../../Components/Footer'; 

function Error404() {
    return (
        <div id='error'>
            <Header/>
                <div className='error-message'>
                    <ErrorImage/>
                    <h1>Oups! La page que vous demandez n'existe pas.</h1>
                </div>
                <br/>
                <a href='/'>Retourner sur la page d’accueil</a>
            <Footer/>
        </div>
    );
};

export default Error404;
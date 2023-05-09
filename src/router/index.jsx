import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home'
import Fiche from '../pages/Fiche'
import About from '../pages/About'
import Error404 from '../pages/Error'

const Router = createBrowserRouter(
    [
        {   path: '/',
            element: <Home/>,
            errorElement: <Error404/>
        },
        {   path: '/fiche/:id',
            element: <Fiche/>,
            errorElement: <Error404/>
        },
        {   path: '/about',
            element: <About/>,
            errorElement: <Error404/>
        },
        {   path: '*',
            element: <Error404/>
        }
    ]
)

export default Router;
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home'
import Fiche from '../pages/Fiche'
import About from '../pages/About'
import Error404 from '../Components/Error'

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
        {   path: '/error-404',
            element: <Error404/>
        }
    ]
)

export default Router;
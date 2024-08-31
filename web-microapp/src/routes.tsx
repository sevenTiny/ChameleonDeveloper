import { Navigate, RouteObject } from 'react-router-dom';
import React from 'react';
import Home from "./Pages/Home"
import StepPage from "./Pages/StepPage"
import TypographyPage from "./Pages/TypographyPage"
import CarouselPage from "./Pages/CarouselPage"
import CascaderPage from "./Pages/CascaderPage"
import TimelinePage from './Pages/TimelinePage';
import CountdownPage from './Pages/CountdownPage';

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/steppage',
        element: <StepPage />,
    },
    {
        path: '/typographypage',
        element: <TypographyPage />,
    },
    {
        path: '/carouselpage',
        element: <CarouselPage />,
    },
    {
        path: '/cascaderpage',
        element: <CascaderPage />,
    },
    {
        path: '/timelinepage',
        element: <TimelinePage />,
    },
    {
        path: '/countdownpage',
        element: <CountdownPage />,
    },
    // 其他路由...  
    {
        path: '*',
        element: <Navigate to="/" replace />, // 如果没有匹配的路由，重定向到主页  
    },
];

export default routes;
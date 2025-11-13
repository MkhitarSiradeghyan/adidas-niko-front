import React from 'react'
import s from './Layout.module.css';
import Banner from '../../components/Banner/Banner';
import { Outlet } from 'react-router';


const Layout = () => {
    return(
        <>
        {/* <Banner/> */}
        <Outlet />
        </>
    )
}


export default Layout;
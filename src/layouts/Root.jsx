import React, { useEffect, useLayoutEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import Provider from './Provider'

const Root = () => {
    const location = useLocation()

    function routeChangeListener() {
        // Load a new script
        // var script = document.createElement('script');
        // script.src = "/assets/js/theme.min.js";
        // document.body.appendChild(script);
        const themeScript = document.getElementById('theme-script')
        if (themeScript) {
            // Remove themeScript tag
            themeScript.remove()
        }
        // Add themeScript tag
        const script = document.createElement('script')
        script.id = 'theme-script'
        script.src = '/assets/js/theme.min.js'
        document.body.appendChild(script)

    };

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        routeChangeListener()
    }, [location.pathname]);

    useEffect(() => {
        routeChangeListener()
    }, [location])
    return (
        <>
            <Provider>
                <main className="page-wrapper">
                    <Header />
                    <Outlet />
                    <Footer />
                </main>
            </Provider>
        </>
    )
}

export default Root
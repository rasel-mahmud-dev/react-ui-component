import React, {useEffect, useRef} from 'react';
import {Outlet} from "react-router-dom";
import Navigation from "../components/Navigation/Navigation.tsx";
import MainSidebar from "@app/layout/MainSidebar.tsx";

const Main = () => {
    const navigationRef = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        if(navigationRef.current){
            const h = (navigationRef.current as HTMLDivElement).offsetHeight
            document.documentElement.style
                .setProperty('--header-height', h + "px");
        }
    }, [])


    return (
        <div>
            <Navigation ref={navigationRef} />
            <div className="flex ">
                <MainSidebar />

                <div className="main-content">
                    <Outlet />
                </div>

            </div>
        </div>
    );
};

export default Main;
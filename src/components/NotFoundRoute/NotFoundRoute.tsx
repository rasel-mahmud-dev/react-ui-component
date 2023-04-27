import React from 'react';
import Button from "@app/components/MBD_Button/Button.tsx";
import {useNavigate} from "react-router-dom";

const NotFoundRoute = () => {

    const navigate = useNavigate()

    function handleGoBack(){
        navigate(-1)
    }

    return (
        <div>
            <div className="max-w-sm mx-auto p-4 my-20">
                <h2 className="text-4xl">Page not found</h2>
                <Button onClick={handleGoBack} className="mt-4" color="theme">Go Back</Button>
            </div>
        </div>
    );
};

export default NotFoundRoute;
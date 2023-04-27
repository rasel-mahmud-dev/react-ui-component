import React, {useEffect, useState} from "react";

import {createPortal} from "react-dom";


interface Props {
    isOpen?: boolean
    className?: string
    backdropRoot?: string
    children?: React.ReactNode
    onClose?: ()=>void
}

const Backdrop = (props: Props) => {
    const {isOpen, className = "", backdropRoot, onClose} = props;


    const handleBackdrop = (e: any) => {
        if (e.target.classList.contains("backdrop")) {
            onClose && onClose();
        }
    };

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        return () => setMounted(false)
    }, [])

    return mounted
        ? createPortal(<div
                onClick={handleBackdrop}
                className={`backdrop ${className} ${isOpen ? "backdrop--open" : "backdrop--close"}`}
            >{props.children}</div>,
            document.querySelector(backdropRoot ? `#${backdropRoot}` : "#backdrop_root") as  HTMLDivElement)
        : null

};

export default Backdrop;
import React, {FC} from 'react';
import Backdrop from "@app/components/Backdrop/Backdrop.tsx";

interface Props  {
    isOpen: boolean
    className?: string
    isWithBackdrop?: boolean
    children: React.ReactNode | React.ReactNode[] | number | string
    backdropClass?: string
    onClose?: ()=>void
}

const Popup : FC<Props> = ({isOpen, className, isWithBackdrop, children, backdropClass="", onClose, ...attr}) => {
    return (
        <div>
            {isWithBackdrop && isOpen && <Backdrop className={backdropClass} onClose={onClose}  />}
            <div className={`popup absolute rounded-md p-4 bg-white ${!isOpen ? "popup--close" : "popup--open"} ${className}`} {...attr}>
                {children}
            </div>
        </div>
    );
};

export default Popup;
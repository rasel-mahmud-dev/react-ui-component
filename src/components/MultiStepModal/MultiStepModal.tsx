import React, {FC, HTMLAttributes} from 'react';

import "./multistep-modal.scss"

interface Props extends HTMLAttributes<HTMLDivElement>{
    className?: string
    isOpen: boolean
}
const MultiStepModal: FC<Props> = (props) => {

    const {className, isOpen, children} = props

    return (
        <div className={`multi-step-modal overflow-x-hidden ${className} ${ isOpen ? "open_modal" : "close_modal"}`}>
            {children}
        </div>
    );
};

export default MultiStepModal;
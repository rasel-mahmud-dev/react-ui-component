import React, {ReactHTMLElement} from "react";

import "./button.scss"

interface ButtonProps extends ReactHTMLElement<HTMLButtonElement>{
    label?: string
    children: React.ReactNode | string | number | null
    className?: string
}

const Button  = (props: ButtonProps)  => {
    const {className} = props

    return (
        <div className={`btn ${className}`}>
            {props.children}

        </div>
    );
};

export default Button;
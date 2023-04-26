import {FC, HTMLAttributes} from "react";

import "./button.scss"

interface ButtonProps extends HTMLAttributes<HTMLButtonElement>{
    label?: string
    outline?: string
}

const Button: FC<ButtonProps>  = (props)  => {
    const {className, outline} = props

    let outlineClass = ""
    if(outline){
        outlineClass += `border border-${outline}`
    }

    return (
        <div className={`btn ${className} ${outlineClass} `}>
            {props.children}
        </div>
    );
};

export default Button;
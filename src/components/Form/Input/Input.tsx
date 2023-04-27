import React, {FC, useEffect, useRef} from 'react';

import './input.scss'

interface Props {
    label?: string
    type: "text" | "password" | "email" | "date"
    className?: string
    error?: string | undefined
    [rest: string]: any
}

const Input : FC<Props> = ({label, type = "text", className = "", error, ...attr}) => {

    const dateRef = useRef<HTMLInputElement>(null)

    // useEffect(() => {
    //
    //     if (type === "date" && attr.defaultValue && dateRef.current) {
    //         // bad way for react-hooks-form
    //         const date = dateRef.current.querySelector("input[type=date]") as HTMLInputElement
    //         if(date){
    //             date.value = attr.defaultValue
    //         }
    //     }
    // }, [type, dateRef, attr.defaultValue])

    return (
        <div className={`input-group ${error ? 'input-error' : ''}`} ref={type === "date" ? dateRef : undefined }>
            <label htmlFor="">{label}</label>
            <input
                className={`input ${className}`}
                type={type}
                {...attr}
            />
            {error && <div className="text-red-400 text-xs font-medium mt-1">{error}</div>}
        </div>
    );
};

export default Input;
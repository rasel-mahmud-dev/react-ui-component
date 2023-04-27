import React, {FC, ForwardedRef, HTMLAttributes, useEffect, useRef, useState} from 'react';
import "./input.scss"


interface InputProps extends HTMLAttributes<HTMLInputElement>{
    withBg?: boolean
    inputBg?: string
    label?: string
    showSuggestion?: any
    selectedDateList?: any[]
    dataList?: any[]
    type: "text" | "email"| "password"
    onClickItem?: (args: unknown)=>void
}

const Input: FC<InputProps> = React.forwardRef((props, ref: ForwardedRef<HTMLInputElement>) => {

const {className = "", withBg = false, inputBg = "", type = "text", dataList, selectedDateList, onClickItem, showSuggestion, label, ...attr} = props

    const [isFocus, setFocus] = useState(false)

    function handleFocus() {
        setFocus(true)
    }



    function handleBlur() {
        setFocus(false)
    }


    function onClick(item: unknown){
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        onClickItem(item)
        setFocus(false)
    }


    return (
        <div className={`${className} input-root`}
             tabIndex={-1} onBlur={handleBlur}
             onFocus={handleFocus}>

            <div className={`input-wrapper ${withBg ? "with-bg" : ""}  ${inputBg}`}>
                <input
                    ref={ref}
                    onBlur={handleBlur}
                    onClick={()=>handleFocus()}
                    placeholder={label}
                    onFocus={handleFocus}
                    type={type}
                    {...attr}
                />
            </div>
            <div className={`input-border ${isFocus ? "input-border-focus" : "input-border-blur"}`}></div>
                {showSuggestion && isFocus && (
                    <div className="suggestion-list">
                        {showSuggestion(onClick)}
                    </div>
                )}


        </div>
    );
})

export default Input;



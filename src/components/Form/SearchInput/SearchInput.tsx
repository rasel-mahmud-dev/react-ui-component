import React, {FC, ForwardedRef, HTMLAttributes, ReactNode, useState} from 'react';
import "./search-input.scss"


interface Props extends HTMLAttributes<HTMLDivElement> {
    withBg?: boolean
    inputBg?: string
    type?: "text" | "email"
    dataList: object[]
    selectedDateList: object[]
    onSelectItem: (arg: any) => void
    showSuggestion: (arg: <T>(args: T)=> void) => ReactNode
    label?: string
}



const SearchInput: FC<Props> = React.forwardRef((props, ref: ForwardedRef<HTMLInputElement>) => {

    const {
        className = "",
        withBg = false,
        inputBg = "",
        type = "text",
        dataList,
        selectedDateList,
        onSelectItem,
        showSuggestion,
        label,
        ...attr
    } = props

    const [isFocus, setFocus] = useState(false)

    function handleFocus() {
        setFocus(true)
    }


    function handleBlur() {
        setFocus(false)
    }


    function onClick<T>(item: T) {
        onSelectItem(item)
        setFocus(false)
    }

    function clickOnCard() {
        setFocus(true)
    }

//     return (
//         <div className={`${className} input-root`}
//              tabIndex={-1} onBlur={handleBlur}
//              onFocus={handleFocus}>
//
//             <div className={`input-wrapper ${withBg ? "with-bg" : ""}  ${inputBg}`}>
//                 <input
//                     ref={ref}
//                     // onBlur={(e) => handleBlur(e)}
//                     onClick={()=>handleFocus()}
//                     placeholder={label}
//                     onFocus={handleFocus}
//                     type={type}
//                     {...attr}
//                 />
//             </div>
//             <div className={`input-border ${isFocus ? "input-border-focus" : "input-border-blur"}`}></div>
//             {showSuggestion && isFocus && (
//                 <div className="suggestion-list">
//                     {showSuggestion(onClick, clickOnCard)}
//                 </div>
//             )}
//         </div>
//     );
// })
//
// export default Input;


    return (
        <div className="input-root"
             tabIndex={-1}
             onFocus={handleFocus}
             onBlur={handleBlur}
        >

            <div className={`input-wrapper ${withBg ? "with-bg" : ""}  ${inputBg}`}>
                <input
                    ref={ref}
                    // onBlur={(e) => handleBlur(e)}
                    onClick={handleFocus}
                    placeholder={label}
                    onFocus={handleFocus}
                    type={type}
                    {...attr}
                />
            </div>

            {isFocus &&
                <div className="suggestion-list">
                    {showSuggestion(onClick)}
                </div>
            }

        </div>
    );
})

export default SearchInput
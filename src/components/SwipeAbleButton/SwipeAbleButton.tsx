import React, {FC, ReactElement, useState} from 'react';
import "./swipeAbleButton.scss"


interface Props {
    activeIndex: number
    render: (activeIndex: number) => ReactElement
}

const SwipeAbleButton: FC<Props> = (props) => {
    
    const {render, activeIndex = 0, } = props
    
    const [currActiveIndex, setCurrActiveIndex] = useState<number>(activeIndex)

    function handleToggleChange(index: number) {
        setCurrActiveIndex(index)
    }

    const children = render(currActiveIndex).props.children

    return (
        <div className="swipeable-btn-container">

            <span className={`overlay position-${currActiveIndex}`}></span>

            {children?.map((child: React.ReactNode, index: number) => (
                <div className={`swipeable-btn ${index === currActiveIndex ? "active-btn" : ""}`}
                     onClick={() => handleToggleChange(index)}>
                    {child}
                </div>
            ))}
        </div>
    )
};

export default SwipeAbleButton;
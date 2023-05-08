import React, {FC, HTMLAttributes} from 'react';

import "./loader.scss"


interface LoaderProps extends HTMLAttributes<HTMLDivElement>{
    isLoading?: boolean
}

const Loader: FC<LoaderProps> = (props) => {
    const { isLoading, className, ...attributes} = props

    return (
        <div className={className+" loader_root"} {...attributes}>
            <span/>
            <span/>
            <span/>
            <span/>
        </div>
    );
};

export default Loader;
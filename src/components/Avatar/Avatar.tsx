import React, {FC} from 'react';
import chooseUserName from "@app/utils/chooseUserName.tsx";

interface Props{
    className?: string
    imgClass?: string
    username?: string
    src?: string
}


const Avatar : FC<Props> = ({className = "", imgClass = "", username, src, ...attr}) => {
    const userNameLetter = chooseUserName(username || "")


    function handleErrorImage(e: any) {
        const avatarRoot = (e.target as HTMLElement).parentElement as HTMLDivElement
        if(avatarRoot) {
            avatarRoot.innerHTML = `
			<span class="img rounded-full w-9 h-9 flex items-center text-sm font-medium justify-center uppercase ${imgClass}">${userNameLetter}</span>
		`
        }
    }

    return (
        <div className={`${className}`} {...attr}>
            {src
                ?
                <img onError={handleErrorImage} src={src}
                     className={`img rounded-full w-full ${imgClass}`}/>

                : <div
                    className={`img rounded-full h-full w-full flex text-sm font-semibold items-center justify-center uppercase ${imgClass}`}>{userNameLetter}</div>
            }
        </div>
    );
};

export default Avatar;
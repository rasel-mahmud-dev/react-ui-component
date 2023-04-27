import React, {FC} from 'react';


import "./avatar.scss"
import Avatar from "@app/components/Avatar/Avatar.tsx";

interface Props {
    data?: any,
    imgClass?: string
}

const AvatarGroup: FC<Props> = ({data, imgClass=""}) => {
    return (
        <div>
            <div
                 className="flex flex-wrap items-center gap-x-0 users-avatar-list mt-1">
                {data.map((item: any) => (
                    <Avatar src={item.image} username={item.username} className="user-avatar" imgClass={imgClass} />
                ))}

            </div>
        </div>
    );
};

export default AvatarGroup;
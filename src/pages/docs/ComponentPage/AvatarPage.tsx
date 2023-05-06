import React from 'react';
import useGetActiveHash from "@app/hooks/useGetActiveHash.ts";
import DocsPageLayout from "@app/pages/docs/DocsPageLayout.tsx";
import Avatar from "@app/components/Avatar/Avatar.tsx";
import AvatarGroup from "@app/components/Avatar/AvatarGroup.tsx";
import Collapse from "@app/components/Collapse/Collapse.tsx";
import MdbButton from "@app/components/MBD_Button/Button.tsx";
import {BiCode} from "react-icons/bi";
import CodeView from "@app/components/CodeView/CodeView.tsx";


const usersList = [
    {
        email: "rasel.mahmud.dev@gmail.com",
        _id: "6422af5d9153de6adce3b085",
        username: "Rasel Mahmud",
        image: "https://randomuser.me/api/portraits/men/85.jpg"
    },
    {
        email: "test.mail@gmail.com",
        _id: "6446d317cd4d96843b1f6031",
        username: "Test",
        image: "https://randomuser.me/api/portraits/women/32.jpg"
    },{
        email: "karim.mail@gmail.com",
        _id: "6422b274931c811dcb9badad",
        username: "Karim",
        image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {email: "alex@gmail.com", _id: "6423099de8e946e0a13064d0", username: "Alex", image: "https://randomuser.me/api/portraits/men/32.jpg"},
    {
        email: "mahmud.dev@gmail.com",
        _id: "6446d299d10b2a45ec0b7710",
        username: "Mahmud",
        image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
        email: "simul.dev@gmail.com",
        _id: "6446d2bbd10b2a45ec0b7711",
        username: "Simul",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        email: "khan.dev@gmail.com",
        _id: "6446d2cdd10b2a45ec0b7712",
        username: "Khan",
        image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
]

const overviewContent = [
    {label: "Avatar", hash: "#avatar"},
    {label: "Avatar group", hash: "#avatar-group"},
    {label: "API", hash: "#api"}
]

const AvatarPage = () => {
    const {activeHash, location }  = useGetActiveHash()
    return (
        <DocsPageLayout pageTitle="Avatar" overviewContent={overviewContent} activeHash={activeHash} location={location}>


            <section id="avatar">
                <h4 className="pb-4 mt-4">Avatar</h4>
                <div className="" >
                    <Avatar imgClass="w-8 h-8" username={usersList[0].username} src={usersList[0].image} />
                    <Avatar imgClass="w-8 h-8" username={usersList[1].username} src={usersList[1].image} />
                    <Avatar imgClass="w-8 h-8" username={usersList[2].username} src={usersList[2].image} />
                    <Avatar imgClass="w-8 h-8" username={usersList[3].username} src={usersList[3].image} />
                </div>
                <div className="border-t pb-4 mt-4">
                    <Collapse initialExpand={[]}>
                        <Collapse.Item label={(isOpen: boolean)=>(
                            <MdbButton text className="flex items-center gap-x-1">
                                <BiCode fontSize={18} />
                                <span className="text-red-400">{isOpen ? "Hide" : "Show"} Code</span>
                            </MdbButton>
                        )}>
                            <CodeView lang="jsx" code={`

import Avatar from "@app/components/Avatar/Avatar.tsx";
import AvatarGroup from "@app/components/Avatar/AvatarGroup.tsx";


const usersList = [
    {
        email: "rasel.mahmud.dev@gmail.com",
        _id: "6422af5d9153de6adce3b085",
        username: "Rasel Mahmud",
        image: "https://randomuser.me/api/portraits/men/85.jpg"
    },
    {
        email: "test.mail@gmail.com",
        _id: "6446d317cd4d96843b1f6031",
        username: "Test",
        image: "https://randomuser.me/api/portraits/women/32.jpg"
    },{
        email: "karim.mail@gmail.com",
        _id: "6422b274931c811dcb9badad",
        username: "Karim",
        image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {email: "alex@gmail.com", _id: "6423099de8e946e0a13064d0", username: "Alex", image: "https://randomuser.me/api/portraits/men/32.jpg"},
    {
        email: "mahmud.dev@gmail.com",
        _id: "6446d299d10b2a45ec0b7710",
        username: "Mahmud",
        image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
        email: "simul.dev@gmail.com",
        _id: "6446d2bbd10b2a45ec0b7711",
        username: "Simul",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        email: "khan.dev@gmail.com",
        _id: "6446d2cdd10b2a45ec0b7712",
        username: "Khan",
        image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
]

<Avatar imgClass="w-8 h-8" username={usersList[0].username} src={usersList[0].image} />
<Avatar imgClass="w-8 h-8" username={usersList[1].username} src={usersList[1].image} />
<Avatar imgClass="w-8 h-8" username={usersList[2].username} src={usersList[2].image} />
<Avatar imgClass="w-8 h-8" username={usersList[3].username} src={usersList[3].image} />
               
`}

                            />
                        </Collapse.Item>

                    </Collapse>
                </div>

            </section>


            <section id="default-button">
                <h4 className=" mt-4 page-subtitle">Avatar group</h4>
                <p className="section-para pb-4">if avatar missing or fail to load for network request.</p>
                <div className="" >

                    <Avatar imgClass="w-8 h-8 bg-dark-300/20" username={usersList[0].username} src={usersList[0].image[0]} />
                    <Avatar imgClass="w-8 h-8 bg-dark-300/20" username={usersList[1].username} src={usersList[1].image[0]} />
                    <Avatar imgClass="w-8 h-8 bg-dark-300/20" username={usersList[2].username} src={usersList[2].image[0]} />
                    <Avatar imgClass="w-8 h-8 bg-dark-300/20" username={usersList[3].username} src={usersList[2].image[0]} />

                </div>
            </section>

            <section id="avatar-group">
                <h4 className="pb-4 mt-4">Avatar group </h4>
                <div className="" >
                    <AvatarGroup data={usersList} />
                </div>
                <div className="border-t pb-4 mt-4">
                    <Collapse initialExpand={[]}>
                        <Collapse.Item label={(isOpen: boolean)=>(
                            <MdbButton text className="flex items-center gap-x-1">
                                <BiCode fontSize={18} />
                                <span className="text-red-400">{isOpen ? "Hide" : "Show"} Code</span>
                            </MdbButton>
                        )}>
                            <CodeView lang="jsx" code={`
import Avatar from "@app/components/Avatar/Avatar.tsx";
import AvatarGroup from "@app/components/Avatar/AvatarGroup.tsx";

const usersList = [
    {
        email: "rasel.mahmud.dev@gmail.com",
        _id: "6422af5d9153de6adce3b085",
        username: "Rasel Mahmud",
        image: "https://randomuser.me/api/portraits/men/85.jpg"
    },
    {
        email: "test.mail@gmail.com",
        _id: "6446d317cd4d96843b1f6031",
        username: "Test",
        image: "https://randomuser.me/api/portraits/women/32.jpg"
    },{
        email: "karim.mail@gmail.com",
        _id: "6422b274931c811dcb9badad",
        username: "Karim",
        image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {email: "alex@gmail.com", _id: "6423099de8e946e0a13064d0", username: "Alex", image: "https://randomuser.me/api/portraits/men/32.jpg"},
    {
        email: "mahmud.dev@gmail.com",
        _id: "6446d299d10b2a45ec0b7710",
        username: "Mahmud",
        image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
        email: "simul.dev@gmail.com",
        _id: "6446d2bbd10b2a45ec0b7711",
        username: "Simul",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        email: "khan.dev@gmail.com",
        _id: "6446d2cdd10b2a45ec0b7712",
        username: "Khan",
        image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
]

 <AvatarGroup data={usersList} />              
`}

                            />
                        </Collapse.Item>

                    </Collapse>
                </div>

            </section>


            <section id="default-button">
                <h4 className=" mt-4 page-subtitle">Avatar group</h4>
                <p className="section-para pb-4">if avatar missing or fail to load for network request.</p>
                <div className="" >
                    <AvatarGroup imgClass="user-avatar bg-dark-300 text-white text-sm" data={usersList.map(item=>({...item, image: ""}))} />
                </div>
            </section>



            <section id="api" className="">
                <div className="api-section">
                <h4 className=" mt-4 page-subtitle">API</h4>
                </div>


            </section>
        </DocsPageLayout>
    );
};

export default AvatarPage;
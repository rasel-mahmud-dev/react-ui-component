
import React, {FormEvent, useEffect, useState} from 'react';

import MdbButton from "../../../../components/MBD_Button/Button.tsx";
import {BiCode, BiHeart} from "react-icons/bi";
import useGetActiveHash from "@app/hooks/useGetActiveHash.ts";
import CodeView from "@app/components/CodeView/CodeView.tsx";
import DocsPageLayout from "@app/pages/docs/DocsPageLayout.tsx";
import Collapse from "@app/components/Collapse/Collapse.tsx";
import Button from "../../../../components/MBD_Button/Button.tsx";
import SearchInput from "@app/components/Form/SearchInput/SearchInput";
import {BsFillTrash2Fill} from "react-icons/all";


const overviewContent = []


type UserType = {username: string, email: string, _id: string, image?: string}


const SearchInputPages = () => {

    const {activeHash, location }  = useGetActiveHash()

    const [searchText, setSearchText] = useState("")

    const usersList : UserType[] = [
        {
            email: "rasel.mahmud.dev@gmail.com",
            _id: "6422af5d9153de6adce3b085",
            username: "Rasel Mahmud",
            image: "https://randomuser.me/api/portraits/men/85.jpg"
        },
        {
            email: "test.mail@gmail.com",
            _id: "6422b274931c811dcb9badad",
            username: "Test",
            image: "https://randomuser.me/api/portraits/women/32.jpg"
        },
        {email: "alex@gmail.com", _id: "642aa550c881866e268f1464", username: "Alex", image: "https://randomuser.me/api/portraits/men/32.jpg"},
        {
            email: "mahmud.dev@gmail.com",
            _id: "642aa4a9f5218b533a337fc6",
            username: "Mahmud",
            image: "https://randomuser.me/api/portraits/women/32.jpg"
        },
        {
            email: "simul.dev@gmail.com",
            _id: "642aa105f09c166b07f2e3d2",
            username: "Simul",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            email: "khan.dev@gmail.com",
            _id: "642aa123f09c166b07f2e3d5",
            username: "Khan",
            image: "https://randomuser.me/api/portraits/women/32.jpg"
        },
    ]

    const [searchUsersList, setSearchUsersList] = useState<UserType[]>([])

    const [invitations, setInvitations] = useState<UserType[]>([])

    useEffect(() => {
        findUsers(searchText)
    }, [searchText])


    function findUsers(searchText: string) {
        const users = usersList.filter(u => u.email.includes(searchText) || u.username.includes(searchText))
        setSearchUsersList(users as [])
    }

    function handleAddUser(user: UserType) {
        setInvitations(prev => {
            const unique: UserType[] = [...prev]
            if (unique.findIndex(un => un._id === user._id) === -1) {
                unique.push(user)
            }
            return unique
        })
    }

    function handleRemoveUser(user: UserType) {
        setInvitations(prev =>prev.filter(inUser => inUser._id !== user._id))
    }


    return (
        <DocsPageLayout pageTitle="Search Input" overviewContent={[]} activeHash={activeHash} location={location}>

            <section id="default-button">
                <h4 className="pb-4 mt-4">React Custom Input with Search data</h4>

                <div>
                    <h4 className="font-semibold text-dark-300 text-base mb-2">Invitations</h4>

                    {invitations.map(user => (
                        <li className="flex items-center justify-between py-1">
                            <p className="flex items-center ">
                                <img className="w-6  rounded-full mr-1" src={user.image} alt=""/>
                                <span className="text-dark-100"> {user.email}</span>
                            </p>

                            <BsFillTrash2Fill
                                onClick={() => handleRemoveUser(user)}
                                className="text-base mr-2 hover:text-red-400"/>
                        </li>

                    ))}
                </div>


                <h4 className="font-semibold text-dark-300 text-base mb-2 mt-8">Search users</h4>
                <div className="">
                    <SearchInput
                        onChange={(e: FormEvent<HTMLInputElement>) => setSearchText( (e.target as HTMLInputElement).value)}
                        withBg={true}
                        dataList={usersList}
                        selectedDateList={invitations}
                        inputBg="px-1 py-1 rounded"
                        onSelectItem={handleAddUser}
                        showSuggestion={(onClick: (user: UserType)=>void) => (
                            <div>
                                {searchUsersList?.map(user => (
                                    <div className="flex items-center justify-between my-2">
                                        <p onClick={() => onClick(user)} className="suggestion-item">{user.username}</p>
                                        <Button tag="span">Find Time</Button>
                                    </div>
                                ))}
                            </div>
                        )}
                        label="Email"
                        type="email"
                    />
                </div>
                <div className="border-t pb-4 mt-4">
                    <Collapse initialExpand={[]}>
                        <Collapse.Item label={(isOpen: boolean)=>(
                            <MdbButton text className="flex items-center gap-x-1">
                                <BiCode fontSize={18} />
                                <span className="text-red-400">{isOpen ? "Hide" : "Show"} Code</span>
                            </MdbButton>
                        )}>
                            <CodeView lang="typescript" code={`

import React, {FormEvent, useEffect, useState} from 'react';
import Button from "@app/components/MBD_Button/Button.tsx";
import SearchInput from "@app/components/Form/SearchInput/SearchInput";
import {BsFillTrash2Fill} from "react-icons/all";


type UserType = {username: string, email: string, _id: string, image?: string}

const overviewContent = []




    const usersList : UserType[] = [
        {
            email: "rasel.mahmud.dev@gmail.com",
            _id: "6422af5d9153de6adce3b085",
            username: "Rasel Mahmud",
            image: "https://randomuser.me/api/portraits/men/85.jpg"
        },
        {
            email: "test.mail@gmail.com",
            _id: "6422b274931c811dcb9badad",
            username: "Test",
            image: "https://randomuser.me/api/portraits/women/32.jpg"
        },
        {email: "alex@gmail.com", _id: "642aa550c881866e268f1464", username: "Alex", image: "https://randomuser.me/api/portraits/men/32.jpg"},
        {
            email: "mahmud.dev@gmail.com",
            _id: "642aa4a9f5218b533a337fc6",
            username: "Mahmud",
            image: "https://randomuser.me/api/portraits/women/32.jpg"
        },
        {
            email: "simul.dev@gmail.com",
            _id: "642aa105f09c166b07f2e3d2",
            username: "Simul",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            email: "khan.dev@gmail.com",
            _id: "642aa123f09c166b07f2e3d5",
            username: "Khan",
            image: "https://randomuser.me/api/portraits/women/32.jpg"
        }
    ]
    
                            
const SearchInput  = (props)=>{
    
    const [searchText, setSearchText] = useState("")
    const [searchUsersList, setSearchUsersList] = useState<UserType[]>([])

    const [invitations, setInvitations] = useState<UserType[]>([])

    useEffect(() => {
        findUsers(searchText)
    }, [searchText])


    function findUsers(searchText: string) {
        const users = usersList.filter(u => u.email.includes(searchText) || u.username.includes(searchText))
        setSearchUsersList(users as [])
    }

    function handleAddUser(user: UserType) {
        setInvitations(prev => {
            const unique: UserType[] = [...prev]
            if (unique.findIndex(un => un._id === user._id) === -1) {
                unique.push(user)
            }
            return unique
        })
    }

    function handleRemoveUser(user: UserType) {
        setInvitations(prev =>prev.filter(inUser => inUser._id !== user._id))
    }
    
    return (
    
        <div>
            <div>
                    <h4 className="font-semibold text-dark-300 text-base mb-2">Invitations</h4>

                    {invitations.map(user => (
                        <li className="flex items-center justify-between py-1">
                            <p className="flex items-center ">
                                <img className="w-6  rounded-full mr-1" src={user.image} alt=""/>
                                <span className="text-dark-100"> {user.email}</span>
                            </p>

                            <BsFillTrash2Fill
                                onClick={() => handleRemoveUser(user)}
                                className="text-base mr-2 hover:text-red-400"/>
                        </li>

                    ))}
                </div>


                <h4 className="font-semibold text-dark-300 text-base mb-2 mt-8">Search users</h4>
                <div className="">
                    <SearchInput
                        onChange={(e: FormEvent<HTMLInputElement>) => setSearchText( (e.target as HTMLInputElement).value)}
                        withBg={true}
                        dataList={usersList}
                        selectedDateList={invitations}
                        inputBg="px-1 py-1 rounded"
                        onSelectItem={handleAddUser}
                        showSuggestion={(onClick: (user: UserType)=>void) => (
                            <div>
                                {searchUsersList?.map(user => (
                                    <div className="flex items-center justify-between my-2">
                                        <p onClick={() => onClick(user)} className="suggestion-item">{user.username}</p>
                                        <Button tag="span">Find Time</Button>
                                    </div>
                                ))}
                            </div>
                        )}
                        label="Email"
                        type="email"
                    />


                </div>
        </div>
    
    )

}

`}

                            />
                        </Collapse.Item>

                    </Collapse>
                </div>



            </section>


        </DocsPageLayout>
    );
};

export default SearchInputPages;
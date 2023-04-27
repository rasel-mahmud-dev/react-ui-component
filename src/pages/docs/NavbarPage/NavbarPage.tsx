
import useGetActiveHash from "@app/hooks/useGetActiveHash.ts";
import DocsPageLayout from "@app/pages/docs/DocsPageLayout.tsx";

import Navbar from "@app/components/Navbar/Navbar.tsx";
import Collapse from "@app/components/Collapse/Collapse.tsx";
import MdbButton from "@app/components/MBD_Button/Button.tsx";
import {BiCode} from "react-icons/bi";
import CodeView from "@app/components/CodeView/CodeView.tsx";
import {FaSignInAlt, FiBell, FiGithub} from "react-icons/all";
import Navbar2 from "@app/components/Navbar/Navbar2.tsx";

const overviewContent = [
    {label: "Default navigation", hash: "#default-navigation"},
    {label: "Navigation with nav items", hash: "#with-nav-items"}
]


const NavbarPage = () => {

    const {activeHash, location }  = useGetActiveHash()

    return (
        <DocsPageLayout pageTitle="Navbar" overviewContent={overviewContent} activeHash={activeHash} location={location}>
            <section id="default-navigation">

                <div>


                    <Navbar />
                    <div className="border-t py-4 mt-4">
                        <Collapse initialExpand={[2]}>
                            <Collapse.Item label={(isOpen: boolean)=>(
                                <MdbButton text className="flex items-center gap-x-1">
                                    <BiCode fontSize={18} />
                                    <span className="text-red-400">{isOpen ? "Hide" : "Show"} Code</span>
                                </MdbButton>
                            )}>
                                <CodeView code={`
<header className="navigation-one ">

    <div className="container">

        <div className="flex justify-between ">
            <div className="flex items-center">
                <div className="w-10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="react"><path fill="#ff713d" d="M19.108 12.376q-.176-.201-.371-.403.136-.144.264-.287c1.605-1.804 2.283-3.614 1.655-4.701-.602-1.043-2.393-1.354-4.636-.918q-.331.065-.659.146-.063-.216-.133-.43C14.467 3.49 13.238 1.999 11.982 2c-1.204 0-2.368 1.397-3.111 3.558q-.11.32-.203.644-.219-.054-.44-.1c-2.366-.485-4.271-.165-4.898.924-.601 1.043.027 2.75 1.528 4.472q.224.255.46.5c-.186.19-.361.381-.525.571-1.465 1.698-2.057 3.376-1.457 4.415.62 1.074 2.498 1.425 4.785.975q.278-.055.553-.124.1.351.221.697C9.635 20.649 10.792 22 11.992 22c1.24 0 2.482-1.453 3.235-3.659.06-.174.115-.355.169-.541q.355.088.715.156c2.203.417 3.952.09 4.551-.95.619-1.075-.02-2.877-1.554-4.63ZM4.07 7.452c.386-.67 1.943-.932 3.986-.512q.196.04.399.09a20.464 20.464 0 0 0-.422 2.678A20.887 20.887 0 0 0 5.93 11.4q-.219-.227-.427-.465C4.216 9.461 3.708 8.081 4.07 7.452Zm3.887 5.728c-.51-.387-.985-.783-1.416-1.181.43-.396.905-.79 1.415-1.176q-.028.589-.027 1.179 0 .59.028 1.178Zm0 3.94a7.237 7.237 0 0 1-2.64.094 1.766 1.766 0 0 1-1.241-.657c-.365-.63.111-1.978 1.364-3.43q.236-.273.488-.532a20.49 20.49 0 0 0 2.107 1.7 20.802 20.802 0 0 0 .426 2.712q-.25.063-.505.114Zm7.1-8.039q-.503-.317-1.018-.613-.508-.292-1.027-.563c.593-.249 1.176-.462 1.739-.635a18.218 18.218 0 0 1 .306 1.811ZM9.68 5.835c.636-1.85 1.578-2.98 2.304-2.98.773-.001 1.777 1.218 2.434 3.197q.064.194.12.39a20.478 20.478 0 0 0-2.526.97 20.061 20.061 0 0 0-2.52-.981q.087-.3.188-.596Zm-.4 1.424a18.307 18.307 0 0 1 1.73.642q-1.052.542-2.048 1.181c.08-.638.187-1.249.318-1.823Zm-.317 7.66q.497.319 1.009.613.522.3 1.057.576a18.196 18.196 0 0 1-1.744.665 19.144 19.144 0 0 1-.322-1.853Zm5.456 3.146a7.236 7.236 0 0 1-1.238 2.333 1.766 1.766 0 0 1-1.188.748c-.729 0-1.658-1.085-2.29-2.896q-.112-.321-.206-.648a20.109 20.109 0 0 0 2.53-1.01 20.8 20.8 0 0 0 2.547.979q-.072.249-.155.494Zm.362-1.324c-.569-.176-1.16-.393-1.762-.646q.509-.267 1.025-.565.53-.306 1.032-.627a18.152 18.152 0 0 1-.295 1.838Zm.447-4.743q0 .911-.057 1.82c-.493.334-1.013.66-1.554.972-.54.311-1.073.597-1.597.856q-.827-.396-1.622-.854-.79-.455-1.544-.969-.07-.91-.07-1.822 0-.911.068-1.821a24.168 24.168 0 0 1 3.158-1.823q.816.397 1.603.851.79.454 1.55.959.065.914.065 1.831Zm.956-5.093c1.922-.373 3.37-.122 3.733.507.387.67-.167 2.148-1.554 3.706q-.115.129-.238.259a20.061 20.061 0 0 0-2.144-1.688 20.04 20.04 0 0 0-.405-2.649q.31-.076.608-.135Zm-.13 3.885a18.164 18.164 0 0 1 1.462 1.188 18.12 18.12 0 0 1-1.457 1.208q.023-.594.023-1.188 0-.604-.028-1.208Zm3.869 5.789c-.364.631-1.768.894-3.653.538q-.324-.061-.664-.146a20.069 20.069 0 0 0 .387-2.682 19.94 19.94 0 0 0 2.137-1.715q.177.183.336.364a7.234 7.234 0 0 1 1.403 2.238 1.766 1.766 0 0 1 .054 1.403Zm-8.819-6.141a1.786 1.786 0 1 0 2.44.654 1.786 1.786 0 0 0-2.44-.654Z"></path></svg>
                </div>
                <h1 className="text-2xl font-bold">
                    <span className="text-primary-400">RSL</span>
                    <span className="text-gray-900">UI</span>
                </h1>
            </div>
            <nav>
                <li></li>
            </nav>
            <nav className="flex items-center gap-x-8">
                <div className="flex items-center gap-x-2">
                    <li>
                        <Button  color="none" floating={true} className="flex bg-primary-400/40 items-center gap-x-1">
                            <FiBell fontSize={14} />
                        </Button>
                    </li>
                    <li>
                        <Button color="none" floating={true} className="flex bg-primary-400/40 items-center gap-x-1">
                            <FiGithub fontSize={14} />
                        </Button>
                    </li>
                </div>
                <li>
                    <Button color="none" className="bg-primary-400 flex items-center gap-x-1">
                        <FaSignInAlt fontSize={14} />
                        <span>Login</span>
                    </Button>
                </li>
            </nav>
        </div>

    </div>
</header>
`}
                                          lang="html"
                                />
                            </Collapse.Item>

                        </Collapse>
                    </div>

                </div>
            </section>


            <section id="with-nav-items">

                <div>


                    <Navbar2 />
                    <div className="border-t py-4 mt-4">
                        <Collapse initialExpand={[0]}>
                            <Collapse.Item label={(isOpen: boolean)=>(
                                <MdbButton text className="flex items-center gap-x-1">
                                    <BiCode fontSize={18} />
                                    <span className="text-red-400">{isOpen ? "Hide" : "Show"} Code</span>
                                </MdbButton>
                            )}>
                                <CodeView code={`
import {FaSignInAlt, FiBell, FiGithub} from "react-icons/all";

import "./navbar2.scss"
import {Link} from "react-router-dom";

const Navbar = () => {

    const navItems  = [
        {label: "Home", to: "/"},
        {label: "About", to: "/"},
        {label: "Contact", to: "/"},
        {label: "Services", to: "/"},
        {label: "Portfolio", to: "/"},
        {label: "Blogs", to: "/"},
    ]

    return (
        <div>
            <header className="navigation-two ">

                <div className="container">

                    <div className="flex justify-between ">
                        <div className="flex items-center">
                            <div className="w-10">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="react"><path fill="#ff713d" d="M19.108 12.376q-.176-.201-.371-.403.136-.144.264-.287c1.605-1.804 2.283-3.614 1.655-4.701-.602-1.043-2.393-1.354-4.636-.918q-.331.065-.659.146-.063-.216-.133-.43C14.467 3.49 13.238 1.999 11.982 2c-1.204 0-2.368 1.397-3.111 3.558q-.11.32-.203.644-.219-.054-.44-.1c-2.366-.485-4.271-.165-4.898.924-.601 1.043.027 2.75 1.528 4.472q.224.255.46.5c-.186.19-.361.381-.525.571-1.465 1.698-2.057 3.376-1.457 4.415.62 1.074 2.498 1.425 4.785.975q.278-.055.553-.124.1.351.221.697C9.635 20.649 10.792 22 11.992 22c1.24 0 2.482-1.453 3.235-3.659.06-.174.115-.355.169-.541q.355.088.715.156c2.203.417 3.952.09 4.551-.95.619-1.075-.02-2.877-1.554-4.63ZM4.07 7.452c.386-.67 1.943-.932 3.986-.512q.196.04.399.09a20.464 20.464 0 0 0-.422 2.678A20.887 20.887 0 0 0 5.93 11.4q-.219-.227-.427-.465C4.216 9.461 3.708 8.081 4.07 7.452Zm3.887 5.728c-.51-.387-.985-.783-1.416-1.181.43-.396.905-.79 1.415-1.176q-.028.589-.027 1.179 0 .59.028 1.178Zm0 3.94a7.237 7.237 0 0 1-2.64.094 1.766 1.766 0 0 1-1.241-.657c-.365-.63.111-1.978 1.364-3.43q.236-.273.488-.532a20.49 20.49 0 0 0 2.107 1.7 20.802 20.802 0 0 0 .426 2.712q-.25.063-.505.114Zm7.1-8.039q-.503-.317-1.018-.613-.508-.292-1.027-.563c.593-.249 1.176-.462 1.739-.635a18.218 18.218 0 0 1 .306 1.811ZM9.68 5.835c.636-1.85 1.578-2.98 2.304-2.98.773-.001 1.777 1.218 2.434 3.197q.064.194.12.39a20.478 20.478 0 0 0-2.526.97 20.061 20.061 0 0 0-2.52-.981q.087-.3.188-.596Zm-.4 1.424a18.307 18.307 0 0 1 1.73.642q-1.052.542-2.048 1.181c.08-.638.187-1.249.318-1.823Zm-.317 7.66q.497.319 1.009.613.522.3 1.057.576a18.196 18.196 0 0 1-1.744.665 19.144 19.144 0 0 1-.322-1.853Zm5.456 3.146a7.236 7.236 0 0 1-1.238 2.333 1.766 1.766 0 0 1-1.188.748c-.729 0-1.658-1.085-2.29-2.896q-.112-.321-.206-.648a20.109 20.109 0 0 0 2.53-1.01 20.8 20.8 0 0 0 2.547.979q-.072.249-.155.494Zm.362-1.324c-.569-.176-1.16-.393-1.762-.646q.509-.267 1.025-.565.53-.306 1.032-.627a18.152 18.152 0 0 1-.295 1.838Zm.447-4.743q0 .911-.057 1.82c-.493.334-1.013.66-1.554.972-.54.311-1.073.597-1.597.856q-.827-.396-1.622-.854-.79-.455-1.544-.969-.07-.91-.07-1.822 0-.911.068-1.821a24.168 24.168 0 0 1 3.158-1.823q.816.397 1.603.851.79.454 1.55.959.065.914.065 1.831Zm.956-5.093c1.922-.373 3.37-.122 3.733.507.387.67-.167 2.148-1.554 3.706q-.115.129-.238.259a20.061 20.061 0 0 0-2.144-1.688 20.04 20.04 0 0 0-.405-2.649q.31-.076.608-.135Zm-.13 3.885a18.164 18.164 0 0 1 1.462 1.188 18.12 18.12 0 0 1-1.457 1.208q.023-.594.023-1.188 0-.604-.028-1.208Zm3.869 5.789c-.364.631-1.768.894-3.653.538q-.324-.061-.664-.146a20.069 20.069 0 0 0 .387-2.682 19.94 19.94 0 0 0 2.137-1.715q.177.183.336.364a7.234 7.234 0 0 1 1.403 2.238 1.766 1.766 0 0 1 .054 1.403Zm-8.819-6.141a1.786 1.786 0 1 0 2.44.654 1.786 1.786 0 0 0-2.44-.654Z"></path></svg>
                            </div>
                        </div>
                        <nav className="flex">
                            {
                                navItems.map(item=>(
                                    <li>
                                        <Button text><Link to={item.to}>{item.label}</Link></Button>
                                    </li>
                                ))
                            }
                        </nav>
                        <nav className="flex items-center gap-x-8">
                            <div className="flex items-center gap-x-2">
                                <li>
                                    <Button  color="light" floating={true} className="flex bg-primary-400/40 items-center gap-x-1">
                                        <FiBell fontSize={14} />
                                    </Button>
                                </li>
                                <li>
                                    <Button color="light" floating={true} className="flex bg-primary-400/40 items-center gap-x-1">
                                        <FiGithub fontSize={14} />
                                    </Button>
                                </li>

                            <li>
                                <Button color="light" floating={true} className=" items-center gap-x-1">
                                    <FaSignInAlt fontSize={14} />
                                </Button>
                            </li>
                            </div>
                        </nav>
                    </div>

                </div>
            </header>
        </div>
    );
};

export default Navbar;
`}
                                          lang="typescript"
                                />
                            </Collapse.Item>

                        </Collapse>
                    </div>

                </div>
            </section>


        </DocsPageLayout>
    );
};

export default NavbarPage;

import Button from "@app/components/Button/Button.tsx";
import MdbButton from "../../../components/MBD_Button/Button.tsx";
import {BiCode, BiHeart} from "react-icons/bi";
import { FiFacebook, FiGithub, FiInstagram} from "react-icons/all";
import useGetActiveHash from "@app/hooks/useGetActiveHash";
import CodeView from "@app/components/CodeView/CodeView.tsx";
import DocsPageLayout from "@app/pages/docs/DocsPageLayout.tsx";
import Collapse from "@app/components/Collapse/Collapse.tsx";
import SwipeAbleButton from "@app/components/SwipeAbleButton/SwipeAbleButton";


const overviewContent = [
    {label: "Default button", hash: "#default-button"},
    {label: "MDB button", hash: "#mdb-button"},
    {label: "Neutral button", hash: "#neutral-button"},
    {label: "Outline button", hash: "#outline-button"},
    {label: "Swipe Able button", hash: "#swipeable-button"},
    {label: "Rounded button", hash: "#rounded-button"},
    {label: "Link button", hash: "#link-button"},
    {label: "With Icon button", hash: "#with-icon-button"},
    {label: "Icon button", hash: "#icon-button"},
    {label: "Floating button", hash: "#floating-button"},
]

const ButtonPage = () => {

    const {activeHash, location }  = useGetActiveHash()

    return (
        <DocsPageLayout pageTitle="Buttons" overviewContent={overviewContent} activeHash={activeHash} location={location}>

                    <section id="default-button">
                        <h4 className="pb-4 mt-4">Normal Button</h4>
                        <div className=" grid grid-cols-4 w-max gap-4" >
                        <Button>Button</Button>
                        <Button>Button</Button>
                        <Button>Button</Button>
                        <Button>Button</Button>
                        <Button>Button</Button>
                        <Button>Button</Button>
                        <Button>Button</Button>
                        <Button className="border-blue-400 bg-white">Button</Button>
                    </div>
                        <div className="border-t pb-4 mt-4">
                            <Collapse initialExpand={[0]}>
                                <Collapse.Item label={(isOpen: boolean)=>(
                                    <MdbButton text className="flex items-center gap-x-1">
                                        <BiCode fontSize={18} />
                                        <span className="text-red-400">{isOpen ? "Hide" : "Show"} Code</span>
                                    </MdbButton>
                                )}>
                                    <CodeView lang="html" code={`
<Button>Button</Button>
<Button>Button</Button>
<Button>Button</Button>
<Button>Button</Button>
<Button>Button</Button>
<Button>Button</Button>
<Button>Button</Button>
<Button className="border-blue-400 bg-white">Button</Button>
`}

                                    />
                                </Collapse.Item>

                            </Collapse>
                        </div>



                    </section>

                    <section id="mdb-button">
                        <h4 className=" pb-4 mt-4">MDB Button</h4>
                        <div className="grid grid-cols-4 w-max gap-2">
                            <MdbButton>Button</MdbButton>
                            <MdbButton className="text-white" color="secondary">Button</MdbButton>
                            <MdbButton className="text-white" color="success">Button</MdbButton>
                            <MdbButton color="danger">Button</MdbButton>
                            <MdbButton color="info">Button</MdbButton>
                            <MdbButton color="warning">Button</MdbButton>
                            <MdbButton color="dark">Button</MdbButton>
                            <MdbButton color="light">Button</MdbButton>
                        </div>

                        <div className="border-t py-4 mt-4">
                            <Collapse initialExpand={[0]}>
                                <Collapse.Item label={(isOpen: boolean)=>(
                                    <MdbButton text className="flex items-center gap-x-1">
                                        <BiCode fontSize={18} />
                                        <span className="text-red-400">{isOpen ? "Hide" : "Show"} Code</span>
                                    </MdbButton>
                                )}>
                                        <CodeView code={`
<MdbButton>Button</MdbButton>
<MdbButton className="text-white" color="secondary">Button</MdbButton>
<MdbButton className="text-white" color="success">Button</MdbButton>
<MdbButton color="danger">Button</MdbButton>
<MdbButton color="info">Button</MdbButton>
<MdbButton color="warning">Button</MdbButton>
<MdbButton color="dark">Button</MdbButton>
<MdbButton color="light">Button</MdbButton>
`}
                                                  lang="html"
                                        />
                                    </Collapse.Item>

                            </Collapse>
                        </div>

                    </section>

                    <section id="neutral-button">
                        <h4 className="mt-8 mb-2">MDB Neutral  Button </h4>
                        <div className="grid grid-cols-4 w-max gap-2">
                            <MdbButton color="dark">Button</MdbButton>
                            <MdbButton color="light">Button</MdbButton>
                        </div>
                        <div className="border-t pb-4 mt-4">
                            <Collapse initialExpand={[0]}>
                                <Collapse.Item label={(isOpen: boolean)=>(
                                    <MdbButton text className="flex items-center gap-x-1">
                                        <BiCode fontSize={18} />
                                        <span className="text-red-400">{isOpen ? "Hide" : "Show"} Code</span>
                                    </MdbButton>
                                )}>
                                    <CodeView code={`
<MdbButton color="dark">Button</MdbButton>
<MdbButton color="light">Button</MdbButton>
`}
                                              lang="html"
                                    />
                                </Collapse.Item>

                            </Collapse>
                        </div>

                    </section>

                    <section id="outline-button">
                        <h4 className="mt-8 mb-2">MDB Outline Button</h4>
                        <div className="grid grid-cols-4 w-max gap-2">
                            <MdbButton outline={true}>Button</MdbButton>
                            <MdbButton outline={true} className="text-white" color="secondary">Button</MdbButton>
                            <MdbButton outline={true} className="text-white" color="success">Button</MdbButton>
                            <MdbButton outline={true} color="danger">Button</MdbButton>
                            <MdbButton outline={true} color="info">Button</MdbButton>
                            <MdbButton outline={true} color="warning">Button</MdbButton>
                            <MdbButton outline={true} color="dark">Button</MdbButton>
                            <MdbButton outline={true} color="light">Button</MdbButton>
                        </div>
                        <div className="border-t pb-4 mt-4">
                            <Collapse initialExpand={[0]}>
                                <Collapse.Item label={(isOpen: boolean)=>(
                                    <MdbButton text className="flex items-center gap-x-1">
                                        <BiCode fontSize={18} />
                                        <span className="text-red-400">{isOpen ? "Hide" : "Show"} Code</span>
                                    </MdbButton>
                                )}>
                                    <CodeView code={`
<MdbButton outline={true}>Button</MdbButton>
<MdbButton outline={true} className="text-white" color="secondary">Button</MdbButton>
<MdbButton outline={true} className="text-white" color="success">Button</MdbButton>
<MdbButton outline={true} color="danger">Button</MdbButton>
<MdbButton outline={true} color="info">Button</MdbButton>
<MdbButton outline={true} color="warning">Button</MdbButton>
<MdbButton outline={true} color="dark">Button</MdbButton>
<MdbButton outline={true} color="light">Button</MdbButton>
`}
                                              lang="html"
                                    />
                                </Collapse.Item>

                            </Collapse>
                        </div>
                    </section>


{/*       Swipe able button */}
<section id="outline-button">
                        <h4 className="mt-8 mb-2">MDB Outline Button</h4>
                        <div className="grid grid-cols-4 w-max gap-2">
                            <MdbButton outline={true}>Button</MdbButton>
                            <MdbButton outline={true} className="text-white" color="secondary">Button</MdbButton>
                            <MdbButton outline={true} className="text-white" color="success">Button</MdbButton>
                            <MdbButton outline={true} color="danger">Button</MdbButton>
                            <MdbButton outline={true} color="info">Button</MdbButton>
                            <MdbButton outline={true} color="warning">Button</MdbButton>
                            <MdbButton outline={true} color="dark">Button</MdbButton>
                            <MdbButton outline={true} color="light">Button</MdbButton>
                        </div>
                        <div className="border-t pb-4 mt-4">
                            <Collapse initialExpand={[0]}>
                                <Collapse.Item label={(isOpen: boolean)=>(
                                    <MdbButton text className="flex items-center gap-x-1">
                                        <BiCode fontSize={18} />
                                        <span className="text-red-400">{isOpen ? "Hide" : "Show"} Code</span>
                                    </MdbButton>
                                )}>
                                    <CodeView code={`
<MdbButton outline={true}>Button</MdbButton>
<MdbButton outline={true} className="text-white" color="secondary">Button</MdbButton>
<MdbButton outline={true} className="text-white" color="success">Button</MdbButton>
<MdbButton outline={true} color="danger">Button</MdbButton>
<MdbButton outline={true} color="info">Button</MdbButton>
<MdbButton outline={true} color="warning">Button</MdbButton>
<MdbButton outline={true} color="dark">Button</MdbButton>
<MdbButton outline={true} color="light">Button</MdbButton>
`}
                                              lang="html"
                                    />
                                </Collapse.Item>

                            </Collapse>
                        </div>
                    </section>

                   <section id="rounded-button">
                       <h4 className="mt-8 mb-2">MDB Rounded Button</h4>
                       <div className="grid grid-cols-4 w-max gap-2">
                           <MdbButton rounded={true} className="text-white" color="secondary">Button</MdbButton>
                           <MdbButton rounded={true}>Button</MdbButton>
                           <MdbButton rounded={true} className="text-white" color="success">Button</MdbButton>
                           <MdbButton rounded={true} color="danger">Button</MdbButton>
                           <MdbButton rounded={true} color="info">Button</MdbButton>
                           <MdbButton rounded={true} color="warning">Button</MdbButton>
                           <MdbButton rounded={true} color="dark">Button</MdbButton>
                           <MdbButton rounded={true} color="light">Button</MdbButton>
                       </div>

                       <div className="border-t pb-4 mt-4">
                           <Collapse initialExpand={[0]}>
                               <Collapse.Item label={(isOpen: boolean)=>(
                                   <MdbButton text className="flex items-center gap-x-1">
                                       <BiCode fontSize={18} />
                                       <span className="text-red-400">{isOpen ? "Hide" : "Show"} Code</span>
                                   </MdbButton>
                               )}>
                                   <CodeView code={`
<MdbButton rounded={true} className="text-white" color="secondary">Button</MdbButton>
<MdbButton rounded={true}>Button</MdbButton>
<MdbButton rounded={true} className="text-white" color="success">Button</MdbButton>
<MdbButton rounded={true} color="danger">Button</MdbButton>
<MdbButton rounded={true} color="info">Button</MdbButton>
<MdbButton rounded={true} color="warning">Button</MdbButton>
<MdbButton rounded={true} color="dark">Button</MdbButton>
<MdbButton rounded={true} color="light">Button</MdbButton>
`}
                                             lang="html"
                                   />
                               </Collapse.Item>

                           </Collapse>
                       </div>

                   </section>



            <section id="outline-button">
                <h4 className="mt-8 mb-2">MDB Outline Button</h4>
                <div className="grid grid-cols-4 w-max gap-2">
                    <MdbButton outline={true}>Button</MdbButton>
                    <MdbButton outline={true} className="text-white" color="secondary">Button</MdbButton>
                    <MdbButton outline={true} className="text-white" color="success">Button</MdbButton>
                    <MdbButton outline={true} color="danger">Button</MdbButton>
                    <MdbButton outline={true} color="info">Button</MdbButton>
                    <MdbButton outline={true} color="warning">Button</MdbButton>
                    <MdbButton outline={true} color="dark">Button</MdbButton>
                    <MdbButton outline={true} color="light">Button</MdbButton>
                </div>
                <div className="border-t pb-4 mt-4">
                    <Collapse initialExpand={[0]}>
                        <Collapse.Item label={(isOpen: boolean)=>(
                            <MdbButton text className="flex items-center gap-x-1">
                                <BiCode fontSize={18} />
                                <span className="text-red-400">{isOpen ? "Hide" : "Show"} Code</span>
                            </MdbButton>
                        )}>
                            <CodeView code={`
<MdbButton outline={true}>Button</MdbButton>
<MdbButton outline={true} className="text-white" color="secondary">Button</MdbButton>
<MdbButton outline={true} className="text-white" color="success">Button</MdbButton>
<MdbButton outline={true} color="danger">Button</MdbButton>
<MdbButton outline={true} color="info">Button</MdbButton>
<MdbButton outline={true} color="warning">Button</MdbButton>
<MdbButton outline={true} color="dark">Button</MdbButton>
<MdbButton outline={true} color="light">Button</MdbButton>
`}
                                      lang="html"
                            />
                        </Collapse.Item>

                    </Collapse>
                </div>
            </section>



            {/*       Swipe able button */}
            <section id="swipeable-button">
                <h4 className="mt-8 mb-2">Swipe Able Button</h4>
                <div className="grid grid-cols-4 w-max gap-2">
                    <SwipeAbleButton render={(activeIndex: number) => (
                            <>
                                <button className={`btn-${activeIndex === 0 ? "secondary" : ""}`}>Our Bootcamp</button>
                                <button className={`btn-${activeIndex === 1 ? "secondary" : ""}`}>Our Course</button>
                            </>
                        )}
                     activeIndex={0}
                     />
                </div>

                <div className="border-t pb-4 mt-4">
                    <Collapse initialExpand={[0]}>
                        <Collapse.Item label={(isOpen: boolean)=>(
                            <MdbButton text className="flex items-center gap-x-1">
                                <BiCode fontSize={18} />
                                <span className="text-red-400">{isOpen ? "Hide" : "Show"} Code</span>
                            </MdbButton>
                        )}>
                            <CodeView code={`
                            
                            <SwipeAbleButton 
                                render={(activeIndex: number) => (
                                    <>
                                        <button className={"btn-{activeIndex === 0 ? "secondary" : "}>Our Bootcamp</button>
                                        <button className={"btn-{activeIndex === 1 ? "secondary" : "}>Our Course</button>
                                    </>
                                )}
                             activeIndex={0}
                             />

`}
                                      lang="html"
                            />
                        </Collapse.Item>

                    </Collapse>
                </div>

            </section>

                    <section id="link-button">
                    <h4 className="mt-8 mb-2">MDB Link Button</h4>
                    <div className="grid grid-cols-4 w-max gap-2">
                        <MdbButton href="#">Button</MdbButton>
                        <MdbButton href={"#"}>Button</MdbButton>
                        <MdbButton href={"#"}>Button</MdbButton>
                        <MdbButton href={"#"}>Button</MdbButton>
                        <MdbButton href={"#"}>Button</MdbButton>
                        <MdbButton href={"#"}>Button</MdbButton>
                        <MdbButton href={"#"}>Button</MdbButton>
                        <MdbButton href={"#"}>Button</MdbButton>
                    </div>
                        <div className="border-t pb-4 mt-4">
                            <Collapse initialExpand={[0]}>
                                <Collapse.Item label={(isOpen: boolean)=>(
                                    <MdbButton text className="flex items-center gap-x-1">
                                        <BiCode fontSize={18} />
                                        <span className="text-red-400">{isOpen ? "Hide" : "Show"} Code</span>
                                    </MdbButton>
                                )}>
<CodeView lang="html" code={`
<MdbButton href="#">Button</MdbButton>
<MdbButton href="#">Button</MdbButton>
<MdbButton href="#">Button</MdbButton>
<MdbButton href="#">Button</MdbButton>
<MdbButton href="#">Button</MdbButton>
<MdbButton href="#">Button</MdbButton>
<MdbButton href="#">Button</MdbButton>
<MdbButton href="#">Button</MdbButton>
`}/>
                                </Collapse.Item>
                            </Collapse>
                        </div>
                    </section>


                    <section id="with-icon-button">
                    <h4 className="mt-8 mb-2">MDB With Icon</h4>
                    <div className="grid grid-cols-4 w-max gap-2">
                        <MdbButton className="flex items-center gap-x-1">
                            <BiHeart size={16}/>
                            Button
                        </MdbButton>
                    </div>
                        <div className="border-t pb-4 mt-4">
                            <Collapse initialExpand={[0]}>
                                <Collapse.Item label={(isOpen: boolean)=>(
                                    <MdbButton text className="flex items-center gap-x-1">
                                        <BiCode fontSize={18} />
                                        <span className="text-red-400">{isOpen ? "Hide" : "Show"} Code</span>
                                    </MdbButton>
                                )}>
                                    <CodeView lang="html" code={`
<MdbButton className="flex items-center gap-x-1">
    <BiHeart size={16}/>
    Button
</MdbButton>
`}/>
                                </Collapse.Item>

                            </Collapse>
                        </div>
                    </section>
                    <section id="icon-button">
                        <h4 className="mt-8 mb-2">Icon Button</h4>
                        <div className="grid grid-cols-4 w-max gap-2">
                        <MdbButton >
                            <FiFacebook size={16}/>
                        </MdbButton>
                        <MdbButton color="danger" >
                            <FiInstagram size={16}/>
                        </MdbButton>
                        <MdbButton color="dark" >
                            <FiGithub size={16}/>
                        </MdbButton>
                    </div>

                        <div className="border-t pb-4 mt-4">
                            <Collapse initialExpand={[0]}>
                                <Collapse.Item label={(isOpen: boolean)=>(
                                    <MdbButton text className="flex items-center gap-x-1">
                                        <BiCode fontSize={18} />
                                        <span className="text-red-400">{isOpen ? "Hide" : "Show"} Code</span>
                                    </MdbButton>
                                )}>
                                    <CodeView lang="html" code={`
<MdbButton >
    <FiFacebook size={16}/>
</MdbButton>
<MdbButton color="danger" >
    <FiInstagram size={16}/>
</MdbButton>
<MdbButton color="dark" >
    <FiGithub size={16}/>
</MdbButton>
`}/>
                                </Collapse.Item>

                            </Collapse>
                        </div>

                    </section>

                        <section id="floating-button">
                    <h4 className="mt-8 mb-2">Floating Icon</h4>
                    <div className="grid grid-cols-4 w-max gap-2">
                        <MdbButton floating>
                            <FiFacebook size={16}/>
                        </MdbButton>
                        <MdbButton floating color="danger" >
                            <FiInstagram size={16}/>
                        </MdbButton>
                        <MdbButton floating color="dark" >
                            <FiGithub size={16}/>
                        </MdbButton>
                    </div>
                            <div className="border-t pb-4 mt-4">
                                <Collapse initialExpand={[0]}>
                                    <Collapse.Item label={(isOpen: boolean)=>(
                                        <MdbButton text className="flex items-center gap-x-1">
                                            <BiCode fontSize={18} />
                                            <span className="text-red-400">{isOpen ? "Hide" : "Show"} Code</span>
                                        </MdbButton>
                                    )}>
                                        <CodeView lang="html" code={`
<MdbButton floating>
    <FiFacebook size={16}/>
</MdbButton>
<MdbButton floating color="danger" >
    <FiInstagram size={16}/>
</MdbButton>
<MdbButton floating color="dark" >
    <FiGithub size={16}/>
</MdbButton>
`}/>
                                    </Collapse.Item>

                                </Collapse>
                            </div>


                        </section>
        </DocsPageLayout>
    );
};

export default ButtonPage;
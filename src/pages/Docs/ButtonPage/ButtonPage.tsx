
import Button from "@app/components/Button/Button.tsx";
import MdbButton from "../../../components/MBD_Button/Button.tsx";
import {BiHeart} from "react-icons/bi";
import {FiFacebook, FiGithub, FiInstagram} from "react-icons/all";


const overviewContent = [
    {label: "Default button", hash: "#default-button"},
    {label: "Neutral button", hash: "#neutral-button"},
    {label: "Icon button", hash: "#icon-button"},
]

const ButtonPage = () => {
    return (
        <div className="w-full docs-content">

            <div className="grid grid-cols-12">
                <div className="col-span-10">
                    <section id="default-button">
                        <h4 className="mt-8 mb-2">Button</h4>
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
                    </section>



                    <section id="mdb-button">
                        <h4 className="mt-8 mb-2">MDB Button</h4>
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
                    </section>


                    <section id="neutral-button">
                        <h4 className="mt-8 mb-2">MDB Neutral  Button </h4>
                        <div className="grid grid-cols-4 w-max gap-2">
                            <MdbButton color="dark">Button</MdbButton>
                            <MdbButton color="light">Button</MdbButton>
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
                    </section>


                    <section id="with-icon-button">
                    <h4 className="mt-8 mb-2">MDB With Icon</h4>
                    <div className="grid grid-cols-4 w-max gap-2">
                        <MdbButton className="flex items-center gap-x-1">
                            <BiHeart size={16}/>
                            Button
                        </MdbButton>



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
                        </section>
                </div>


                {/**** overview section *****/}
                <div className="col-span-2">
                    <div className="sticky-overview-content">
                        {overviewContent.map(content=>(
                            <div>
                                <a href={`${location.pathname}${content.hash}`}>{content.label}</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ButtonPage;
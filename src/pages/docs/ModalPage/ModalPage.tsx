
import useGetActiveHash from "@app/hooks/useGetActiveHash.ts";
import DocsPageLayout from "@app/pages/docs/DocsPageLayout.tsx";
import Tabs from "@app/components/Tabs/Tabs.tsx";
import {CSSTransition} from "react-transition-group";
import Button from "@app/components/MBD_Button/Button.tsx";
import {useState} from "react";

import "../MultiModalPage/style.scss"

const overviewContent = [
    {label: "Default Modal", hash: "#default-modal"},
]


const ModalPage = () => {
    const {activeHash, location }  = useGetActiveHash()

    const [openModalId, setOpenModalId]  =  useState(0)


    return (
        <DocsPageLayout pageTitle="Modal" overviewContent={overviewContent} activeHash={activeHash} location={location}>
            <section id="default-button">
                <h4 className="mt-8 mb-2">Default Modal</h4>
                <div>

                    <div>
                        <Button color="theme" onClick={()=>setOpenModalId(openModalId === 1 ? 0 : 1)}>{openModalId === 1 ? "Close Modal": "Open Modal"} </Button>
                    </div>



                    <div className="add_post_modals ">
                        <CSSTransition unmountOnExit={false} in={openModalId === 1} timeout={400} classNames="modal_base left-modal left-modal">
                            <div className="">
                                <div className="">
                                    <h1 className="modal-title">Basic Modal</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Aliquid asperiores corporis deserunt ea fugiat illum impedit nulla obcaecati, quidem, reiciendis suscipit vitae. Aspernatur possimus quia quo. Accusamus ad consectetur corporis debitis delectus doloribus dolorum earum eligendi est fuga id ipsum minima neque omnis quaerat, qui quos ut voluptas voluptates voluptatum. Adipisci consequatur iure nulla quam tenetur unde. Corporis delectus dignissimos ex itaque omnis quis! Autem corporis cumque delectus dolor et eum expedita explicabo incidunt iusto, nostrum porro, quasi rem repudiandae saepe similique.
                                        Alias aliquam amet aperiam corporis cum deleniti dolorem et,
                                        excepturi exercitationem illum, necessitatibus nisi,
                                        obcaecati quas ratione sint!
                                    </p>
                                    <p>
                                        Aspernatur possimus quia quo. Accusamus ad consectetur corporis trum porro, quasi rem repudiandae saepe similique.
                                        obcaecati quas ratione sint!
                                    </p>
                                    <p>
                                        Aspernatur possimus quia quo. Accusamus ad consectetur corporis trum porro, quasi rem repudiandae saepe similique.
                                        obcaecati quas ratione sint!
                                    </p>

                                    <p>
                                        Aspernatur possimus quia quo. Accusamus ad consectetur corporis trum porro, quasi rem repudiandae saepe similique.
                                        obcaecati quas ratione sint!
                                    </p>  <p>
                                    Aspernatur possimus quia quo. Accusamus ad consectetur corporis trum porro, quasi rem repudiandae saepe similique.
                                    obcaecati quas ratione sint!
                                </p>  <p>
                                    Aspernatur possimus quia quo. Accusamus ad consectetur corporis trum porro, quasi rem repudiandae saepe similique.
                                    obcaecati quas ratione sint!
                                </p>  <p>
                                    Aspernatur possimus quia quo. Accusamus ad consectetur corporis trum porro, quasi rem repudiandae saepe similique.
                                    obcaecati quas ratione sint!
                                </p>  <p>
                                    Aspernatur possimus quia quo. Accusamus ad consectetur corporis trum porro, quasi rem repudiandae saepe similique.
                                    obcaecati quas ratione sint!
                                </p>  <p>
                                    Aspernatur possimus quia quo. Accusamus ad consectetur corporis trum porro, quasi rem repudiandae saepe similique.
                                    obcaecati quas ratione sint!
                                </p>  <p>
                                    Aspernatur possimus quia quo. Accusamus ad consectetur corporis trum porro, quasi rem repudiandae saepe similique.
                                    obcaecati quas ratione sint!
                                </p>  <p>
                                    Aspernatur possimus quia quo. Accusamus ad consectetur corporis trum porro, quasi rem repudiandae saepe similique.
                                    obcaecati quas ratione sint!
                                </p>  <p>
                                    Aspernatur possimus quia quo. Accusamus ad consectetur corporis trum porro, quasi rem repudiandae saepe similique.
                                    obcaecati quas ratione sint!
                                </p>  <p>
                                    Aspernatur possimus quia quo. Accusamus ad consectetur corporis trum porro, quasi rem repudiandae saepe similique.
                                    obcaecati quas ratione sint!
                                </p>  <p>
                                    Aspernatur possimus quia quo. Accusamus ad consectetur corporis trum porro, quasi rem repudiandae saepe similique.
                                    obcaecati quas ratione sint!
                                </p>  <p>
                                    Aspernatur possimus quia quo. Accusamus ad consectetur corporis trum porro, quasi rem repudiandae saepe similique.
                                    obcaecati quas ratione sint!
                                </p>  <p>
                                    Aspernatur possimus quia quo. Accusamus ad consectetur corporis trum porro, quasi rem repudiandae saepe similique.
                                    obcaecati quas ratione sint!
                                </p>  <p>
                                    Aspernatur possimus quia quo. Accusamus ad consectetur corporis trum porro, quasi rem repudiandae saepe similique.
                                    obcaecati quas ratione sint!
                                </p>  <p>
                                    Aspernatur possimus quia quo. Accusamus ad consectetur corporis trum porro, quasi rem repudiandae saepe similique.
                                    obcaecati quas ratione sint!
                                </p>



                                    <Button onClick={()=>setOpenModalId(0)}>Close Modal</Button>

                                </div>
                            </div>
                        </CSSTransition>
                    </div>


                    <div>
                        <Button color="theme" onClick={()=>setOpenModalId(openModalId === 2 ? 0 : 2)}>{openModalId === 2 ? "Close Modal": "Open Modal"} </Button>
                    </div>


                    <div className="add_post_modals ">
                        <CSSTransition unmountOnExit={false} in={openModalId === 2} timeout={400} classNames="modal_base right-modal right-modal">
                            <div className="">
                                <div className="">
                                    <h1 className="modal-title">Basic Modal</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Aliquid asperiores corporis deserunt ea fugiat illum impedit nulla obcaecati, quidem, reiciendis suscipit vitae. Aspernatur possimus quia quo. Accusamus ad consectetur corporis debitis delectus doloribus dolorum earum eligendi est fuga id ipsum minima neque omnis quaerat, qui quos ut voluptas voluptates voluptatum. Adipisci consequatur iure nulla quam tenetur unde. Corporis delectus dignissimos ex itaque omnis quis! Autem corporis cumque delectus dolor et eum expedita explicabo incidunt iusto, nostrum porro, quasi rem repudiandae saepe similique.
                                        Alias aliquam amet aperiam corporis cum deleniti dolorem et,
                                        excepturi exercitationem illum, necessitatibus nisi,
                                        obcaecati quas ratione sint!
                                    </p>
                                    <p>
                                        Aspernatur possimus quia quo. Accusamus ad consectetur corporis trum porro, quasi rem repudiandae saepe similique.
                                        obcaecati quas ratione sint!
                                    </p>
                                    <p>
                                        Aspernatur possimus quia quo. Accusamus ad consectetur corporis trum porro, quasi rem repudiandae saepe similique.
                                        obcaecati quas ratione sint!
                                    </p>

                                    <p>
                                        Aspernatur possimus quia quo. Accusamus ad consectetur corporis trum porro, quasi rem repudiandae saepe similique.
                                        obcaecati quas ratione sint!
                                    </p>  <p>
                                    Aspernatur possimus quia quo. Accusamus ad consectetur corporis trum porro, quasi rem repudiandae saepe similique.
                                    obcaecati quas ratione sint!
                                </p>  <p>
                                    Aspernatur possimus quia quo. Accusamus ad consectetur corporis trum porro, quasi rem repudiandae saepe similique.
                                    obcaecati quas ratione sint!
                                </p>  <p>
                                    Aspernatur possimus quia quo. Accusamus ad consectetur corporis trum porro, quasi rem repudiandae saepe similique.
                                    obcaecati quas ratione sint!
                                </p>  <p>
                                    Aspernatur possimus quia quo. Accusamus ad consectetur corporis trum porro, quasi rem repudiandae saepe similique.
                                    obcaecati quas ratione sint!
                                </p>  <p>
                                    Aspernatur possimus quia quo. Accusamus ad consectetur corporis trum porro, quasi rem repudiandae saepe similique.
                                    obcaecati quas ratione sint!
                                </p>  <p>
                                    Aspernatur possimus quia quo. Accusamus ad consectetur corporis trum porro, quasi rem repudiandae saepe similique.
                                    obcaecati quas ratione sint!
                                </p>  <p>
                                    Aspernatur possimus quia quo. Accusamus ad consectetur corporis trum porro, quasi rem repudiandae saepe similique.
                                    obcaecati quas ratione sint!
                                </p>  <p>
                                    Aspernatur possimus quia quo. Accusamus ad consectetur corporis trum porro, quasi rem repudiandae saepe similique.
                                    obcaecati quas ratione sint!
                                </p>  <p>
                                    Aspernatur possimus quia quo. Accusamus ad consectetur corporis trum porro, quasi rem repudiandae saepe similique.
                                    obcaecati quas ratione sint!
                                </p>  <p>
                                    Aspernatur possimus quia quo. Accusamus ad consectetur corporis trum porro, quasi rem repudiandae saepe similique.
                                    obcaecati quas ratione sint!
                                </p>  <p>
                                    Aspernatur possimus quia quo. Accusamus ad consectetur corporis trum porro, quasi rem repudiandae saepe similique.
                                    obcaecati quas ratione sint!
                                </p>  <p>
                                    Aspernatur possimus quia quo. Accusamus ad consectetur corporis trum porro, quasi rem repudiandae saepe similique.
                                    obcaecati quas ratione sint!
                                </p>  <p>
                                    Aspernatur possimus quia quo. Accusamus ad consectetur corporis trum porro, quasi rem repudiandae saepe similique.
                                    obcaecati quas ratione sint!
                                </p>  <p>
                                    Aspernatur possimus quia quo. Accusamus ad consectetur corporis trum porro, quasi rem repudiandae saepe similique.
                                    obcaecati quas ratione sint!
                                </p>



                                    <Button onClick={()=>setOpenModalId(0)}>Close Modal</Button>

                                </div>
                            </div>
                        </CSSTransition>
                    </div>



                </div>
            </section>

        </DocsPageLayout>
    );
};

export default ModalPage;
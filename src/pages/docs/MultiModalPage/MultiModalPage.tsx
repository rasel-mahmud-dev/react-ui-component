
import useGetActiveHash from "@app/hooks/useGetActiveHash.ts";
import DocsPageLayout from "@app/pages/docs/DocsPageLayout.tsx";
import "./style.scss";
import React, {Suspense, useState} from "react";
import Loading from "@app/components/Loading/Loading.tsx";

import {CSSTransition} from "react-transition-group"
import Button from "@app/components/MBD_Button/Button.tsx";
import {TiTimes} from "react-icons/all";
import MultiStepModal from "@app/components/MultiStepModal/MultiStepModal.tsx";
import Collapse from "@app/components/Collapse/Collapse.tsx";
import MdbButton from "@app/components/MBD_Button/Button.tsx";
import {BiCode} from "react-icons/bi";
import CodeView from "@app/components/CodeView/CodeView.tsx";


const overviewContent = [
    {label: "Default Modal", hash: "#default-modal"},
]


const MultiModalPage = () => {
    const {activeHash, location }  = useGetActiveHash()

    const [modalId, setModalId] = useState(0)



    return (
        <DocsPageLayout pageTitle="Multi Step Modal" overviewContent={overviewContent} activeHash={activeHash} location={location}>
            <section id="default-button">
                <h4 className="mt-8 mb-2">Multi Step Modal</h4>
                <div>

                    <div>
                        {/*<CSSTransition unmountOnExit={true} in={appState.openPostModal} timeout={400} classNames="add_post_modal">*/}

                        <Button onClick={()=>setModalId(1)}>
                            Open Modal
                        </Button>


                        <MultiStepModal isOpen={!!modalId} className="" >

                            <CSSTransition unmountOnExit={true} in={modalId === 1} timeout={400} classNames="modal_content">
                                <div>
                                    <BasicModal setModalId={setModalId} />
                                </div>
                            </CSSTransition>

                            <CSSTransition unmountOnExit={true} in={modalId === 2} timeout={400} classNames="modal_content">
                                <div>
                                    <Suspense fallback={<Loading/>}>
                                        <AddUserModal
                                            setModalId={setModalId}
                                        />
                                    </Suspense>
                                </div>
                            </CSSTransition>

                        </MultiStepModal>

                    </div>
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


import "./style.scss";
import React, {Suspense, useState} from "react";
import Loading from "@app/components/Loading/Loading.tsx";

import {CSSTransition} from "react-transition-group"
import Button from "@app/components/MBD_Button/Button.tsx";
import MultiStepModal from "@app/components/MultiStepModal/MultiStepModal.tsx";


const MultiModalPage = () => {
    const [modalId, setModalId] = useState(0)
    
    return (
        <div>
              <Button onClick={()=>setModalId(1)}>
                 Open Modal
              </Button>
              
                <MultiStepModal isOpen={!!modalId} className="" >
                
                    <CSSTransition unmountOnExit={true} in={modalId === 1} timeout={400} classNames="modal_content">
                        <div>
                            <BasicModal setModalId={setModalId} />
                        </div>
                    </CSSTransition>
                
                    <CSSTransition unmountOnExit={true} in={modalId === 2} timeout={400} classNames="modal_content">
                        <div>
                            <Suspense fallback={<Loading/>}>
                                <AddUserModal
                                    setModalId={setModalId}
                                />
                            </Suspense>
                        </div>
                    </CSSTransition>
                
                </MultiStepModal>
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


function BasicModal({setModalId}: { setModalId: (id: number)=>void }){
    return (
        <div className="modal-inner">
            <div className="flex items-center justify-between">
                <h1 className="modal-title">Basic Modal</h1>
                <Button floating={true} onClick={()=>setModalId(0)}>
                    <TiTimes />
                </Button>
            </div>

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



            <Button onClick={()=>setModalId(2)}>Add user</Button>

        </div>
    )
}


function AddUserModal({setModalId}: { setModalId: (id: number)=>void }){
    return (
        <div>
            <Button onClick={()=>setModalId(1)}>Back</Button>
            <h1 className="modal-title">Add User Modal</h1>
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
        </div>
    )
}

export default MultiModalPage;
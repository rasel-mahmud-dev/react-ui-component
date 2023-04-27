import React from 'react';

import MdbButton from "../../../../components/MBD_Button/Button.tsx";
import {BiCode, BiHeart} from "react-icons/bi";
import useGetActiveHash from "@app/hooks/useGetActiveHash.ts";
import CodeView from "@app/components/CodeView/CodeView.tsx";
import DocsPageLayout from "@app/pages/docs/DocsPageLayout.tsx";
import Collapse from "@app/components/Collapse/Collapse.tsx";
import Input from "@app/components/Form/Input/Input.tsx";
import {useForm} from "react-hook-form";
import MaterialInput from "@app/components/Form/MaterialInput/Input.tsx"
const overviewContent = [

]

const InputPage = () => {

    const {activeHash, location }  = useGetActiveHash()


    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    function onSubmit(){}

    return (
        <DocsPageLayout pageTitle="Input" overviewContent={[]} activeHash={activeHash} location={location}>

            <section id="default-button">
                <h4 className="pb-4 mt-4">Integrate with React Hook form input group</h4>
                <div className="" >

                        <Input
                            label="Email"
                            type="email"
                            error={errors["email"]?.message as string}
                            register={register("email", { required: "Email is required" })}
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
function Login(){

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    return (
     
        <Input
            label="Email"
            type="email"
            error={errors["email"]?.message}
            register={register("email", { required: "Email is required" })}
        />
           
    )
}
`}

                            />
                        </Collapse.Item>

                    </Collapse>
                </div>



            </section>


            <section id="default-button">
                <h4 className="pb-4 mt-4">Material UI Input group</h4>
                <div className="" >

                    <MaterialInput
                        label="Email"
                        type="email"
                     />


                    <MaterialInput
                        label="Username"
                        type="text"
                    />



                </div>
            </section>

        </DocsPageLayout>
    );
};

export default InputPage;
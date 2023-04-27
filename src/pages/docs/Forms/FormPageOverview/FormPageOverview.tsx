import React from 'react';


import MdbButton from "../../../../components/MBD_Button/Button.tsx";
import {BiCode, BiHeart} from "react-icons/bi";
import useGetActiveHash from "@app/hooks/useGetActiveHash.ts";
import CodeView from "@app/components/CodeView/CodeView.tsx";
import DocsPageLayout from "@app/pages/docs/DocsPageLayout.tsx";
import Collapse from "@app/components/Collapse/Collapse.tsx";


const overviewContent = [

]

const FormPageOverview = () => {

    const {activeHash, location }  = useGetActiveHash()

    return (
        <DocsPageLayout pageTitle="Form overview" overviewContent={[]} activeHash={activeHash} location={location}>




        </DocsPageLayout>
    );
};

export default FormPageOverview;

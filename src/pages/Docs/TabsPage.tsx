import React from 'react';
import Button from "@app/components/Button/Button.tsx";
import useGetActiveHash from "@app/hooks/useGetActiveHash.ts";
import DocsPageLayout from "@app/pages/Docs/DocsPageLayout.tsx";

const overviewContent = [
    {label: "Default button", hash: "#default-button"},
    {label: "MDB button", hash: "#mdb-button"},
    {label: "Neutral button", hash: "#neutral-button"},
    {label: "Outline button", hash: "#outline-button"},
    {label: "Rounded button", hash: "#rounded-button"},
    {label: "Link button", hash: "#link-button"},
    {label: "With Icon button", hash: "#with-icon-button"},
    {label: "Icon button", hash: "#icon-button"},
    {label: "Floating button", hash: "#floating-button"},
]


const TabsPage = () => {
    const {activeHash, location }  = useGetActiveHash()

    return (
        <DocsPageLayout pageTitle="Tabs View" overviewContent={overviewContent} activeHash={activeHash} location={location}>
            <section id="default-button">
                <h4 className="mt-8 mb-2">Button</h4>
                <div className=" grid grid-cols-4 w-max gap-4">
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
        </DocsPageLayout>
    );
};

export default TabsPage;
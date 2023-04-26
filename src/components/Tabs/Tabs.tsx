import React from 'react';
import Button from "@app/components/Button/Button.tsx";
import useGetActiveHash from "@app/hooks/useGetActiveHash.ts";

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


const Tabs = () => {
    const {activeHash, location }  = useGetActiveHash()

    return (
        <div className="w-full docs-content">

            <h2 className="text-3xl font-semibold py-2">Tabs View</h2>

            <div className="grid grid-cols-12">
                <div className="col-span-10">
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


                </div>
            </div>


            {/**** overview section *****/}
            <div className="col-span-2">
                <div className="sticky-overview-content">
                    {overviewContent.map(content => (
                        <div className={`content-item ${activeHash === content.hash ? "active-border-left" : ""}`}>
                            <a href={`${location.pathname}${content.hash}`}>{content.label}</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tabs;
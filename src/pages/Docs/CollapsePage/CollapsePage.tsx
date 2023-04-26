import React from 'react';
import Button from "@app/components/Button/Button.tsx";
import useGetActiveHash from "@app/hooks/useGetActiveHash.ts";
import DocsPageLayout, {OverviewContent} from "@app/pages/Docs/DocsPageLayout.tsx";

const overviewContent: OverviewContent[] = []

const CollapsePage = () => {
    const {activeHash, location }  = useGetActiveHash()

    return (
        <DocsPageLayout pageTitle="Buttons" overviewContent={overviewContent} activeHash={activeHash} location={location}>


        <div className="container">
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

            </div>
        </DocsPageLayout>
    );
};

export default CollapsePage;
import React from 'react';
import Button from "@app/components/Button/Button.tsx";

const CollapsePage = () => {
    return (

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
    );
};

export default CollapsePage;
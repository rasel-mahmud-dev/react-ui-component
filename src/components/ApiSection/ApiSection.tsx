import React, {FC, HTMLAttributes} from 'react';



type Props = HTMLAttributes<HTMLDivElement>

const ApiSection: FC<Props> = (props) => {
    return (
        <div className="api-section-root">
            <section id="api" className="">
                <div className="api-section">
                    <h4 className=" mt-4 page-subtitle">API</h4>
                </div>
            </section>


            {props.children ? props.children : (
                <div className="bg-primary-10/30 py-2 px-4 rounded text-dark-300 font-medium ">
                    <h3>Coming soon</h3>
                </div>
            )}

        </div>
    );
};

export default ApiSection;
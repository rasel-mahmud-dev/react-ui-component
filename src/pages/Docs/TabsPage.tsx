import React from 'react';
import Button from "@app/components/Button/Button.tsx";
import useGetActiveHash from "@app/hooks/useGetActiveHash.ts";
import DocsPageLayout from "@app/pages/Docs/DocsPageLayout.tsx";
import Tabs from "@app/components/Tabs/Tabs.tsx";

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

const tabData = [
    {label: "Vouchers", content: "lsdfjlskdfsdf"},
    {label: "Trial Balance", content: "lsdfjlskdfsdf"},
    {label: "Profit & Loss", content: "lsdfjlskdfsdf"},
    {label: "Balance Sheet", content: "lsdfjlskdfsdf"},
    {label: "Ledger Management", content: "lsdfjlskdfsdf"},
    {label: "Overview Management", content: "lsdfjlskdfsdf"},
]


const TabsPage = () => {
    const {activeHash, location }  = useGetActiveHash()

    return (
        <DocsPageLayout pageTitle="Tabs View" overviewContent={overviewContent} activeHash={activeHash} location={location}>
            <section id="default-button">
                <h4 className="mt-8 mb-2">Horizontal Tab</h4>
                <div>
                    <Tabs initialOpen={1}>
                        <Tabs.Tab label="Home">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam corporis culpa, eligendi eos expedita, inventore molestiae neque optio quae repellendus suscipit totam, vitae. Ad aperiam, consequuntur, culpa deleniti et harum labore optio quasi, quidem repellendus repudiandae ullam? Assumenda error, et, fugit in ipsa, maxime minus nulla quaerat reprehenderit temporibus unde!
                            </p>
                        </Tabs.Tab>
                        <Tabs.Tab label="Home">
                            <div className="max-h-[400px] overflow-y-auto">
                                <p>
                                    Aperiam corporis culpa, eligendi eos expedita, inventore molestiae neque optio quae repellendus suscipit totam, vitae. Ad aperiam, consequuntur, culpa deleniti et harum labore optio quasi, quidem repellendus repudiandae ullam? Assumenda error, et, fugit in ipsa, maxime minus nulla quaerat reprehenderit temporibus unde!
                                </p><p>
                                Aperiam corporis culpa, eligendi eos expedita, inventore molestiae neque optio quae repellendus suscipit totam, vitae. Ad aperiam, consequuntur, culpa deleniti et harum labore optio quasi, quidem repellendus repudiandae ullam? Assumenda error, et, fugit in ipsa, maxime minus nulla quaerat reprehenderit temporibus unde!
                            </p><p>
                                Aperiam corporis culpa, eligendi eos expedita, inventore molestiae neque optio quae repellendus suscipit totam, vitae. Ad aperiam, consequuntur, culpa deleniti et harum labore optio quasi, quidem repellendus repudiandae ullam? Assumenda error, et, fugit in ipsa, maxime minus nulla quaerat reprehenderit temporibus unde!
                            </p><p>
                                Aperiam corporis culpa, eligendi eos expedita, inventore molestiae neque optio quae repellendus suscipit totam, vitae. Ad aperiam, consequuntur, culpa deleniti et harum labore optio quasi, quidem repellendus repudiandae ullam? Assumenda error, et, fugit in ipsa, maxime minus nulla quaerat reprehenderit temporibus unde!
                            </p><p>
                                Aperiam corporis culpa, eligendi eos expedita, inventore molestiae neque optio quae repellendus suscipit totam, vitae. Ad aperiam, consequuntur, culpa deleniti et harum labore optio quasi, quidem repellendus repudiandae ullam? Assumenda error, et, fugit in ipsa, maxime minus nulla quaerat reprehenderit temporibus unde!
                            </p>
                            </div>
                        </Tabs.Tab>
                    </Tabs>
                </div>
            </section>

            <section id="default-button">
                <h4 className="mt-8 mb-2">Horizontal Tab</h4>
                <div>
                    <Tabs initialOpen={1} className="border-style">
                        {tabData.map(tab=>(
                            <Tabs.Tab label={tab.label}>
                                <div>
                                    {tab.label}
                                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi asperiores consequuntur cum delectus eligendi error eum ex excepturi explicabo facilis fugiat hic id modi nihil, odio perferendis quam repellendus sapiente sed, similique sint sit voluptatem. Ab animi dolor doloremque expedita fugit maiores numquam obcaecati, quas rem sapiente sed unde.</p>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi asperiores consequuntur cum delectus eligendi error eum ex excepturi explicabo facilis fugiat hic id modi nihil, odio perferendis quam repellendus sapiente sed, similique sint sit voluptatem. Ab animi dolor doloremque expedita fugit maiores numquam obcaecati, quas rem sapiente sed unde.</p>
                                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi asperiores consequuntur cum delectus eligendi error eum ex excepturi explicabo facilis fugiat hic id modi nihil, odio perferendis quam repellendus sapiente sed, similique sint sit voluptatem. Ab animi dolor doloremque expedita fugit maiores numquam obcaecati, quas rem sapiente sed unde.git </p>
                                </div>
                            </Tabs.Tab>
                        ))}
                    </Tabs>
                </div>
            </section>
        </DocsPageLayout>
    );
};

export default TabsPage;
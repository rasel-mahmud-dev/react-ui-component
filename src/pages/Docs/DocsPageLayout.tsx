import  {FC, ReactElement} from 'react';

export type OverviewContent={
    label: string,
    hash: string
}
interface Props {
    pageTitle: string,
    overviewContent: OverviewContent[]
    activeHash: string
    children: ReactElement[] | string
    location: any
}




const DocsPageLayout : FC<Props>= (props) => {

    const {pageTitle, overviewContent, activeHash, children, location} = props

    return (
        <
            div>
            <div className="w-full docs-content">

                <h2 className="text-3xl font-semibold py-2">{pageTitle}</h2>

                <div className="grid grid-cols-12">
                    <div className="col-span-10">
                        {children}
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
            </div>
        </div>
    );
};

export default DocsPageLayout;
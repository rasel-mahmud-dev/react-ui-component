import React from 'react';
import Prism from "prismjs"

// import loadLanguages from 'prismjs/components';
// loadLanguages(['haml']);

import "./style.scss"


const CodeView = ({code, lang}: {code: string, lang: any}) => {


// Returns a highlighted HTML string
    const html = Prism.highlight(code, Prism.languages[lang], lang || "html");


    return (
        <div>

            <div className="code-preview">
                <pre>

                <code>
                    <div dangerouslySetInnerHTML={{__html: html.trimStart()}}></div>
                </code>
                </pre>
            </div>
        </div>
    );
};

export default CodeView;

// import Prism from "prismjs"

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import hljs from "highlight.js"

import "highlight.js/scss/atom-one-light.scss"
// import loadLanguages from 'prismjs/components';
// loadLanguages(['haml']);

// import javascript from 'highlight.js/lib/languages/javascript';
// hljs.registerLanguage('javascript', javascript);

import "./style.scss"


const CodeView = ({code, lang, className = ""}: {code: string, lang: any, className?: string}) => {


// Returns a highlighted HTML string
//     const html = Prism.highlight(code, Prism.languages[lang], lang || "html");

    const html = hljs.highlight(code, {language: lang}).value

    return (
        <div>

            <div className={`code-preview ${className}`}>
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
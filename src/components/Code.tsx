import React from 'react'
import {LightAsync as SyntaxHighlighter} from 'react-syntax-highlighter';
import {atomOneDark} from "react-syntax-highlighter/dist/cjs/styles/hljs";

interface codeProps {
    language: string;
    codeData: string;
}

export const Code = ({language, codeData}: codeProps) => {
    return (
        <SyntaxHighlighter language={language} style={atomOneDark} showLineNumbers={true} customStyle={{padding: "10px 10px 10px 0", width: "calc(100% - 10px)", borderRadius: "8px", height: "310px", overflow: "scroll"}}>
            {codeData}
        </SyntaxHighlighter>
    )
}
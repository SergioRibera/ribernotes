import React from 'react'
import ReactDOM from 'react-dom'
import { createReactEditorJS } from "react-editor-js";

import { EDITOR_JS_TOOLS } from "./constants";

const ReactEditorJS = createReactEditorJS()

const App = () => {
    const handleInit = (editor) => {
        // editor.save().then(console.log);
        console.log('Editor.js initialized', editor)
    }
    return (
        <React.StrictMode>
            <ReactEditorJS
                tools={EDITOR_JS_TOOLS}
                defaultValue={{}}
                onInitialize={handleInit}
            />
        </React.StrictMode>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

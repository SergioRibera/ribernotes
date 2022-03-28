import React from 'react'
import ReactDOM from 'react-dom'
import { createReactEditorJS } from "react-editor-js"
import './index.css'

import { EDITOR_JS_TOOLS } from "./constants"

const ReactEditorJS = createReactEditorJS()

const App = () => {
    const [editorState, setEditorState] = React.useState(null)
    const handleInit = (editor) => {
        console.log('Editor.js initialized', editor)
        setEditorState(editor)
    }

    // if auto save is enable, get data from editor
    // editorState.save().then(data => console.log(data))

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

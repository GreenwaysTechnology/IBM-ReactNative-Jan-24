import ReactDOM from "react-dom/client"
import React from "react"

// const Welcome = () => {
//     return <h1>Hello</h1>
//             <span>test</span>
// }

const Welcome = () => {
    return <div>
        <h1>Hello</h1>
        <span>test</span>
    </div>
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(<Welcome />)
import ReactDOM from "react-dom/client"
// import React, { Fragment } from "react"

// const Welcome = () => {
//     return <div>
//         <h1>Hello</h1>
//         <span>test</span>
//     </div>
// }
// const Welcome = () => {
//     return <React.Fragment>
//         <h1>Hello</h1>
//         <span>test</span>
//     </React.Fragment>
// }
// const Welcome = () => {
//     return <Fragment>
//         <h1>Hello</h1>
//         <span>test</span>
//     </Fragment>
// }
const Welcome = () => {
    return <>
        <h1>Hello</h1>
        <span>test</span>
    </>
}


const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(<Welcome />)
import ReactDOM from "react-dom/client"

const welcome = () => {
    return <>
        <h1>Hello</h1>
        <span>test</span>
    </>
}


const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(<welcome />)
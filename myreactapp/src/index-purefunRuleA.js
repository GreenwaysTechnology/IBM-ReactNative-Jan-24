import ReactDOM from "react-dom/client"

const Hello = props => {
    //props are read only.
    //props.message = 'foo'
    return <>
       <h1>{props.message}</h1>
    </>
}


const App = () => {
    return <Hello message="hello" />
}
const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App />)
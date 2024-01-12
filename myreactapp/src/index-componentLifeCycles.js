import React from "react"
import ReactDOM from "react-dom/client"

//parent component
class Parent extends React.Component {

    constructor() {
        super()
        console.log('parent component')
    }
    render() {
        console.log('parent render')
        return <>
            <Child />
        </>
    }
    componentDidMount() {
        console.log('Parent componentDidMount')
    }
}
//child component
class Child extends React.Component {

    constructor() {
        super()
        console.log('Child component')
    }
    render() {
        console.log('Child render')
        return <>

        </>
    }

    componentDidMount() {
        console.log('Child componentDidMount')
    }


}


const App = () => {
    return <>
        <Parent />
    </>
}
const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App />)
import ReactDOM from "react-dom/client"
import React from "react"

class Welcome extends React.Component {
    //override method called "render" where we can write jsx code 
    render() {
        return <h1>Welcome!!</h1>
    }
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'))

rootElement.render(<Welcome />)
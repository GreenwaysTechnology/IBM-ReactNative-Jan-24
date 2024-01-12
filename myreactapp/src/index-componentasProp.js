import React from "react"
import ReactDOM from "react-dom/client"
import logo from './logo.svg';

//Component as Prop 

const Header = props=> {
    return <>
        <h1>This is header</h1>
        {props.children}
    </>
}

const Logo = props=>{
    return <>
        <img alt="logo" src={logo} width={100} height={100} />
    </>
}

const App = () => {
    return <>
        {/* <Header/> */}
        <Header>
            <h1>IBM</h1>
            <Logo />
        </Header>
    </>
}
const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App />)
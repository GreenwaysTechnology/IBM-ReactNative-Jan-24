import ReactDOM from "react-dom/client"


//es 5 function 
// function Welcome() {
//     //must return jsx code 
//     return <h1>Hello!!</h1>
// }
//es 6 arrow function 
// const Welcome = () => {
//     return <h1>Welcome</h1>
// }
const Welcome = () => <h1>Welcome</h1>


const rootElement = ReactDOM.createRoot(document.getElementById('root'))

//imperative way:
// rootElement.render(Welcome())
//declarative syntax:
// rootElement.render(<Welcome></Welcome>)
rootElement.render(<Welcome />)
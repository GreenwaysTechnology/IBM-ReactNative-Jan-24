//write first component.
import ReactDOM from "react-dom/client"

//variable Pattern
const Welcome = <h1>Hello!</h1>

//insert Welcome to into root element
const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(Welcome)
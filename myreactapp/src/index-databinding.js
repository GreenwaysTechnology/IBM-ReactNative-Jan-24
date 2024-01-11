import ReactDOM from "react-dom/client"

//dynamic ui = {markup + data}

const Welcome = () => {
    let name = 'Subramanian Murugan'
    let age = 18
    let status = true
    let address = {
        city: 'Coimbatore'
    }
    let skills = ["javascript", "java", "react", "react native", "microservices"]
    return <>
        <h1>Your name is {name}</h1>
        <h1>Your age is {age}</h1>
        <h1>Your Status is {status ? "Available" : "Not Available"}</h1>
        <h1>Your City is {address.city}</h1>
        <h2>Your skills</h2>
        <ol>
            {
                skills.map(skill => {
                    return <li>{skill}</li>
                })
            }
        </ol>
    </>
}


const App = () => {
    return <Welcome />
}
const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App />)
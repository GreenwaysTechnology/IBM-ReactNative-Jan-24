import ReactDOM from "react-dom/client"

const Profile = (props) => {
    return <div>
        <h1>Profile Details</h1>
        <h2>Id : {props.id}</h2>
        <h2>Name :{props.name}</h2>
        <h2>Status : {props.status ? "Available" : "Not Available"}</h2>
        <h2>Age : {props.age}</h2>
        <address>
            <p>city: {props.address.city}</p>
        </address>
        <ol>
            {
                props.skills.map(skill => {
                    return <li>{skill}</li>
                })
            }
        </ol>
    </div>
}
const App = () => {
    return <>
        <Profile id={1} name="Subramaian Murugan" age={18} status={true} address={{ city: 'Coimbatore' }} skills={["react", "java"]} />
        <Profile id={2} name="Murugan" age={34} status={false} address={{ city: 'Delhi' }} skills={["microservices", "node js"]} />
        <Profile id={3} name="Ram" age={34} status={true} address={{ city: 'Pune' }} skills={["microservices", "node js"]} />
    </>
}
const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App />)
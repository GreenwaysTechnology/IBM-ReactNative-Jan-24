import ReactDOM from "react-dom/client"

// const Profile = (id, name) => {

//     return <div>
//         <h1>Profile Details</h1>
//         <h2>Id : {id}</h2>
//         <h2>Name :{name}</h2>
//     </div>
// }

//abc =  object  - > {id:1,name:'Subramanian'}
//abc is property or props
// const Profile = (abc) => {
//     return <div>
//         <h1>Profile Details</h1>
//         <h2>Id : {abc.id}</h2>
//         <h2>Name :{abc.name}</h2>
//     </div>
// }
const Profile = (props) => {
    console.log(props)
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
    // return Profile(1, 'Subramanian Murugan')
    let age = 18
    let status = true
    let address = {
        city: 'Coimbatore'
    }
    let skills = ["javascript", "java", "react", "react native", "microservices"]

    return <Profile id={1} name="Subramaian Murugan" age={age} status={status} address={address} skills={skills} />
}
const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App />)
import ReactDOM from "react-dom/client"
import { PROFILES } from "./mock-data/profile"

const Address = props => {
    return <address>
        <p>city: {props.address.city}</p>
    </address>
}
const SkillsList = props => {
    return <ol>
        {
            props.skills.map(skill => {
                return <SkillsListItems skill={skill} />
            })
        }
    </ol>
}
const SkillsListItems = props => {
    return <li>{props.skill}</li>
}
const Profile = props => {
    return <div>
        <h1>Profile Details</h1>
        <h2>Id : {props.id}</h2>
        <h2>Name :{props.name}</h2>
        <h2>Status : {props.status ? "Available" : "Not Available"}</h2>
        <h2>Age : {props.age}</h2>
        <Address address={props.address} />
        <SkillsList skills={props.skills} />
    </div>
}
const App = () => {
    return <>
        {
            PROFILES.map(profile => {
                return <Profile id={profile.id} age={profile.age} name={profile.name} status={profile.status} address={profile.address} skills={profile.skills} />
            })
        }
    </>
}
const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App />)
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
const ProfileMaster = props => {
    //what if i want to pass all properties from this component to another component.
    // return <ProfileDetails id={props.id} name={props.name} status={props.status} age={props.age} address={props.address} skills={props.skills} />
    //in order to send all data we can use short cut: spread operator.
    return <ProfileDetails {...props} title="Profile Details" />
}

const ProfileDetails = props => {
    return <div>
        <h1>{props.title}</h1>
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
                return <ProfileMaster id={profile.id} age={profile.age} name={profile.name} status={profile.status} address={profile.address} skills={profile.skills} />
            })
        }
    </>
}
const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App />)
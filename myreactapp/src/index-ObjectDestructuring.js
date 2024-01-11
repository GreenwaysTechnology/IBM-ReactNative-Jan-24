import ReactDOM from "react-dom/client"
import { PROFILES } from "./mock-data/profile"

const Address = ({ address: { city } }) => <address>
    <p>city: {city}</p>
</address>

const SkillsList = ({ skills }) => <ol>{
    skills.map(skill => <SkillsListItems skill={skill} />)
}</ol>

const SkillsListItems = ({ skill }) => <li>{skill}</li>

const ProfileMaster = props => <ProfileDetails {...props} title="Profile Details" />

const ProfileDetails = props => {
    const { id, name, status, age, address, skills, title } = props
    return <div>
        <h1>{title}</h1>
        <h2>Id : {id}</h2>
        <h2>Name :{name}</h2>
        <h2>Status : {status ? "Available" : "Not Available"}</h2>
        <h2>Age : {age}</h2>
        <Address address={address} />
        <SkillsList skills={skills} />
    </div>
}
const App = () => <>
    {
        PROFILES.map(profile => {
            return <ProfileMaster id={profile.id} age={profile.age} name={profile.name} status={profile.status} address={profile.address} skills={profile.skills} />
        })
    }
</>

const rootElement = ReactDOM.createRoot(document.getElementById('root'))
rootElement.render(<App />)
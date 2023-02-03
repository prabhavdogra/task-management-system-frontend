import InputTile from "../components/InputTile";
import '../styles/settings.scss'

const Settings = () => {
    return ( 
    <div className="settings">
        <div className="heading">
            User Details
        </div>
        <InputTile fieldData={{label: "First Name", value:"Prabhav"}}/>
        <InputTile fieldData={{label: "Last Name", value:"Dogra"}}/>
        <InputTile fieldData={{label: "Name", value:"Prabhav"}}/>
        <InputTile fieldData={{label: "Name", value:"Prabhav"}}/>
    </div> );
}
 
export default Settings;
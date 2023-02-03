import InputTile from "../components/InputTile";
import '../styles/settings.scss'

const Settings = () => {
    return ( 
    <div className="settings">
        <div className="heading">
            User Details
        </div>
        <InputTile fieldData={{label: "Name", value:"Prabhav Dogra"}}/>
        <InputTile fieldData={{label: "Email", value:"prabhav.dogra@zomato.com"}}/>
        <InputTile fieldData={{label: "Phone Number", value:"9999206777"}}/>
        <div className="setting-button">
            <div>
                <button>
                    Save
                </button>
            </div>
            <div>
                <button>
                    Sign Out
                </button>
            </div>
        </div>
    </div> );
}
 
export default Settings;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FixedInputTile from "components/FixedInputTile";
import Header from "components/HeaderComponent";
import InputTile from "components/InputTile";
import 'styles/settings.scss'
import Loading from "pages/Loading";

const Settings = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [userInfo, setUserInfo] = useState(null)
    let navigate = useNavigate();
    const SaveDetails = () => {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phoneno").value;
        const JWTtoken = localStorage.getItem('token')
        var taskDetails = {
            "name" : name,
            "phone_no" : phone,
        }
        setIsLoading(true);
        
        setUserInfo({
            "name": name,
            "email_id": email,
            "phone_no": phone,
        })
        fetch("http://localhost:3000/api/user/update", {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                "Authorization": JWTtoken
            },
            body: JSON.stringify(taskDetails)
        }).then((response) => {
            if(response.status !== 200) {
                console.log("Something went wrong", response.status);
            }
            setIsLoading(false);
        })
    }

    useEffect(() => {
        const JWTtoken = localStorage.getItem('token')
        setIsLoading(true);
        fetch("http://localhost:3000/api/user/get", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": JWTtoken
            },
        }).then((response) => {
            if(response.status === 200) {
                response.text().then((data) => {
                    const userData = JSON.parse(data)
                    setUserInfo(userData)
                    setIsLoading(false)
                })
            } else {
                console.log("Something went wrong", response.status);
            }
        })
    }, [])

    const Logout = () => {
        const JWTtoken = localStorage.getItem('token')
        fetch("http://localhost:3000/api/auth/logout", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization" : JWTtoken
            },
            body: JSON.stringify({})
        }).then((response) => {
            if(response.status !== 200) {
                console.log("Something went wrong", response.status);
            } else {
                navigate(`/login`);
            }
        });
    }

    return ( 
    <>
        <div className="settings-page">
            <Header selectedTab="header-settings"/>
            {
            isLoading
            ?
            <Loading/>
            :
            <div className="settings">
                    <div className="heading">
                        User Details
                    </div>
                    <InputTile fieldData={{label: "Name", value: (userInfo === null) ? "" : userInfo["name"], inputDivID:"name"}}/>
                    <FixedInputTile fieldData={{label: "Email", value: (userInfo === null) ? "" :userInfo["email_id"], inputDivID:"email"}}/>
                    <InputTile fieldData={{label: "Phone Number", value: (userInfo === null) ? "" : userInfo["phone_no"], inputDivID:"phoneno"}}/>
                    <div className="setting-button">
                        <div>
                            {
                                isLoading
                                ?
                                <Loading/>
                                :
                                <button onClick={SaveDetails}>
                                    Save
                                </button>

                            }
                        </div>
                        <div>
                            <button onClick={() => Logout()}>
                                Sign Out
                            </button>
                        </div>
                    </div>
            </div> 
            }
        </div>
    </>
    );
}
 
export default Settings;
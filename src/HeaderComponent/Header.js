import { useLocation, useNavigate } from "react-router-dom";
import './Header.css'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Service from "../Service";
const Header = () => {
    const location = useLocation()
    const navigations = ["home", "filters","instructions", "favorites","myprofile", "signout"];
    const navigate = useNavigate();
    const [selected,setSelected] = useState(location?.pathname.slice(1) || "home")
    const [isLoading,setIsLoading] = useState(false);
    
    const navigateTo = (value) => {
        setSelected(value);

        if (value === "signout") {
            setIsLoading(true)
            const user_id = localStorage.getItem('user')
            // Service().logout(user_id).then((data)=>{
            //     if(data?.success){
            localStorage.removeItem('user'); 
            navigate('/signin');
                // }
            setIsLoading(false);
            // })
             // Redirect to sign-in page
        } else {
            navigate('/' + value);
        }
    };
    return (
        <div className="headerLayout">
            {isLoading && (<div className="loader-container"> <div className="loader"> </div></div>)}
            <div className = "row">
                <div className="col-md-6 header-leftpane">
                    Header
                </div>
                <div className="col-md-6 header-rightpane">
                    { navigations.map((item)=>(
                        <div key={item} className={`navigationButton ${selected == item? 'active':''}`} onClick={()=>navigateTo(item)}>
                            {item}
                        </div>
                    ))                        
                    }        
                </div>
            </div>
        </div>
    )
}

export default Header;
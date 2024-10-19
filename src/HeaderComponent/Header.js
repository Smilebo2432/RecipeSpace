import { useLocation, useNavigate } from "react-router-dom";
import './Header.css'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
    const location = useLocation()
    const navigations = [{id:"home",label:'About'}, {id:"filters",label:'Recipes'},{id:'myprofile', label:'My Profile'}, {id:"favorites",label:'My Favorite Recipes'}, {id:"signout",label:'Sign Out'}];
    const navigate = useNavigate();
    const [selected,setSelected] = useState(location?.pathname.slice(1) || "home")
    const [isLoading,setIsLoading] = useState(false);
    
    const navigateTo = (value) => {
        setSelected(value);

        if (value === "signout") {
            setIsLoading(true)
            // const user_id = localStorage.getItem('user')
            
            localStorage.removeItem('user'); 
            navigate('/signin');
                
            setIsLoading(false);
            
        } else {
            navigate('/' + value);
        }
    };
    return (
        <div className="headerLayout">
            {isLoading && (<div className="loader-container"> <div className="loader"> </div></div>)}
            <div className = "row">
                <div className="col-md-2 header-leftpane">
                    Header
                </div>
                <div className="col-md-10 header-rightpane">
                    { navigations.map((item)=>(
                        <div key={item.id} className={`navigationButton ${selected === item.id? 'active':''}`} onClick={()=>navigateTo(item.id)}>
                            {item.label + "  "}{item.id==='signout' && <FontAwesomeIcon icon={faSignOut} />}
                        </div>
                    ))                        
                    }        
                </div>
            </div>
        </div>
    )
}

export default Header;
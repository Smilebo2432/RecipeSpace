import { useState } from 'react';
import './SignIn.css'
import { useNavigate } from 'react-router-dom';
import Service from '../Service';
const SignIn = () => {
    const navigate = useNavigate()
    const [user,setUser]=useState({
        username:"",
        password:""
    })
    const [isLoading,setIsLoading] = useState(false);
    const [showMsg,setShowMsg] = useState(false);
    const [isInvalidCredentials,setIsInvalidCredentials] = useState(false);
    const changeValue = (field, e) => {
        setUser((prev)=>({
            ...prev,
            [field]:e.target.value
        }))
    }
    const singIn = async () => {
        setIsInvalidCredentials(false);
        setShowMsg(false);
        if(!user || !user.username || !user.password){
            setShowMsg(true);
        }
        setIsLoading(true);
        Service().signIn(user.username,user.password).then((data)=> {
            if(data?.success){
                localStorage.setItem("user",data.user_id);
                navigate("/");
                setIsLoading(false);
            }
            else{
                setIsLoading(false);
                setIsInvalidCredentials(true);
            }
            
        }).catch((err)=>{
            setIsLoading(false);
            navigate('/somethingwentwrong',{state:{message:"Something went wrong while loging in...."+err}})
        });
    }
    return (
        <div className="MyProfileLayout">    
            {isLoading && (<div className="loader-container"> <div className="loader"> </div></div>)}        
            
            <div className='MyProfileSection1'>
            {showMsg && <h6> Please do not leave empty </h6>}
            {isInvalidCredentials && <h6> Invalid Credentials </h6>}
                <div className='MyProfileItem'>
                    <label className='ProfileHeading' for="username">
                        Username
                    </label>
                    <div className='ProfileValue'>
                        <input placeholder="Enter Username" id="username" className='form-control' onChange={(e)=>changeValue("username",e)}/>
                    </div>
                </div>
                <div className='MyProfileItem'>
                    <label className='ProfileHeading' for="password">
                        Password
                    </label>
                    <div className='ProfileValue'>
                        <input placeholder="Enter Password" id="password" type="password" className='form-control' onChange={(e)=>changeValue("password",e)}/>
                    </div>
                </div>
                <div className='loginBt'>
                    <div className='ogout'>
                        <button className='btn' onClick={singIn}>Login</button>
                    </div>
                    <div className='ogout'>
                        <button className='btn' onClick={()=>navigate('/signup')}>SignUp</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;
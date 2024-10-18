import { useState } from 'react';
import './SignUp.css'
import { useNavigate } from 'react-router-dom';
import Service from '../Service';
import { toast } from 'react-toastify';
const SignUp = () => {
    const navigate = useNavigate()
    const [user,setUser]=useState({
        username:"",
        password:"",
        confirmPassword:''
    })
    const changeValue = (field, e) => {
        user[field] = e.target.value;
    }
    const [showMsg,setShowMsg] = useState(false);
    const signUp = () => {
        setShowMsg(false)
        if(user.password != user.confirmPassword){
            setShowMsg(true)
            return;
        }
        Service().signUp(user.username,user.password).then((data)=>{
            if(data?.success){
                toast.success("User sucessfully signed up. Please login.")
                Service().createUser(data.user_id).then((res)=>{
                    if(res.success){
                        toast.success('User created successfully');
                        navigate('/signin');
                    }
                }).catch((err)=>{
                    console.log("Error while creating user"+err);
                })
            }
        }).catch((err)=>{
            navigate('/somethingwentwrong',{state:{message:"Not able to sucessfully sign up"+err}})
            // console.log(err);
        });
    }
    return (
        <div className="MyProfileLayout">      
               
            <div className='MyProfileSection1'>
            {showMsg && (<h6> Password do not match </h6>)}   
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
                <div className='MyProfileItem'>
                    <label className='ProfileHeading' for="password">
                       Confirm Password
                    </label>
                    <div className='ProfileValue'>
                        <input placeholder="Re-enter Password" type="password" id="password" className='form-control' onChange={(e)=>changeValue("confirmPassword",e)}/>
                    </div>
                </div>
                <div className='loginBt'>
                    <div className='ogout'>
                        <button className='btn' onClick={signUp}>Sign Up</button>
                    </div>
                    <div className='ogout'>
                        <button className='btn' onClick={()=>navigate('/signin')}>Go to Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;
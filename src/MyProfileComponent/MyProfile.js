import { useEffect, useState } from 'react'
import './MyProfile.css'
import Service from '../Service'
const MyProfile = () => {
    const profileKeys=[{label:'First Name',id:'firstname'},{label:'Last Name',id:'lastname'},{label:'Email',id:'email'},{label:'Phone Number',id:'phone'}]
    const user_id= localStorage.getItem('user')
    const [user,setUser] = useState({
        user_id:user_id
    })
    const changeValue = (field, e) => {
        setUser((prev)=>({
            ...prev,
            [field]: e.target.value
        }))
    }
    const [isEdit,setIsEdit] = useState(false);
    const retrieveUser = () => {
        Service().fetchUser(user_id).then((data)=>{
            console.log(data);
            setUser((prev) => ({
                ...prev,
                ...data.user
            }));
        }).catch((err) => {console.log("error"+err)})
    }
    const saveUser = () => {
        Service().updateUser(user).then((res)=>{
            if(res.success){
                setIsEdit(false);
                retrieveUser();
            }
        }).catch((err)=>{console.log("error whilesaving..."+err)});
    }
    useEffect(()=>{
        retrieveUser()
    },[])
    return (
        <div className="MyProfileLayout">            
            <div className='MyProfileSection'>
                {profileKeys.map((item)=>
                (<div className='MyProfileItem' key={item.id}>
                    <label className='ProfileHeading' for={item.id}>
                        {item.label}
                    </label>
                    <div className='ProfileValue'>
                        <input value={user[item.id]||''} disabled={!isEdit} placeholder={item.label} id={item.id} className='form-control' onChange={(e)=>changeValue(item.id,e)}/>
                    </div>
                </div>))}
                {isEdit && (<div className='logout'>
                    <button className='btn' onClick={saveUser}>Save</button>
                    <button className='btn' onClick={()=>{setIsEdit(false)}}>Cancel</button>
                </div>)}
                {!isEdit && (<div className='logout'>
                    <button className='btn' onClick={()=>{setIsEdit(true)}}>Edit</button>
                </div>)}
            </div>
        </div>
    )
}

export default MyProfile;
import { useEffect, useState } from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import Service from '../Service';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const SignUp = () => {
    const navigate = useNavigate();
    const user = {
        username: "",
        password: "",
        confirmPassword: ''
    };

    const [showTermsAndConditions, setShowTermsAndConditions] = useState(false);
    const [agreed, setAgreed] = useState(null);
    const [showMsg, setShowMsg] = useState(false);

    const changeValue = (field, e) => {
        user[field] = e.target.value;
    };

    const signUp = () => {
        setShowMsg(false);

        if (user.password ===''|| (user.password !== user.confirmPassword)) {
            setShowMsg(true);
            return;
        }

        if (!agreed) {
            setShowMsg(true);
            return;
        }

        Service().signUp(user.username, user.password).then((data) => {
            if (data?.success) {
                toast.success("User successfully signed up. Please login.");
                Service().createUser(data.user_id).then((res) => {
                    if (res.success) {
                        toast.success('User created successfully');
                        navigate('/signin');
                    }
                }).catch((err) => {
                    console.log("Error while creating user" + err);
                });
            }
        }).catch((err) => {
            navigate('/somethingwentwrong', { state: { message: "Not able to successfully sign up" + err } });
        });
    };

    useEffect(() => {
        console.log(showTermsAndConditions);
    }, [showTermsAndConditions]);

    return (
        <div className="MyProfileLayout">
           {!showTermsAndConditions ? ( <div className='MyProfileSection1'>
                {showMsg && !agreed ? (<h6> Please agree to the terms and conditions </h6>) : null}
                {showMsg && user.password ==='' || user.password !== user.confirmPassword ? (<h6> Passwords do not match </h6>) : null}

                <div className='MyProfileItem'>
                    <label className='ProfileHeading' htmlFor="username">
                        Username
                    </label>
                    <div className='ProfileValue'>
                        <input placeholder="Enter Username" id="username" className='form-control' onChange={(e) => changeValue("username", e)} />
                    </div>
                </div>
                <div className='MyProfileItem'>
                    <label className='ProfileHeading' htmlFor="password">
                        Password
                    </label>
                    <div className='ProfileValue'>
                        <input placeholder="Enter Password" id="password" type="password" className='form-control' onChange={(e) => changeValue("password", e)} />
                    </div>
                </div>
                <div className='MyProfileItem'>
                    <label className='ProfileHeading' htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                    <div className='ProfileValue'>
                        <input placeholder="Re-enter Password" type="password" id="confirmPassword" className='form-control' onChange={(e) => changeValue("confirmPassword", e)} />
                    </div>
                </div>

                <span className='terms'>
                    <input type='checkbox' id='check' onChange={(e) => setAgreed(e.target.checked)} />
                    &nbsp;
                    <label className='ProfileHeading' htmlFor='check'>
                        Agree to
                    </label>
                    &nbsp;
                    <a className='hyperlink' onClick={() => setShowTermsAndConditions(true)}>terms and conditions</a>
                </span>

                <div className='loginBt'>
                    <div className='ogout'>
                        <button className='btn' onClick={() => navigate('/signin')}>Go to Login</button>
                    </div>
                    <div className='ogout'>
                        <button className='btn' onClick={signUp}>Sign Up</button>
                    </div>
                   
                </div>
            </div>):(<div className='MyProfileSection1'>
                    <div className='MyProfileItem1'>
                    
                        <span className='left-arrow'> <FontAwesomeIcon icon={faArrowLeft} onClick={()=>{setShowTermsAndConditions(false)}}/> Terms and Conditions: </span>
                        <h6>Welcome to The Kid’s Table!</h6>
                        By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. If you do not agree to these terms, please do not use our website.
                        <ol>
                            <li> Use of the Website The Kid’s Table is designed to help parents find meal ideas based on specific preferences, allergies, and dietary restrictions. While we strive to provide accurate and helpful information, all content on the website is for informational purposes only. It is your responsibility to verify the suitability of recipes and ingredients for your family.</li>

 <li>No Professional Advice The content on The Kid’s Table, including recipes, meal suggestions, and dietary information, is provided as a general guide. We are not dietitians, nutritionists, or medical professionals. Always consult a qualified healthcare provider if you have any concerns about your child’s specific dietary needs or allergies.</li>
<li> Allergy and Dietary Information While we offer filtering tools for allergens and dietary preferences, The Kid’s Table cannot guarantee that all meals or recipes are completely free from allergens or cross-contamination. We strongly encourage users to double-check ingredients and consult manufacturers if necessary. </li>
<li> Limitation of Liability To the fullest extent permitted by law, The Kid’s Table and its owners, employees, or affiliates shall not be held liable for any damages, losses, or injuries that may arise from the use of our website, recipes, or meal suggestions. This includes but is not limited to allergic reactions, incorrect ingredient use, or any other issues. Any reliance on the content provided is at your own risk.</li>
<li> Errors and Omissions We strive to keep all information on the website accurate and up-to-date, but mistakes can happen. The Kid’s Table is not responsible for any errors, omissions, or inaccuracies found on the website. If you spot an error, please let us know, and we will do our best to correct it promptly. </li>
<li> Third-Party Links The Kid’s Table may contain links to external websites or services that are not controlled by us. We are not responsible for the content or practices of any third-party sites. Accessing these links is at your own risk, and we encourage you to review the terms and privacy policies of those sites. </li>
<li> Changes to Terms We reserve the right to modify or update these terms at any time without prior notice. Continued use of The Kid’s Table website after changes have been posted constitutes your acceptance of the new terms.</li> 
<li> Governing Law These terms and conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction]. </li>


            
                        </ol>
                        By using The Kid’s Table, you acknowledge that you have read, understood, and agree to these terms and conditions.
                    </div>
            </div>)}

            
           
        </div>
    );
};

export default SignUp;

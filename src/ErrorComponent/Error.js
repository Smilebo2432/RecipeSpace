import { useLocation } from 'react-router-dom';
import './Error.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
const Error = () => {
    const location = useLocation();
    const {state} = location;
    return (
        <div className="MyErrorLayout">            
            <div className='MyErrorSection'>
               <h3> <FontAwesomeIcon icon={faTriangleExclamation} /> </h3>
               <h2> { state?.message || "Error message will be displayed here" } </h2>
            </div>
        </div>
    )
}

export default Error;
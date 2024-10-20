import { useLocation, useNavigate } from "react-router-dom";
import './Recipe.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faFire, faPepperHot } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
const Recipe = () => {
    const location = useLocation()
    const {state} = location || {}; 
    const navigate = useNavigate();
    return (
        <div className="RecipeLayout">
            <FontAwesomeIcon icon={faArrowLeft} className="fa-arrow-left" onClick={()=>{navigate(-1)}}/>
            <div className="recipe-item">
                <div className="recipe-image-div">
                    <img src={state?.imgLink} alt={state?.name} className='recipe-image'/>
                    <div className="recipe-image-details">
                        <h3>{state?.name}</h3>
                        <h5> {state?.dietaryPreference}</h5>
                        <h6> <FontAwesomeIcon icon={faClock}/>  {state?.Time} | <FontAwesomeIcon icon={faFire} /> {state?.Calories} calories </h6>
                        {state?.spiceLevel === 'High' ? <span>{Array.from({length:3},()=>(<FontAwesomeIcon className='pepper-hot' icon={faPepperHot}/>))} </span>  : state?.spiceLevel === 'Medium'? <span>{Array.from({length:2},()=>(<FontAwesomeIcon icon={faPepperHot} className='pepper-hot'/>))} </span> : <span>{Array.from({length:1},()=>(<FontAwesomeIcon icon={faPepperHot} className='pepper-hot'/> ))} </span> }
                    </div>                    
                </div>
                
                <h4> Ingredients: </h4>
                <div className="ingredients-list">
                    {state?.procedure?.ingredients?.map((x,index)=>(
                        <span className="ingredients"> 
                        {x}
                        </span>
                    ))}
                </div>
                <h4> Allergitic Ingredients: </h4>
                <div className="ingredients-list">
                    {
                        state?.allergies.map((x,ind)=>(
                            <span className="allergies"> {x} </span>
                        ))
                    }
                </div>
                <h4> Recipe: </h4>
                <div className="recipeList">
                    <ol>
                        {
                            state?.procedure?.steps?.map((x)=>(
                                <li> {x} </li>
                            ))
                        }
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default Recipe;
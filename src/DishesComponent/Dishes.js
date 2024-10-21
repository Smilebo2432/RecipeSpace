import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import './Dishes.css';
import { useState, useEffect } from 'react'; // Added useEffect for fetching favorites
import Service from '../Service';
import dishes from '../DishesJSON';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { faArrowLeft, faPepperHot } from '@fortawesome/free-solid-svg-icons';

const Dishes = () => {
    const [hearts, setHearts] = useState([]); // Initialize hearts array
    const user_id = localStorage.getItem("user");
    const location = useLocation();
    const navigate = useNavigate();
    const {state} = location;
    const selectedFilters = state || {allergies:[],spiceLevel:[],vegFilter:[]};
    const [dishesFiltered,setDishesFiltered] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    useEffect(() => {
        const filterDishes = () => {
            const { allergies, spiceLevel, vegFilter } = selectedFilters;
            console.log(selectedFilters);
            const filteredDishes = dishes.filter(dish => {
                const matchesAllergies = allergies.length === 0 || !dish.allergies.some(allergy => allergies.includes(allergy));
                const matchesSpiceLevel = spiceLevel.length === 0 || spiceLevel.includes(dish.spiceLevel);
                const matchesVegFilter = vegFilter.length === 0 || vegFilter.includes(dish.dietaryPreference);
                
                return matchesAllergies && matchesSpiceLevel && matchesVegFilter;
            });

            setDishesFiltered(filteredDishes);
            setHearts(Array(filteredDishes.length).fill(false));            
        };

        filterDishes();
    },[]);
    useEffect(() => {
        Service().getFavorites(user_id).then((data) => {
            const favouriteDishes = data?.favorites || []; 
            const updatedHearts = [...hearts]; 

            
            favouriteDishes.forEach(favName => {
                const index = dishesFiltered.findIndex(dish => dish.name === favName.dish_name); 
                if (index !== -1) {
                    updatedHearts[index] = true; 
                }
            });
            
            setHearts(updatedHearts); 
        }).catch((err) => {
            navigate('/somethingwentwrong',{state: {message:"Not able to fetch favorite dishes"+err}})
        }).finally(()=> {setIsLoading(false)});
    }, [user_id,dishesFiltered]); 
    
    const showToast = (message, type = 'success') => {
        if (type === 'success') {
            toast.success(message);
        } else {
            toast.error(message);
        }
    };

    const toggleHeart = (index) => {
        const updatedHearts = [...hearts];
        const isFavorite = updatedHearts[index];
    
        updatedHearts[index] = !isFavorite; // Toggle the heart state
    
        // Update favorites in the backend
        const dishName = dishesFiltered[index].name;
        const serviceCall = isFavorite 
            ? Service().removeDishFromFavorites(user_id, dishName)
            : Service().addDishToFavorites(user_id, dishName);
    
        serviceCall
            .then((data) => {
                if (data.success) {
                    showToast(`${dishName} successfully ${isFavorite ? 'removed from' : 'added to'} favorites`);
                }
                else{
                    showToast(`${dishName} cannot be added to favorites, You have to login!`,"error");
                }
            })
            .catch((err) => {
                showToast(`Error occurred while ${isFavorite ? 'removing' : 'adding'} dish to favorites: ${err}`);
            });
        if(user_id)
            setHearts(updatedHearts);
    };
    

    return (
        <div className='DishesLayout'>
            {isLoading && (<div className='loader-container'> <div className='loader'> </div></div>)}
            <div className='dishes-top-section'>
                <div style={{display:'flex', alignItems:'center'}}>
                    <FontAwesomeIcon icon={faArrowLeft} className="fa-arrow-left" onClick={()=>{navigate(-1)}}/> &nbsp; <b>The recipes are being shown based on the selected criteria</b>
                </div>
                
                <div className='row'>
                    <div className='col-md-3'>
                        Dietary Preference: &nbsp;
                        {selectedFilters?.vegFilter?.map((value,id) => (<span>{value}{id<selectedFilters.vegFilter.length - 1?'/ ':''} </span> )) || <span> Veg / Non-Veg </span>}
                    </div>
                    <div className='col-md-6'>
                        Doesn't contain: &nbsp;
                        {selectedFilters?.allergies?.map((value,id) => ( <span>{value} {id<selectedFilters.allergies.length - 1 ?', ':''}</span>))}
                    </div>
                    <div className='col-md-3'>
                        spice level: &nbsp;
                        {selectedFilters?.spiceLevel?.map((value,id) => (<span>{value}{id<selectedFilters.spiceLevel.length - 1 ?', ':''}</span> ))}
                    </div>
                </div>
            </div>
            {Array.from({ length: dishesFiltered.length }, (_, idx) => (
                <div className="card-background" key={idx} >
                    <div className='row'>
                        <div className='col-md-4'>
                            
                            <img className='card-image' src={`${process.env.PUBLIC_URL}${dishesFiltered[idx].imgLink}`} alt={dishesFiltered[idx].name} />
                        </div>
                        <div className='col-md-8' >
                            <div className='row card-content'>
                                <div className='col-md-7' onClick={()=>{navigate('/recipe',{state:dishesFiltered[idx]})}}>
                                    <h3>{dishesFiltered[idx].name}</h3>
                                    {dishesFiltered[idx].description}
                                </div>
                                <div className='col-md-2'>
                                    {dishesFiltered[idx].dietaryPreference}
                                </div>
                                <div className='col-md-2'>
                                    {dishesFiltered[idx].spiceLevel === 'High' ? <span>{Array.from({length:3},()=>(<FontAwesomeIcon className='pepper-hot' icon={faPepperHot}/>))} </span>  : dishesFiltered[idx].spiceLevel === 'Medium'? <span>{Array.from({length:2},()=>(<FontAwesomeIcon icon={faPepperHot} className='pepper-hot'/>))} </span> : <span>{Array.from({length:1},()=>(<FontAwesomeIcon icon={faPepperHot} className='pepper-hot'/> ))} </span> }
                                </div>
                                <div className='col-md-1'>                                
                                    {hearts[idx] ? (
                                        <FontAwesomeIcon 
                                            icon='fa-solid fa-heart' 
                                            onClick={() => toggleHeart(idx)} 
                                        />
                                    ):(
                                        <FontAwesomeIcon 
                                            icon={faHeart} 
                                            onClick={() => toggleHeart(idx)} 
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <ToastContainer autoClose={2000}/>
        </div>
    );
}

export default Dishes;

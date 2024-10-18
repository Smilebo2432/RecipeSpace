import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import './Dishes.css';
import { useState, useEffect } from 'react'; // Added useEffect for fetching favorites
import Service from '../Service';
import dishes from '../DishesJSON';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';

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
            })
            .catch((err) => {
                showToast(`Error occurred while ${isFavorite ? 'removing' : 'adding'} dish to favorites: ${err}`);
            });
    
        setHearts(updatedHearts);
    };
    

    return (
        <div className='DishesLayout'>
            {isLoading && (<div className='loader-container'> <div className='loader'> </div></div>)}
            {Array.from({ length: dishesFiltered.length }, (_, idx) => (
                <div className="card-background" key={idx}>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img className='card-image' src={dishesFiltered[idx].imgLink} alt={dishesFiltered[idx].name} />
                        </div>
                        <div className='col-md-8'>
                            <div className='row card-content'>
                                <div className='col-md-9'>
                                    <h3>{dishesFiltered[idx].name}</h3>
                                    {dishesFiltered[idx].description}
                                </div>
                                <div className='col-md-2'>
                                    {dishesFiltered[idx].dietaryPreference}
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
            <ToastContainer />
        </div>
    );
}

export default Dishes;

import { useEffect, useState } from 'react';
import Service from '../Service';
import dishes from '../DishesJSON'; // Import the dishes array
import './Favorites.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

const Favorites = () => {
    const [favoriteDishes, setFavoriteDishes] = useState([]);
    const user_id = localStorage.getItem('user');
    const navigate = useNavigate()
    const retrieveFavorites = () => {
        Service().getFavorites(user_id)
            .then((data) => {
                console.log(data);
    
                // Create a Set for faster lookups of dish names
                const dishNamesSet = new Set(dishes.map(dish => dish.name));
    
                // Filter favorites based on matching dish names
                const filteredDishes = data.favorites
                    .map(favName => favName.dish_name)
                    .filter(dishName => dishNamesSet.has(dishName))
                    .map(dishName => dishes.find(dish => dish.name === dishName));
    
                setFavoriteDishes(filteredDishes);
            })
            .catch((err) => {
                navigate('/somethingwentwrong',{state:{message:'not able to retrieve favorites'+err}})
            });
    };
    
    const removeFavorite = (item) => {
        Service().removeDishFromFavorites(user_id,item.name).then((res)=>{
            if(res.success){
                retrieveFavorites();
            }
        }).catch((err)=>{
            toast.error("Not able to delete the favorite"+err)
        })
    }
    useEffect(() => {
        retrieveFavorites();
    }, []);

    return (
        <div className='favoritesLayout'>
            <div className='row'>
                {
                    favoriteDishes.map((item) => (
                        <div className='col-md-4' key={item.name}>
                            <div className='favoriteDishCard'>
                                <img src={item.imgLink} alt={item.name} className='card-image' />
                                <h3>{item.name}</h3>
                                <p>{item.dietaryPreference}</p>
                                <FontAwesomeIcon icon={faTrash} onClick={()=>removeFavorite(item)}/>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Favorites;

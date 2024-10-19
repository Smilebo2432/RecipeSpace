// src/Service.js
import Config from "./config";

const Service = () => {
    const makeRequest = async (url, method, body = null) => {
        try {
            const options = {
                method,
                headers: {
                    'Content-Type': 'application/json'            
                }
            };
            if (body) {
                options.body = JSON.stringify(body);
            }
      
            const response = await fetch(url, options);
            
            return await response.json();
        } catch (error) {
            console.error(`Error in ${method} request to ${url}:`, error);
            throw error;
        }
    }

    const signUp = async (username, password) => {
        const url = Config().backendAPI + '/register'; // Removed trailing slash
        console.log(url);
        return makeRequest(url, 'POST', { username, password, confirmation: password });
    }
    const signIn = async (username,password) => {
        const url = Config().backendAPI + '/login';
        return makeRequest(url, 'POST', {username, password})
    }
    const logout = async (user_id) => {
        const url = Config().backendAPI + '/logout';
        return makeRequest(url,'POST',{user_id})
    }
    const addDishToFavorites = async (user_id,dish_name)=>{
        const url = Config().backendAPI + '/favorites';
        return makeRequest(url,'POST',{user_id,dish_name});
    }
    const getFavorites = async (user_id) => {
        const url = Config().backendAPI + '/favorites?user_id='+user_id ;
        return makeRequest(url,'GET')
    }
    const removeDishFromFavorites = async (user_id, dish_name) => {
        const url = Config().backendAPI +'/favorites';
        return makeRequest(url,'DELETE',{user_id,dish_name})
    }
    const updateUser = async (user) => {
        const url = Config().backendAPI + '/user';
        return makeRequest(url,'PUT',user)
    }
    const fetchUser = (user_id) => {
        const  url = Config().backendAPI+'/user?user_id='+user_id;
        return makeRequest(url,'GET')
    }
    const createUser = (userId) => {
        const url = Config().backendAPI + '/user';       
        return makeRequest(url,'POST',{
            firstname:'',
            lastname:'',
            email:'',
            phone:'',
            user_id:userId
        })
    }
    return { signUp, fetchUser, createUser, signIn, logout, addDishToFavorites, getFavorites, removeDishFromFavorites,updateUser };
}

export default Service;

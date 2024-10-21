
import './App.css';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Home from './HomeComponent/Home';
import Filters from './FiltersComponent/Filters';
import Header from './HeaderComponent/Header';
import MyProfile from './MyProfileComponent/MyProfile';
import Dishes from './DishesComponent/Dishes';
import SignIn from './SignInComponent/SignIn';
import SignUp from './SignUpComponent/SignUp';
import Favorites from './FavoritesComponent/Favorites';
import Error from './ErrorComponent/Error';
import Recipe from './RecipeComponent/Recipe';
import About from './AboutComponent/About';
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

const AppContent = () => {
  const location = useLocation(); 
  const user_id = localStorage.getItem('user') || null; 
  return (
    <div className='AppLayout'>
      <div className='AppHeader'>
        {location.pathname !=='/home' && (<Header />)}
      </div> 

      <Routes>
        {user_id && (<>
        <Route path='/myprofile' element={<MyProfile />} />
        <Route path='/favorites' element={<Favorites/>}/>
        </>)}
        <Route path='/somethingwentwrong' element={<Error/>}/>
        <Route path='/filters' element={<Filters />} />
        
        <Route path='/dishes' element={<Dishes />} />
        
        <Route path='/recipe' element={<Recipe/>}/>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<Home/>} />
        <Route path='*' element={<Navigate to='/home'/>}/>
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  );
};
export default App;

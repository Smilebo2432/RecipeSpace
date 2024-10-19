
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
        {(location.pathname !== '/signin' && location.pathname!=='/signup') && <Header />} 
      </div>

      <Routes>
        {user_id ? ( 
          <>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Navigate to='/' />} />
            <Route path='/filters' element={<Filters />} />
            <Route path='/myprofile' element={<MyProfile />} />
            <Route path='/dishes' element={<Dishes />} />
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path='/recipe' element={<Recipe/>}/>
          </>
        ) : (
          <Route path='*' element={<Navigate to='/signin' />} /> 
        )}
        <Route path='/somethingwentwrong' element={<Error/>}/>
        
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
};
export default App;

import { useNavigate } from 'react-router-dom';
import './Home.css'
const Home = () => {
    const navigate = useNavigate()
    return (
        <div className='homeLayout'>
            <div className='homeHeader'>
                <img className='homeLogo'src={`${process.env.PUBLIC_URL}/imgs/logo.jpeg`} /> 
            </div>
            <div className='homeContent'>
                <h2 style={{textAlign:'center'}}>Ready to take the stress out of mealtime?</h2>
                <h3 style={{textAlign:'center'}}>The Kid's Table helps you quickly find tasty, nutritious, kid-approved meals that match your and your child's needs</h3>
            </div>
            <button className='search-recipes' onClick={()=>navigate('/about')}> VISIT US TO KNOW MORE</button>
        </div>
    )
}

export default Home;

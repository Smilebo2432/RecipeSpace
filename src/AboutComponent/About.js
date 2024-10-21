import './About.css'
const About = () => {
    return (
        <div className='aboutLayout'>
            <div className='aboutContent'>
                <h6> Instructions to Use: </h6>
                Once you open the kids table you will be provided with our Home page
                consequenlty you will be promted the login page in order for you to start using our tool.
                <ul className='list'>
                    <li>Firstly, however, you will need to make an account in the register tab, with your username and passwords.</li>
                    <li>After logging in with your account you will be guided to the about page, where our bio and instructions to use our tool is listed.</li>
                </ul>
                The next page is the recipes page: 
                <ul className='list'>
                    <li> In this page you will given the option to filter recipes you want based on your prefrences. The 3 filters that are given are, Allergans , Dietary prefernces, Spice level</li>
                    <ul className='list'>
                        <li>
                            Allergans- the allergans that are inlcuded are from our pre existing list of recipes. If your allergan is not listed, don’t panic,  it just means that none of our recipes inlcude that allergan. If you dont have any allergies, you may leave it blank and move on to the next filter. You may also click multiple allegrans if you need to. Keep in mind, this filter will AVOID any option you click.
                        </li>
                        <li>
                            Dietary prefernce -  This is a filter where you may pick between vegertarian, non vegetarian, and vegans dietary preferences. You may also select multiple if wanted. keep in mind this filter inlucdes the selected options.                        
                        </li>
                        <li>
                            Spice Level- The following filter will ask you for your spice tolerance in general between low, medium, and high. You may also select multiple if wanted. keep in mind this filter inlucdes the selected options.
                        </li>
                    </ul>
                    <li> After selecting all the options you may press search recipes to get exact matches for what you desire. You may scroll through the listed recipes and pick what you crave for your next meal. Each recipe will be provided with its name, a brief description, dietary preference, spice level, and an option to like the recipe and save it to the my favourite recipes tab. </li>
                </ul>
                
                
                
                
                

                
                
                
                After finding the meal you would like, you may press the meal in oder to get the ingredients, Allergetic content, and the recipe to make it, with the amount of time and calories this meal has.<br/><br/>

                We have an additional my profiles tab, for future weekly newsltters about nutrition curenntly under developmnet. <br/> <br/>

                The final of our tabs is the “My Favourite Recipes” tab. Here you may view recipes you liked in the past from the previous recipes tab. You may still click the recipe to get information about it, and if you would like, you may also dleete the recipe form the tab.<br/><br/>

                At the end you may log out once you are done. Keep in mind, once you log out, all your information and activity you provided is saved to The Kid’s Table data base. <br/><br/>

                <b>caution: Make sure to always double check the options you picked, in the recipes tab, because there may be mistakes entered. </b><br/>
            </div>
            
        </div>
    )
}

export default About;
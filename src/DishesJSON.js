const dishes = [
    {
        name: 'Spicy Chicken Wings',
        description: 'Crispy fried chicken wings coated in a tangy, spicy sauce.',
        procedure: 'Fry the wings, coat with sauce, and serve hot.',
        allergies: ['gluten', 'soy'],
        spiceLevel: 'High',
        dietaryPreference:"Non-Veg",
        imgLink: 'https://i.ibb.co/QpwRPY3/spicy-chicken-wings.jpg',
        credits: 'https://bakerbynature.com/sweet-spicy-sriracha-baked-chicken-wings/'
    },
    {
        name: 'Vegetarian Tacos',
        description: 'Soft tortillas filled with roasted vegetables, beans, and salsa.',
        procedure: 'Roast vegetables, assemble tacos with toppings, and serve.',
        allergies: ['gluten'],
        spiceLevel: 'Medium',
        dietaryPreference:"Veg",
        imgLink: 'https://i.ibb.co/8N6v0Mn/Vegetarian-Tacos.jpg',
        credits: 'https://www.twopeasandtheirpod.com/easy-vegetarian-tacos/'
    },
    {
        name: 'Pepperoni Pizza Rolls',
        description: 'Loaded with melty cheese, sauce, and pepperoni, these pizza rolls are irresistible.',
        procedure: 'Preheat the oven to 400°F. Roll out the dough, add marinara, cheese, and pepperoni, then place string cheese along one edge and roll tightly. Slice into 1-inch pieces, let them rise for 20 minutes, and bake for 20-25 minutes until golden. Serve with marinara for dipping.',
        allergies: ['Wheat','Diary','Tomato','Pepperoni'],
        spiceLevel: 'Low',
        dietaryPreference:"Non-Veg",
        imgLink: 'https://i.ibb.co/svGmDPM/Pepperoni-Pizza-Rolls.jpg',
        credits: 'www.thepioneerwoman.com'
    },
    {
        name: 'Air Fryer Hot Dogs',
        description: 'They are crispy on the outside and soft inside.',
        procedure: 'Preheat the air fryer to 400°F. Cut slits into the hot dogs, or spiralize them using a skewer and knife. Air fry in batches for 5-6 minutes, turning halfway, then air fry the buns with hot dogs for 1-2 minutes until toasted. Serve with mustard, relish, ketchup, or your favorite toppings.',
        allergies: ['Wheat', 'Dairy','Soy','Sulfites or Nitrates','Mustard or Ketchup'],
        spiceLevel: 'Low',
        dietaryPreference:"Non-Veg",
        imgLink: 'https://i.ibb.co/GxbVhP7/Air-Fryer-Hot-Dogs.jpg',
        credits: 'www.thepioneerwoman.com'
    },
    {
        name: 'Chicken Biryani',
        description: 'Fragrant basmati rice cooked with marinated chicken and spices.',
        procedure: 'To make chicken biryani, marinate chicken with yogurt, spices, and herbs, then cook it with sautéed onions, tomatoes, and more spices. Layer the cooked chicken with partially cooked basmati rice, top with saffron-infused milk, fried onions, and fresh herbs, then steam everything together until the rice is fluffy and fragrant.',
        allergies: ['Dairy','Nuts','Gluten','Saffron','cinnamon','cardamom','chili powder','Cumin','Coriander','Turmeric','Cloves','Bay Leaves','Black Pepper','Ginger','Garlic','Nutmeg','Fenugreek','Saffron'],
        spiceLevel: 'High',
        dietaryPreference:"Non-Veg",
        imgLink: 'https://i.ibb.co/V20pCLf/Chicken-Biryani.jpg',
        credits: 'https://www.indianhealthyrecipes.com/chicken-biryani-recipe/'
    },
    {
        name: 'Beef Stir Fry',
        description: 'Stir-fried beef with mixed vegetables in a savory sauce.',
        procedure: 'Stir fry beef and vegetables, add sauce, and serve with rice.',
        allergies: ['soy'],
        spiceLevel: 'Medium',
        dietaryPreference:"Non-Veg",
        imgLink: '',
        credits: 'https://www.indianhealthyrecipes.com/chicken-biryani-recipe/'
    },
    {
        name: 'Falafel Wrap',
        description: 'Crispy falafel balls wrapped in pita bread with hummus and veggies.',
        procedure: 'Fry falafel, assemble wrap, and serve.',
        allergies: ['gluten', 'sesame'],
        spiceLevel: 'Low',
        dietaryPreference:"Non-Veg",
        imgLink: 'https://drive.google.com/file/d/1TZ0Tzk_7PcpwgKWpys7aZu3T1KcMpQzB/view?usp=sharing',
        credits: 'https://www.indianhealthyrecipes.com/chicken-biryani-recipe/'
    },
    {
        name: 'Mango Salsa',
        description: 'Fresh mango, bell pepper, and cilantro salsa with a lime kick.',
        procedure: 'Dice ingredients, mix with lime juice, and serve.',
        allergies: [],
        spiceLevel: 'Low',
        dietaryPreference:"Non-Veg",
        imgLink: 'https://drive.google.com/file/d/1TZ0Tzk_7PcpwgKWpys7aZu3T1KcMpQzB/view?usp=sharing',
        credits: 'https://www.indianhealthyrecipes.com/chicken-biryani-recipe/'
    },
    {
        name: 'Sushi Platter',
        description: 'Assorted sushi rolls with fresh fish, rice, and seaweed.',
        procedure: 'Roll sushi with ingredients, slice, and serve with soy sauce.',
        allergies: ['fish', 'soy'],
        spiceLevel: 'Low',
        dietaryPreference:"Non-Veg",
        imgLink: 'https://drive.google.com/file/d/1TZ0Tzk_7PcpwgKWpys7aZu3T1KcMpQzB/view?usp=sharing',
        credits: 'https://www.indianhealthyrecipes.com/chicken-biryani-recipe/'
    },
    {
        name: 'Butter Chicken',
        description: 'Creamy tomato-based chicken curry with Indian spices.',
        procedure: 'Cook chicken in sauce and serve with naan or rice.',
        allergies: ['dairy'],
        spiceLevel: 'Medium',
        dietaryPreference:"Non-Veg",
        imgLink: 'https://drive.google.com/file/d/1TZ0Tzk_7PcpwgKWpys7aZu3T1KcMpQzB/view?usp=sharing',
        credits: 'https://www.indianhealthyrecipes.com/chicken-biryani-recipe/'
    },
    {
        name: 'Vegetable Pad Thai',
        description: 'Rice noodles stir-fried with vegetables, tofu, and peanuts.',
        procedure: 'Cook noodles and vegetables, mix with sauce, and serve.',
        allergies: ['peanuts', 'soy'],
        spiceLevel: 'Medium',
        dietaryPreference:"Non-Veg",
        imgLink: 'https://drive.google.com/file/d/1TZ0Tzk_7PcpwgKWpys7aZu3T1KcMpQzB/view?usp=sharing',
        credits: 'https://www.indianhealthyrecipes.com/chicken-biryani-recipe/'
    },
    {
        name: 'Lamb Rogan Josh',
        description: 'Slow-cooked lamb curry with aromatic spices.',
        procedure: 'Cook lamb in spices and serve with rice.',
        allergies: ['dairy'],
        spiceLevel: 'High'
    },
    {
        name: 'Caesar Salad',
        description: 'Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan.',
        procedure: 'Toss ingredients together and serve.',
        allergies: ['dairy', 'gluten', 'fish'],
        spiceLevel: 'Low'
    },
    {
        name: 'Paneer Tikka',
        description: 'Grilled paneer cubes marinated in spicy yogurt.',
        procedure: 'Marinate paneer, grill, and serve with chutney.',
        allergies: ['dairy'],
        spiceLevel: 'High'
    },
    {
        name: 'Shrimp Scampi',
        description: 'Shrimp sautéed in garlic butter with a lemony white wine sauce.',
        procedure: 'Sauté shrimp, add sauce, and serve with pasta.',
        allergies: ['shellfish', 'dairy'],
        spiceLevel: 'Low'
    },
    {
        name: 'Avocado Toast',
        description: 'Toasted bread topped with mashed avocado, lime, and chili flakes.',
        procedure: 'Toast bread, spread avocado, and serve.',
        allergies: ['gluten'],
        spiceLevel: 'Low'
    },
    {
        name: 'BBQ Ribs',
        description: 'Tender pork ribs slathered in BBQ sauce, slow-cooked to perfection.',
        procedure: 'Cook ribs, baste with sauce, and serve.',
        allergies: [],
        spiceLevel: 'Medium'
    },
    {
        name: 'Greek Salad',
        description: 'Tomatoes, cucumbers, olives, and feta cheese with olive oil dressing.',
        procedure: 'Chop vegetables, toss with dressing, and serve.',
        allergies: ['dairy'],
        spiceLevel: 'Low'
    },
    {
        name: 'Eggplant Parmesan',
        description: 'Baked eggplant layered with marinara sauce and melted cheese.',
        procedure: 'Layer eggplant and sauce, bake, and serve.',
        allergies: ['dairy', 'gluten'],
        spiceLevel: 'Low'
    },
    {
        name: 'Pho',
        description: 'Vietnamese noodle soup with beef, herbs, and aromatic broth.',
        procedure: 'Cook broth, add noodles and beef, and serve with herbs.',
        allergies: ['soy'],
        spiceLevel: 'Medium'
    },
    {
        name: 'Chili Con Carne',
        description: 'Hearty chili with ground beef, beans, and tomatoes.',
        procedure: 'Cook beef and beans in a spiced tomato sauce, and serve.',
        allergies: [],
        spiceLevel: 'High'
    },
    {
        name: 'Mushroom Risotto',
        description: 'Creamy arborio rice cooked with mushrooms and Parmesan.',
        procedure: 'Cook rice slowly, add mushrooms and cheese, and serve.',
        allergies: ['dairy'],
        spiceLevel: 'Low'
    },
    {
        name: 'Chicken Quesadilla',
        description: 'Grilled tortilla filled with chicken, cheese, and peppers.',
        procedure: 'Grill tortilla with filling, and serve with salsa.',
        allergies: ['gluten', 'dairy'],
        spiceLevel: 'Medium'
    },
    {
        name: 'Coconut Shrimp',
        description: 'Crispy shrimp coated in coconut flakes, served with sweet chili sauce.',
        procedure: 'Coat shrimp, fry, and serve with sauce.',
        allergies: ['shellfish'],
        spiceLevel: 'Low'
    },
    {
        name: 'Tandoori Chicken',
        description: 'Spicy, marinated chicken cooked in a tandoor oven.',
        procedure: 'Marinate chicken, grill, and serve with naan.',
        allergies: ['dairy'],
        spiceLevel: 'High'
    },
    {
        name: 'Tom Yum Soup',
        description: 'Hot and sour Thai soup with shrimp, mushrooms, and lemongrass.',
        procedure: 'Cook broth, add shrimp and mushrooms, and serve.',
        allergies: ['shellfish'],
        spiceLevel: 'High'
    },
    {
        name: 'Lasagna',
        description: 'Layers of pasta, meat sauce, and cheese, baked to perfection.',
        procedure: 'Layer pasta, sauce, and cheese, bake, and serve.',
        allergies: ['gluten', 'dairy'],
        spiceLevel: 'Low'
    },
    {
        name: 'Prawn Tempura',
        description: 'Lightly battered prawns deep-fried until crispy.',
        procedure: 'Batter prawns, fry, and serve with dipping sauce.',
        allergies: ['shellfish'],
        spiceLevel: 'Low'
    },
    {
        name: 'Veggie Burger',
        description: 'Grilled veggie patty served in a bun with lettuce and tomato.',
        procedure: 'Grill patty, assemble burger, and serve.',
        allergies: ['gluten'],
        spiceLevel: 'Low'
    },
    {
        name: 'Spaghetti Bolognese',
        description: 'Classic Italian pasta with a rich, meaty tomato sauce.',
        procedure: 'Cook pasta and sauce, mix together, and serve.',
        allergies: ['gluten'],
        spiceLevel: 'Low'
    },
    {
        name: 'Currywurst',
        description: 'Grilled sausage served with a tangy curry ketchup sauce.',
        procedure: 'Grill sausage, add sauce, and serve.',
        allergies: [],
        spiceLevel: 'Medium'
    },
    {
        name: 'Fish Tacos',
        description: 'Grilled fish wrapped in a soft tortilla with slaw and salsa.',
        procedure: 'Grill fish, assemble tacos, and serve.',
        allergies: ['fish'],
        spiceLevel: 'Low'
    },
    {
        name: 'French Onion Soup',
        description: 'Rich beef broth with caramelized onions, topped with melted cheese.',
        procedure: 'Cook onions, add broth, and top with cheese and bread.',
        allergies: ['dairy', 'gluten'],
        spiceLevel: 'Low'
    },
    {
        name: 'Beef Bourguignon',
        description: 'French stew with beef, red wine, mushrooms, and vegetables.',
        procedure: 'Slow-cook beef in wine and vegetables, and serve.',
        allergies: [],
        spiceLevel: 'Low'
    },
    {
        name: 'Katsu Curry',
        description: 'Japanese fried chicken cutlet served with a rich curry sauce.',
        procedure: 'Fry chicken, make curry sauce, and serve with rice.',
        allergies: ['gluten'],
        spiceLevel: 'Medium'
    },
    {
        name: 'Clam Chowder',
        description: 'Creamy soup with clams, potatoes, and bacon.',
        procedure: 'Cook clams, add to soup, and serve with bread.',
        allergies: ['shellfish', 'dairy'],
        spiceLevel: 'Low'
    },
    {
        name: 'Teriyaki Chicken',
        description: 'Grilled chicken glazed with sweet teriyaki sauce.',
        procedure: 'Grill chicken, glaze with sauce, and serve with rice.',
        allergies: ['soy'],
        spiceLevel: 'Low'
    },
    {
        name: 'Cheeseburger',
        description: 'Juicy beef patty with melted cheese in a toasted bun.',
        procedure: 'Grill patty, assemble burger, and serve.',
        allergies: ['gluten', 'dairy'],
        spiceLevel: 'Low'
    },
    {
        name: 'Peking Duck',
        description: 'Crispy roast duck served with pancakes and hoisin sauce.',
        procedure: 'Roast duck, serve with pancakes and sauce.',
        allergies: ['gluten', 'soy'],
        spiceLevel: 'Low'
    },
    {
        name: 'Egg Fried Rice',
        description: 'Stir-fried rice with scrambled eggs and vegetables.',
        procedure: 'Fry rice with eggs and vegetables, and serve.',
        allergies: ['soy'],
        spiceLevel: 'Low'
    },
    {
        name: 'Chicken Parmesan',
        description: 'Breaded chicken topped with marinara and melted cheese.',
        procedure: 'Fry chicken, add sauce and cheese, and bake.',
        allergies: ['gluten', 'dairy'],
        spiceLevel: 'Low'
    },
    {
        name: 'Fajitas',
        description: 'Grilled steak or chicken with peppers and onions, served with tortillas.',
        procedure: 'Grill meat and vegetables, assemble with tortillas, and serve.',
        allergies: ['gluten'],
        spiceLevel: 'Medium'
    },
    {
        name: 'Ratatouille',
        description: 'French vegetable stew with zucchini, eggplant, and tomatoes.',
        procedure: 'Layer vegetables, bake, and serve.',
        allergies: [],
        spiceLevel: 'Low'
    },
    {
        name: 'Lobster Roll',
        description: 'Fresh lobster meat in a buttery, toasted bun.',
        procedure: 'Cook lobster, assemble roll, and serve.',
        allergies: ['shellfish'],
        spiceLevel: 'Low'
    },
    {
        name: 'Beetroot Salad',
        description: 'Fresh beets with goat cheese, walnuts, and a balsamic glaze.',
        procedure: 'Roast beets, assemble salad, and drizzle with glaze.',
        allergies: ['dairy', 'nuts'],
        spiceLevel: 'Low'
    }
];

export default dishes;

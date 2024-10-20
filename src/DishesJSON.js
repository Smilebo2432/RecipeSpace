const dishes = [
    {
        name: 'Spicy Chicken Wings',
        description: 'Crispy fried chicken wings coated in a tangy, spicy sauce.',
        procedure: {
            ingredients: [
                "2 lbs chicken wings (split into drumettes and flats)",
                "1 cup all-purpose flour (contains gluten)",
                "1 tsp salt",
                "1 tsp black pepper",
                "1 tsp garlic powder",
                "1 tsp smoked paprika",
                "1 tsp cayenne pepper",
                "Oil for frying (vegetable or canola)",
                "1/4 cup Sriracha sauce (contains Soy)",
                "1/4 cup honey",
                "1 tbsp Soy sauce (contains Soy)",
                "2 tbsp butter",
                "1 tbsp apple cider vinegar",
                "1/2 tsp garlic powder",
                "1/2 tsp red chili flakes (optional)"
            ],
            steps: [
                "Pat the chicken wings dry using paper towels.",
                "In a bowl, mix flour, salt, black pepper, garlic powder, smoked paprika, and cayenne pepper.",
                "Coat the chicken wings evenly with the flour mixture.",
                "Heat oil in a deep pan or fryer to 350°F (175°C).",
                "Fry the wings in batches until golden brown and crispy, about 8-10 minutes per batch.",
                "Remove wings from the oil and drain on a wire rack or paper towel.",
                "In a saucepan over medium heat, melt the butter.",
                "Add Sriracha sauce, honey, Soy sauce, apple cider vinegar, garlic powder, and red chili flakes.",
                "Stir and simmer for 2-3 minutes until the sauce thickens slightly.",
                "Toss the fried wings in the hot, spicy sauce until fully coated.",
                "Serve immediately with a side of ranch or blue cheese dressing, celery sticks, or any preferred dipping sauce."
                
                
                
                
            ]
        },
        allergies: ['gluten', 'Soy'],
        spiceLevel: 'High',
        dietaryPreference: "Non-Veg",
        Calories: '450',
        Time: '45',
        imgLink: 'https://i.ibb.co/QpwRPY3/spicy-chicken-wings.jpg',
        credits: 'https://bakerbynature.com/sweet-spicy-sriracha-baked-chicken-wings/'
    },
    {
        name: 'Paneer Tikka',
        description: 'Grilled paneer cubes marinated in spicy yogurt.',
        procedure: {
            ingredients: [
                "500g paneer, cut into cubes",
                "1 cup yogurt",
                "2 tbsp lemon juice",
                "1 tsp turmeric powder",
                "1 tsp red chili powder",
                "1 tsp garam masala",
                "1 tbsp ginger-garlic paste",
                "Salt to taste",
                "2 tbsp oil"
                
            ],
            steps: [
                "In a bowl, mix yogurt, lemon juice, turmeric, red chili powder, garam masala, ginger-garlic paste, and salt.",
                "Add the paneer cubes and marinate for at least 1 hour.",
                "Preheat a grill or oven to 400°F (200°C).",
                "Grill the marinated paneer cubes until golden and charred at the edges, about 10-12 minutes.",
                "Serve with mint chutney and lemon wedges."
            ]
        },
        allergies: ['dairy'],
        spiceLevel: 'High',
        dietaryPreference: "Veg",
        imgLink: '',
        Calories: "350",
        Time: "30 mins",
        credits: 'https://www.cookwithmanali.com/paneer-tikka/'
    },
    {
        name: 'Avocado Toast',
        description: 'Toasted bread topped with mashed avocado, lime, and chili flakes.',
        procedure: {
            ingredients: [
                "2 slices of whole grain bread",
                "1 ripe avocado",
                "1 tbsp lime juice",
                "Salt and pepper to taste",
                "1/4 tsp red chili flakes"
            ],
            steps: [
                "Toast the slices of bread until golden and crispy.",
                "In a small bowl, mash the avocado with lime juice, salt, and pepper.",
                "Spread the avocado mixture evenly on the toasted bread.",
                "Sprinkle red chili flakes on top and serve immediately."
            ]
        },
        allergies: ['gluten'],
        spiceLevel: 'Low',
        dietaryPreference: "Veg",
        Calories: "250",
        Time: "10 mins",
        imgLink: 'https://iili.io/236XVGR.jpg',
        credits: 'https://www.simplyrecipes.com/recipes/avocado_toast/'
    },
    {
        name: 'Pho',
        description: 'Vietnamese noodle soup with beef, herbs, and aromatic broth.',
        procedure: {
            ingredients: [
                "1 lb beef bones",
                "1 onion, halved",
                "1 piece ginger, sliced",
                "2 tbsp fish sauce",
                "1 cinnamon stick",
                "4 cloves",
                "1 star anise",
                "1 lb rice noodles",
                "1/2 lb beef sirloin, thinly sliced",
                "Fresh herbs (cilantro, basil)",
                "Lime wedges",
                "Bean sprouts"
            ],
            steps: [
                "In a large pot, boil beef bones with onion and ginger for 10 minutes. Drain and rinse the bones.",
                "Refill the pot with fresh water and add fish sauce, cinnamon stick, cloves, and star anise.",
                "Simmer for 4-6 hours to make the broth.",
                "Cook the rice noodles according to the package instructions and divide into bowls.",
                "Place thin slices of beef on top of the noodles, then ladle the hot broth over them.",
                "Serve with fresh herbs, lime wedges, and bean sprouts."
            ]
        },
        allergies: ['Soy', 'Fish sauce'],
        spiceLevel: 'Medium',
        dietaryPreference: "Non-Veg",
        imgLink: '',
        Calories: "500",
        Time: "3 Hrs",
        credits: 'https://www.vietworldkitchen.com/'
    },
    {
        name: 'Chili Con Carne',
        description: 'Hearty chili with ground beef, beans, and tomatoes.',
        procedure: {
            ingredients: [
                "1 lb ground beef",
                "1 onion, chopped",
                "2 garlic cloves, minced",
                "1 can kidney beans, drained",
                "1 can diced tomatoes",
                "1 tbsp chili powder",
                "1 tsp cumin",
                "Salt and pepper to taste"
            ],
            steps: [
                "In a large pot, brown the ground beef over medium heat. Drain excess fat.",
                "Add chopped onions and garlic, and cook until softened.",
                "Stir in chili powder and cumin, cooking for another minute.",
                "Add diced tomatoes and kidney beans, and bring to a simmer.",
                "Simmer for 20 minutes, stirring occasionally.",
                "Season with salt and pepper, and serve with rice or cornbread."
            ]
        },
        allergies: [],
        spiceLevel: 'High',
        dietaryPreference: "Non-Veg",
        Calories: "350",
        Time: "1 Hr",
        imgLink: '',
        credits: 'https://www.foodnetwork.com/'
    },
    {
        name: 'Mushroom Risotto',
        description: 'Creamy arborio rice cooked with mushrooms and Parmesan.',
        procedure: {
            ingredients: [
                "1 cup arborio rice",
                "4 cups vegetable broth",
                "1/2 cup white wine",
                "1 onion, chopped",
                "2 cups mushrooms, sliced",
                "1/2 cup Parmesan cheese, grated",
                "2 tbsp butter",
                "Salt and pepper to taste"
            ],
            steps: [
                "Heat the broth in a pot and keep it warm.",
                "In a large pan, melt butter and sauté onions and mushrooms until softened.",
                "Add arborio rice and stir for 1-2 minutes until the rice is lightly toasted.",
                "Pour in the white wine and cook until absorbed.",
                "Gradually add the warm broth, one ladle at a time, stirring constantly until absorbed.",
                "Continue this process until the rice is creamy and fully cooked.",
                "Stir in Parmesan cheese, season with salt and pepper, and serve immediately."
                
                
                
                
                
                
                
                
            ]
        },
        allergies: ['dairy'],
        spiceLevel: 'Low',
        dietaryPreference: "Veg",
        Calories: "350",
        Time: "40 mins",
        imgLink: '',
        credits: 'https://www.bonappetit.com/'
    },
    {
        name: 'Vegetarian Tacos',
        description: 'Soft tortillas filled with roasted vegetables, beans, and salsa.',
        procedure: {
            ingredients: [
                "4 small corn or flour tortillas",
                "1 cup mixed roasted vegetables (bell peppers, zucchini, onion)",
                "1 can black beans, rinsed and drained",
                "1/2 cup salsa",
                "1 avocado, sliced",
                "Fresh cilantro for garnish"
            ],
            steps: [
                "Preheat your oven to 400°F (200°C).",
                "Roast vegetables on a baking sheet for 20-25 minutes until tender.",
                "Warm the tortillas in a skillet or oven.",
                "Assemble the tacos by adding roasted vegetables, black beans, and salsa to each tortilla.",
                "Top with avocado slices and fresh cilantro.",
                "Serve immediately."
                
                
                
                
            ]
        },
        allergies: ['gluten'],
        spiceLevel: 'Medium',
        dietaryPreference: "Veg",
        SDP: "vegan", 
        Calories: "300",
        Time: "30 mins",
        imgLink: 'https://i.ibb.co/PFWZ7xc/Veg-taco-resized.jpg',
        credits: 'https://www.twopeasandtheirpod.com/easy-vegetarian-tacos/'
    },
    {
        name: 'Pepperoni Pizza Rolls',
        description: 'Loaded with melty cheese, sauce, and pepperoni, these pizza rolls are irresistible.',
        procedure: {
            ingredients: [
                "1 package pizza dough",
                "1 cup marinara sauce",
                "1 1/2 cups shredded mozzarella cheese",
                "1 cup sliced pepperoni",
                "1 string cheese stick, cut into pieces",
                "Flour for dusting"
            ],
            steps: [
                "Preheat the oven to 400°F (200°C).",
                "Roll out the pizza dough on a floured surface.",
                "Spread a thin layer of marinara sauce over the dough.",
                "Sprinkle mozzarella cheese and add pepperoni slices.",
                "Place string cheese pieces along one edge and roll tightly.",
                "Slice the rolled dough into 1-inch pieces and place on a baking sheet.",
                "Let them rise for 20 minutes, then bake for 20-25 minutes until golden.",
                "Serve with extra marinara for dipping."
            ]
        },
        allergies: ['Wheat', 'Dairy', 'Tomato', 'Pepperoni'],
        spiceLevel: 'Low',
        dietaryPreference: "Non-Veg",
        Calories: "200",
		Time: "30 mins",
        imgLink: 'https://i.ibb.co/svGmDPM/Pepperoni-Pizza-Rolls.jpg',
        credits: 'www.thepioneerwoman.com'
    },
    {
        name: 'Air Fryer Hot Dogs',
        description: 'They are crispy on the outside and soft inside.',
        procedure: {
            ingredients: [
                "Hot dogs",
                "Hot dog buns",
                "Condiments (mustard, ketchup, relish)"
            ],
            steps: [
                "Preheat the air fryer to 400°F (200°C).",
                "Cut slits into the hot dogs or spiralize them with a skewer.",
                "Air fry the hot dogs in batches for 5-6 minutes, turning halfway.",
                "Air fry the buns for 1-2 minutes until toasted.",
                "Serve with your favorite toppings."
            ]
        },
        allergies: ['Wheat', 'Dairy', 'Soy', 'Sulfites or Nitrates', 'Mustard or Ketchup'],
        spiceLevel: 'Low',
        dietaryPreference: "Non-Veg",
        Calories: "300",
		Time: "15 mins",
        imgLink: 'https://i.ibb.co/GxbVhP7/Air-Fryer-Hot-Dogs.jpg',
        credits: 'www.thepioneerwoman.com'
    },
    {
        name: 'Chicken Biryani',
        description: 'Fragrant basmati rice cooked with marinated chicken and spices.',
        procedure: {
            ingredients: [
                "1 lb basmati rice",
                "1 lb chicken, cut into pieces",
                "1 cup yogurt",
                "2 onions, sliced",
                "2 tomatoes, chopped",
                "Spices: saffron, cinnamon, cardamom, chili powder, cumin, coriander, turmeric, cloves, bay leaves",
                "Fresh herbs: cilantro and mint",
                "Salt to taste",
                "Oil or ghee for cooking"
            ],
            steps: [
                "Marinate the chicken with yogurt, salt, and spices for at least 1 hour.",
                "Heat oil in a large pot and sauté sliced onions until golden.",
                "Add marinated chicken and cook until browned.",
                "Stir in chopped tomatoes and cook until soft.",
                "Add partially cooked basmati rice and layer with saffron-infused milk and fried onions.",
                "Cover and steam on low heat for 20-25 minutes until the rice is fully cooked.",
                "Garnish with fresh herbs and serve hot."
                
                
                
                
                
                
                
                
                
                
            ]
        },
        allergies: ['Dairy', 'Nuts', 'Gluten', 'Spices'],
        spiceLevel: 'High',
        dietaryPreference: "Non-Veg",
        Calories: "600",
		Time: "1.5 hours",
        imgLink: 'https://i.ibb.co/V20pCLf/Chicken-Biryani.jpg',
        credits: 'https://www.indianhealthyrecipes.com/chicken-biryani-recipe/'
    },
    {
        name: 'Beef Stir Fry',
        description: 'Stir-fried beef with mixed vegetables in a savory sauce.',
        procedure: {
            ingredients: [
                "1 lb beef, sliced thinly",
                "2 cups mixed vegetables (broccoli, bell peppers, carrots)",
                "3 tbsp Soy sauce",
                "2 tbsp oyster sauce (optional)",
                "1 tbsp cornstarch",
                "2 cloves garlic, minced",
                "1 tbsp ginger, minced",
                "Oil for cooking"
                
            ],
            steps: [
                "Marinate the beef in Soy sauce, cornstarch, garlic, and ginger for 30 minutes.",
                "Heat oil in a wok or large skillet over high heat.",
                "Add marinated beef and stir-fry for 2-3 minutes until browned.",
                "Add mixed vegetables and stir-fry for another 3-4 minutes.",
                "Add oyster sauce if using, stir well, and serve with rice."
                
            ]
        },
        allergies: ['Soy'],
        spiceLevel: 'Medium',
        dietaryPreference: "Non-Veg",
        Calories: "400",
		Time: "35 mins",
        imgLink: '',
        credits: 'https://www.indianhealthyrecipes.com/chicken-biryani-recipe/'
    },
    {
        name: 'Falafel Wrap',
        description: 'Crispy falafel balls wrapped in pita bread with hummus and veggies.',
        procedure: {
            ingredients: [
                "1 can chickpeas, drained",
                "1/2 onion, chopped",
                "2 cloves garlic",
                "1/4 cup parsley",
                "1 tsp cumin",
                "1 tsp coriander",
                "Salt and pepper to taste",
                "Pita bread",
                "Hummus",
                "Fresh vegetables (lettuce, tomatoes, cucumbers)"
            ],
            steps: [
                "In a food processor, combine chickpeas, onion, garlic, parsley, cumin, coriander, salt, and pepper.",
                "Blend until a coarse mixture forms.",
                "Form into small balls or patties.",
                "Fry in hot oil until golden brown.",
                "Spread hummus on pita, add falafel and fresh vegetables.",
                "Wrap and serve."
                
                
                
                
                
                
                
                
                
                
            ]
        },
        allergies: ['gluten', 'garlic'],
        spiceLevel: 'Low',
        dietaryPreference: "Veg",
        SDP: "Vegan",
        Calories: "500",
		Time: "35 mins",
        imgLink: 'https://i.ibb.co/qCR4qYf/Falafel-Wrap.jpg',
        credits: 'https://www.feastingathome.com/falafel-recipe/'
    },
    {
        name: 'Sushi Platter',
        description: 'Assorted sushi rolls with fresh fish, rice, and seaweed.',
        procedure: {
            ingredients: [
                "2 cups sushi rice, cooked",
                "1/4 cup rice vinegar",
                "Fresh fish (tuna, salmon, etc.)",
                "Nori sheets (seaweed)",
                "Soy sauce for dipping",
                "Wasabi and pickled ginger (optional)"
                
                
                
                
                
                
                
            ],
            steps: [
                "Mix rice vinegar with cooked sushi rice.",
                "Place a sheet of nori on a bamboo mat, shiny side down.",
                "Spread rice evenly over the nori, leaving space at the top.",
                "Add fresh fish or other fillings.",
                "Roll the sushi tightly, slice, and serve with Soy sauce, wasabi, and ginger."
            ]
        },
        allergies: ['fish', 'Soy'],
        spiceLevel: 'Low',
        dietaryPreference: "Non-Veg",
        Calories: "350",
		Time: "2 hours",
        imgLink: 'https://drive.google.com/file/d/1TZ0Tzk_7PcpwgKWpys7aZu3T1KcMpQzB/view?usp=sharing',
        credits: 'https://www.indianhealthyrecipes.com/chicken-biryani-recipe/'
    },
    {
        name: 'Butter Chicken',
        description: 'Creamy tomato-based chicken curry with Indian spices.',
        procedure: {
            ingredients: [
                "1 lb chicken, cut into pieces",
                "1 cup tomato puree",
                "1/2 cup heavy cream",
                "1/4 cup yogurt",
                "2 tbsp butter",
                "Spices: garam masala, chili powder, cumin, coriander",
                "1 onion, chopped",
                "2 cloves garlic, minced",
                "1-inch ginger, minced",
                "Fresh cilantro for garnish"
            ],
            steps: [
                "Marinate the chicken in yogurt, salt, and spices for at least 1 hour.",
                "Heat butter in a pan and sauté onions, garlic, and ginger until golden.",
                "Add tomato puree and cook until the oil separates.",
                "Stir in the marinated chicken and cook until done.",
                "Add cream and simmer for 5-10 minutes.",
                "Garnish with cilantro and serve with naan or rice."
            ]
        },
        allergies: ['dairy'],
        spiceLevel: 'Medium',
        dietaryPreference: "Non-Veg",
        Calories: "500",
		Time: "1 hours",
        imgLink: 'https://drive.google.com/file/d/1TZ0Tzk_7PcpwgKWpys7aZu3T1KcMpQzB/view?usp=sharing',
        credits: 'https://www.indianhealthyrecipes.com/chicken-biryani-recipe/'
    },
    {
        name: 'Chicken Quesadilla',
        description: 'Grilled tortilla filled with chicken, cheese, and peppers.',
        procedure: {
            ingredients: [
                "2 large flour tortillas",
                "1 cup cooked chicken, shredded",
                "1/2 cup bell peppers, sliced",
                "1 cup shredded cheese (cheddar or Monterey Jack)",
                "1 tbsp olive oil",
                "Salsa and sour cream for serving"
            ],
            steps: [
                "Heat olive oil in a skillet over medium heat.",
                "Place one tortilla in the skillet and sprinkle half of the cheese evenly over it.",
                "Add the shredded chicken and bell peppers on top of the cheese.",
                "Sprinkle the remaining cheese over the chicken and peppers, then place the second tortilla on top.",
                "Cook for 2-3 minutes on each side, or until the tortilla is golden brown and the cheese is melted.",
                "Slice into wedges and serve with salsa and sour cream."
                
                
                
                
                
                
                
                
            ]
        },
        allergies: ['gluten', 'dairy'],
        spiceLevel: 'Medium',
        Calories: "450",
		Time: "20 mins",
        dietaryPreference: "Non-Veg",
        imgLink: '',
        credits: 'https://www.simplyrecipes.com/'
        
        
        
        
        
    },
    {
        name: 'Healthy Baked Macaroni and Cheese',
        description: 'A healthier version of the classic comfort dish, made with whole wheat pasta and lighter cheese.',
        procedure: {
            ingredients: [
                "2 cups whole wheat elbow macaroni",
                "2 cups low-fat milk",
                "1 1/2 cups sharp cheddar cheese, shredded",
                "1 tbsp flour",
                "1 tbsp butter",
                "Salt and pepper to taste",
                "1/4 cup whole wheat breadcrumbs"
            ],
            steps: [
                "Preheat the oven to 375°F (190°C).",
                "Cook the macaroni according to the package instructions, drain, and set aside.",
                "In a saucepan, melt butter over medium heat, stir in the flour, and cook for 1 minute.",
                "Gradually whisk in the milk, cooking until thickened.",
                "Remove from heat and stir in the cheese until melted and smooth.",
                "Combine the cheese sauce with the cooked macaroni and transfer to a baking dish.",
                "Top with breadcrumbs and bake for 20 minutes, or until bubbly and golden brown.",
                "Serve hot."
            ]
        },
        allergies: ['gluten', 'dairy'],
        spiceLevel: 'Low',
        dietaryPreference: "Veg",
        Calories: "350",
		Time: "40 mins",
        imgLink: '',
        credits: 'https://www.eatingwell.com/'
    },
    {
        name: 'Cream of Asparagus Soup',
        description: 'A creamy and smooth asparagus soup, perfect for a light lunch or starter.',
        procedure: {
            ingredients: [
                "1 lb fresh asparagus, trimmed",
                "1 small onion, chopped",
                "1 clove garlic, minced",
                "2 cups vegetable broth",
                "1/2 cup heavy cream",
                "Salt and pepper to taste",
                "1 tbsp olive oil"
            ],
            steps: [
                "Heat olive oil in a pot over medium heat. Add the onion and garlic, cooking until soft.",
                "Add the chopped asparagus and vegetable broth, bring to a boil, then reduce heat and simmer for 15 minutes.",
                "Use an immersion blender to puree the soup until smooth.",
                "Stir in the heavy cream, season with salt and pepper, and heat through for another 5 minutes.",
                "Serve hot, optionally garnished with a drizzle of cream or croutons."
            ]
        },
        allergies: ['dairy'],
        spiceLevel: 'Low',
        dietaryPreference: "Veg",
        Calories: "200",
		Time: "30",
        imgLink: '',
        credits: 'https://www.simplyrecipes.com/'
    },
    {
     name: 'Juicy Lucy (Stuffed Turkey Cheeseburger)',
        description: 'A juicy, stuffed Turkey Cheeseburger.',
        procedure: {
            ingredients: [
                "4 slices part-skim cheddar cheese slices, or 2% American cheese (0.7 ounces each)",
                "1 lb 93% lean ground turkey",
                "1 tsp kosher salt",
                "black pepper to taste",
                "4 hamburger rolls",
                "4 Iceburg lettuce",
                "red onion, sliced into rings and separated",
                "tomatoes, sliced",
                "sliced pickles",
                "favorite condiments"
            ],
            steps: [
                "Fold each slice of cheese into quarters to create 4 short stacks.",
                "Divide the ground turkey into 8 equal balls then flatten into 1/4 inch thick patties.",
                "Place a stack of cheese in the center of 4 patties and top with the remaining 4 patties. Pinch the edges to seal.",
                "Season both sides with salt and black pepper.",
                "Place patties and oiled grill and cover, cook about 6 minutes per side over medium heat, or until the center is cooked through.",
                "Serve"
            ]
        },
        allergies: ['Egg', 'Dairy', 'Gluten', 'Wheat'],
        spiceLevel: 'Low',
        dietaryPreference: "Non-Veg",
        Calories: "309",
        Time: "20 mins",
        imgLink: '',
        credits: 'https://www.skinnytaste.com/turkey-burgers-stuffed-with-cheese/'
    },
    {
     name: 'Mummy Hot Dogs',
        description: 'A fun and goofy take on an icon meal',
        procedure: {
            ingredients: [
                "1 cup unbleached all-purpose flour, whole wheat or gluten-free mix, plus more for dusting (5 ounces)",
                "2 teaspoons baking powder",
                "3/4 tsp kosher salt",
                "1 cup non-fat plain Greek yogurt",
                "1 egg white, beaten (whole egg works fine too)",
                "8 turkey hot dogs, such as Applegate Naturals, halved crosswise",
                "1 package candy eyes",
                "mustard or ketchup, optional for serving"
            ],
            steps: [
                "Preheat oven to 400 degrees F",
                "Line a baking sheet with a silicon baking mat or parchment paper. If using parchment paper, spray with oil to avoid sticking.",
                "In a medium bowl, combine the flour, baking powder, and salt and whisk well. Add the yogurt and mix with a fork or spatula until well combined; it will look like small crumbles.",
                "Lightly dust flour on a work surface and remove dough from the bowl. Knead the dough a few times until smooth and tacky but not sticky, about 15 turns (it should not leave dough on your hand when you pull away).",
                "Dust your work surface and a rolling pin with more flour.",
                "Roll the dough out thin into a rectangle. Slice the dough into 1/4-inch thick slices.",
                "Wrap the dough around each hot dog half, leaving room for the eyes, and place on the prepared baking sheet. Repeat with remaining hot dogs and dough.",
                "Brush each with the egg wash and bake in the oven for 12 minutes.",
                "Using mustard or ketchup, “glue” the eyes on. Allow to cool for 10 minutes and serve."
            ]
        },
        allergies: ['Wheat', 'Gluten', 'Dairy', 'Soy', 'Egg', 'Pork/Beef'],
        spiceLevel: 'Low',
        dietaryPreference: "Non-Veg",
        Calories: "81",
        Time: "52 mins",
        imgLink: '',
        credits: 'https://www.skinnytaste.com/turkey-burgers-stuffed-with-cheese/'
    },
    {
     name: 'Mummy Hot Dogs',
        description: 'A fun and goofy take on an icon meal',
        procedure: {
            ingredients: [
                "1 cup unbleached all-purpose flour, whole wheat or gluten-free mix, plus more for dusting (5 ounces)",
                "2 teaspoons baking powder",
                "3/4 tsp kosher salt",
                "1 cup non-fat plain Greek yogurt",
                "1 egg white, beaten (whole egg works fine too)",
                "8 turkey hot dogs, such as Applegate Naturals, halved crosswise",
                "1 package candy eyes",
                "mustard or ketchup, optional for serving"
                
                
                
                
            ],
            steps: [
                "Preheat oven to 400 degrees F",
                "Line a baking sheet with a silicon baking mat or parchment paper. If using parchment paper, spray with oil to avoid sticking.",
                "In a medium bowl, combine the flour, baking powder, and salt and whisk well. Add the yogurt and mix with a fork or spatula until well combined; it will look like small crumbles.",
                "Lightly dust flour on a work surface and remove dough from the bowl. Knead the dough a few times until smooth and tacky but not sticky, about 15 turns (it should not leave dough on your hand when you pull away).",
                "Dust your work surface and a rolling pin with more flour.",
                "Roll the dough out thin into a rectangle. Slice the dough into 1/4-inch thick slices.",
                "Wrap the dough around each hot dog half, leaving room for the eyes, and place on the prepared baking sheet. Repeat with remaining hot dogs and dough.",
                "Brush each with the egg wash and bake in the oven for 12 minutes.",
                "Using mustard or ketchup, “glue” the eyes on. Allow to cool for 10 minutes and serve."
                
                
                
                
            ]
        },
        allergies: ['Wheat', 'Gluten', 'Dairy', 'Soy', 'Egg', 'Pork/Beef'],
        spiceLevel: 'Low',
        dietaryPreference: "Non-Veg",
        Calories: "81",
        Time: "52 mins",
        imgLink: '',
        credits: 'https://www.skinnytaste.com/turkey-burgers-stuffed-with-cheese/'
    },
    {
     name: 'Loaded Baked Potato Soup',
        description: 'A fun and familiar test with comforting tastes.',
        procedure: {
            ingredients: [
                "2 medium russet potatoes, washed and dried",
                "1 small head cauliflower (3 1/2 cups or 16 ounces) stem removed cut into florets",
                "1 1/2 cups chicken broth",
                "1 1/2 cups 1% reduced-fat milk",
                "kosher salt and freshly cracked black pepper, to taste",
                "1/2 cup light sour cream",
                "10 tbsp reduced-fat shredded sharp cheddar cheese",
                "6 tbsp chopped chives, divided",
                "3 slices center cut bacon, cooked and crumbled (you can use turkey bacon if you prefer)"
            ],
            steps: [
                "Pierce potatoes with a fork; microwave on high for 5 minutes, turn over, and microwave another 3–5 minutes until tender. Or, if you prefer to use your oven, bake at 400°F for 1 hour or until tender. Cool and peel potatoes.",
                "Meanwhile, steam cauliflower with water in a large covered pot until tender. Drain and return to pot.",
                "On medium heat, add chicken broth, milk, and potatoes, and bring to a boil.",
                "Use an immersion blender to puree until smooth. Add sour cream, half the chives, salt, and pepper, and cook on low for another 5–10 minutes, stirring occasionally.",
                "Remove from heat. Ladle 1 cup of soup into each bowl.utes and serve."
            ]
        },
        allergies: ['Gluten', 'Nut', 'Soy'],
        spiceLevel: 'Low',
        dietaryPreference: "Non-Veg",
        Calories: "200",
        Time: "20 mins",
        imgLink: '',
        credits: 'https://www.skinnytaste.com/turkey-burgers-stuffed-with-cheese/'
    },
    {
     name: 'Green Curry Noodles',
        description: 'An intresting combination between 2 popular thai dishes that makes this dish delictable.',
        procedure: {
            ingredients: [
                "2 medium russet potatoes, washed and dried",
                "1 small head cauliflower (3 1/2 cups or 16 ounces) stem removed cut into florets",
                "1 1/2 cups chicken broth",
                "1 1/2 cups 1% reduced-fat milk",
                "kosher salt and freshly cracked black pepper, to taste",
                "1/2 cup light sour cream",
                "10 tbsp reduced-fat shredded sharp cheddar cheese",
                "6 tbsp chopped chives, divided",
                "3 slices center cut bacon, cooked and crumbled (you can use turkey bacon if you prefer)"
            ],
            steps: [
                "Put the rice noodles in a large bowl, cover with very hot tap water, and stir to ensure they don’t clump. Let soak for 25 minutes, then drain.",
                "Meanwhile, cut the tofu into 1/2-inch cubes. Lay the cubes on a layer of paper towels, then cover with another layer and let drain for 10 to 15 minutes while you chop the vegetables.",
                "Remove the core from the bell pepper and thinly slice it. Trim the ends of the bok choy, slice the stems, and leave the leaves whole. ",
                "In a large nonstick skillet over medium heat, warm the vegetable oil. When it shimmers, add the tofu and season with salt and pepper. Cook, tossing occasionally, until golden on most sides, about 5 minutes.", 
                "Create a well in the center of the skillet and add the curry paste.",
                "Fry, stirring constantly, for just a few seconds, until fragrant (it may start spitting), then add the coconut milk.",
                "Add the lime juice, fish sauce, and brown sugar, and stir to combine. Bring to a simmer, then add the red pepper and cook until the pepper is crisp-tender, 4 to 5 minutes. ",
                "Add the drained noodles and bok choy, and cook, stirring and tossing often to ensure even cooking and to prevent clumping, until the noodles are tender, about 5 minutes. Stir in the basil leaves and serve right away. "
            ]
        },
        allergies: ['Seafood', 'Dairy', 'Nuts', 'Gluten','Soy'],
        spiceLevel: 'Low',
        dietaryPreference: "Veg",
        SDP: "Vegan",
        Calories: "346",
        Time: "40 mins",
        imgLink: '',
        credits: 'https://www.skinnytaste.com/turkey-burgers-stuffed-with-cheese/'
    },
    {
     name: 'Tofu Tacos',
        description: 'An intresting combination between 2 popular thai dishes that makes this dish delictable.',
        procedure: {
            ingredients: [
                "1 14 ounce package extra-firm tofu, drained",
                "½ cup finely diced yellow onion",
                "1 large garlic clove, minced",
                "1 tablespoon olive oil",
                "3 tablespoons less sodium soy sauce, I like Kikkoman",
                "1 tablespoon tomato paste",
                "2 teaspoons chili powder",
                "1 teaspoon smoked paprika",
                "1 teaspoon cumin",
                "Olive oil spray",
                "1 medium Russet potato, cut into ½-inch pieces",
                "2 large jalapeño peppers, seeds and membranes removed, cut into ½-inch pieces",
                "1 ½ tablespoons olive oil",
                "1 teaspoon kosher salt",
                "black pepper, to taste",
                "4 ounces Hass avocado, sliced, from 1 small",
                "8 6-inch corn tortillas",
                "1 cup your favorite salsa, store bought or homemade",
                "Optional toppings: shredded cheese, diced tomatoes, onions, lettuce or cilantro"
            ],
            steps: [
              	"These vegan Tofu Tacos with Potatoes and Jalapeños are great when you want a plant-based taco that still has lots of protein.",
                "Place tofu on a paper towel or tea towel lined plate. Cover with another towel and place a heavy pan on top to press out excess water from tofu.",
                "Preheat oven to 400 degrees F.",
                "Cover a large sheet pan with parchment paper and spray another small sheet pan with olive oil. Set aside.",
                "In a medium bowl, add the onions, garlic, olive oil, soy sauce, tomato paste, chili powder, smoked paprika, and cumin.", 
                "Whisk to combine, then crumble the tofu with your hands into small pieces into the mixture. Toss gently to combine and evenly coat the tofu with the sauce.",
                "Spread tofu in an even layer on the parchment-lined sheet pan.",
                "Place potatoes and jalapeños in an even layer on the small sheet pan.",
                "Toss with olive oil, salt, and pepper to taste.",
                "Transfer both sheet pans to the oven and cook for 35 minutes, tossing halfway through and rotating pans to allow for even browning.",
                "Meanwhile, warm the tortillas (over an open flame, in a pan, or in the microwave). I prefer heating mine over an open flame, covering them as I go to keep them warm."
            ]
        },
        allergies: ['Dairy', 'Nut', 'Gluten','Soy'],
        spiceLevel: 'Medium',
        dietaryPreference: "Veg",
        Calories: "444",
        Time: "50 mins",
        imgLink: '',
        credits: 'https://www.skinnytaste.com/turkey-burgers-stuffed-with-cheese/'
    },
    {
     name: 'Spicy Sriracha Tofu Rice Bowl',
        description: 'A quick a fast easy to make meatless-meal',
        procedure: {
            ingredients: [
                "14 oz extra firm tofu, drained",
                "1 tablespoon plus 2 teaspoons gluten-free Tamari, (or soy sauce) divided",
                "4 teaspoons sriracha, divided",
                "1 tablespoon sesame oil, divided",
                "1 medium scallion, chopped, white and green parts separated",
                "2 teaspoons Thai sweet chili sauce",
                "1 cups cooked brown rice",
                "1/2 cup warmed shelled edamame",
                "1/2 teaspoon multi color sesame seeds"
            ],
            steps: [
              	"Place the tofu block between some paper towels and press to absorb extra water.",
                "Repeat until the tofu feels dry and no more water comes out. Slice across in half lengthwise and then into cubes.",
                "In a large bowl, stir together 1 tablespoon of the tamari, 2 teaspoons of the sriracha, 2 teaspoons of sesame oil, and the scallion whites. Add the tofu and let sit for 10 minutes.",
                "Spray the air fryer basket with oil.",
                "Transfer the tofu to the air fryer in a single layer and air fry at 370°F for about 10 to 12 minutes, shaking the basket halfway until slightly golden and crisp on the outside and tender on the inside.",
                "Bake in a preheated oven at 400°F for about 25 minutes, turning halfway.",
                "While it cooks, add the remaining 2 teaspoons of sriracha, 2 teaspoons of tamari, 1 teaspoon of sesame oil, and sweet chili sauce to the bowl.",
                "When the tofu is ready, toss it with the sauce to coat until evenly covered. Serve immediately over rice with edamame, sesame seeds, and scallion greens."
            ]
        },
        allergies: ['Dairy', 'Nut', 'Gluten','Soy'],
        spiceLevel: 'High',
        dietaryPreference: "Veg",
        Calories: "453",
        Time: "30 mins",
        imgLink: '',
        credits: 'https://www.skinnytaste.com/turkey-burgers-stuffed-with-cheese/'
    },
    {
     name: 'Macaroni Salad',
        description: 'This is the BEST Macaroni Salad made with tomatoes and black olives, and a simple creamy mayo-based dressing, a perfect summer side dish',
        procedure: {
            ingredients: [
                "6 oz uncooked elbows, wheat or gluten-free",
                "2 ripe medium tomatoes, diced",
                "1/4 red onion, or white, finely chopped",
                "1/4 cup Hellmann's light mayonnaise",
                "1 tbsp white vinegar",
                "1/4 teaspoon garlic powder",
                "1 tsp dried oregano",
                "2.5 oz can sliced black olives",
                "kosher salt and black pepper, to taste"
            ],
            steps: [
              	"Bring a large pot of generously salted water to a boil. Add the macaroni and cook according to package directions.",
				"Drain and rinse under cold water.",
                "Meanwhile, in a large bowl, combine mayonnaise, vinegar, tomatoes (and all of the juice from the tomatoes), olives, onion, garlic powder, oregano, salt, and pepper. Mix well.",
                "When the pasta is done, mix it in and serve right away at room temperature or chilled."
            ]
        },
        allergies: ['Dairy', 'Nut', 'Gluten','Egg', "Tomato"],
        spiceLevel: 'Low',
        dietaryPreference: "Veg",
        Calories: "125",
        Time: "25 mins",
        imgLink: '',
        credits: 'https://www.skinnytaste.com/turkey-burgers-stuffed-with-cheese/'
    },
    {
     name: 'Roasted Mushrooms with Parmesan',
        description: 'A toasted and cheesy dish for when time seems ',
        procedure: {
            ingredients: [
                "Olive oil spray",
                "1 ½ pounds sliced mixed mushrooms, I used white beech, crimini, shiitakes",
                "2 tablespoons extra virgin olive oil",
                "½ teaspoon kosher salt",
                "black pepper, freshly ground, to taste",
                "1 tablespoon thyme, fresh chopped, plus more for garnish",
                "¼ cup Parmesan cheese, freshly grated",
                "Drizzle of good quality balsamic vinegar"
            ],
            steps: [
              	"Preheat oven to 400 degrees F. Spray 2 sheet pans with olive oil.",
                "Divide mushrooms evenly among the 2 prepared sheet pans.",
                "Drizzle each with 1 tablespoon of olive oil, ¼ teaspoon kosher salt, pepper, and half the fresh thyme, then toss to evenly coat. Spread the mushrooms out in an even layer.",
                "Roast mushrooms for 20 minutes, mixing and rotating pans halfway through cooking.",
                "Top with Parmesan, a drizzle of balsamic vinegar, and garnish with more fresh thyme."

            ]
        },
        allergies: ['Dairy', 'Nut', 'Gluten'],
        spiceLevel: 'Low',
        dietaryPreference: "Veg",
        Calories: "120",
        Time: "30 mins",
        imgLink: '',
        credits: 'https://www.skinnytaste.com/turkey-burgers-stuffed-with-cheese/'
    },
];

export default dishes;

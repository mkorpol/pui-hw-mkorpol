const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpeg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpeg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpeg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpeg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpeg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpeg"
    }    
};

/* even though I have this file linked in my HTML files along with app.js, 
I cannot access this array in app.js (it is not treating the array as global).
I have tried to move my script tags in the HTML files to the very bottom of the body,
but this does not work either. I have redefined the array in my app.js directly
as a result of this, which is then giving me an error in the console
saying 'rolls is already defined in rollsData.js.*/
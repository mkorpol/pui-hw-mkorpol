/* let cart = [];
localStorage.setItem("cart", JSON.stringify(cart)); */

// get the cart from local storage
var cart = JSON.parse(localStorage.getItem("cart"));
//  if cart doesn't exist in local storage, create it here
if (cart == null) {
    cart = []; //setting cart variable to empty array 
    localStorage.setItem("cart", JSON.stringify(cart)); //now storing it in local storage
}
console.log(cart);

/* condensed set of glazing prices for easier access in roll class */
let glazingPrices = {
    'Original':0,
    'Sugar Milk':0,
    'Vanilla Milk':0.5,
    'Double Chocolate': 1
}

/*  condensed set of pack prices for easier access in roll class */
let packPrices = {
    'One': 1,
    'Three':3,
    'Six':5,
    'Twelve':10
}

/* roll class frm hw 4 but with two additional fields: 
actualPrice (total price of item) and image url */
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        this.actualPrice = ((this.basePrice + glazingPrices[this.glazing]) * packPrices[this.size]).toFixed(2);
        this.imageFile = "images/" + rolls[this.type]['imageFile'];
    }
}


/* declaring totalPrice variable globally so can be used to update
totalPrice within displayToCart function */
let totalPrice = 0;

/* main function to update and remove items from cart */
function displayToCart(roll) {
    /* getting the template element and cloning it */
    const temp = document.getElementById('carttemplate');
    const updated = temp.content.cloneNode(true);
    roll.element = updated.querySelector('.firstcontainer');
    document.querySelector('.cartcomplete').prepend(roll.element);
    
    /* updating all the fields: */

    /* image updating */
    document.getElementById('cartpage').src = roll.imageFile;

    /* roll name updating */
    document.getElementById('rollname').innerText = roll.type + ' Cinnamon Roll';

    /* glaze type updating */
    document.getElementById('glazingtype').innerText = "Glazing: " + roll.glazing;

    /* pack size updating */
    document.getElementById('packsize').innerText = "Pack Size: " + roll.size;

    /* individual item price updating */
    document.getElementById('cartprice').innerText = "$" + roll.actualPrice;

    /* updating total price */
    totalPrice += parseFloat(roll.actualPrice);
    console.log(totalPrice);
    document.getElementById('totalprice').innerText = "$" + totalPrice;

    /* to remove a roll */
    const remove = document.querySelector('.remove');
    remove.addEventListener('click', () => {
        /* update price (subtract from total) */
        totalPrice -= parseFloat(roll.actualPrice);
        document.getElementById('totalprice').innerText = "$" + (Math.abs(((totalPrice).toFixed(2))));
        /* remove actual roll now */
        roll.element.remove();
        cart = arrayRemove(cart,roll);
        localStorage.setItem("cart", JSON.stringify(cart));
    })
}

function arrayRemove(arr, value) { 
    
    return arr.filter(function(ele){ 
        return ele != value; 
    });
}

/* calling displayToCart function on every item in the cart */
for (let item of cart) {
    displayToCart(item);
}
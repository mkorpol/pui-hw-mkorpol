let glazingOptions = [
    {
        glaze: 'Original',
        price: 0
    },
    {
        glaze: 'Sugar Milk',
        price: 0
    },
    {
        glaze: 'Vanilla Milk',
        price: 0.5
    },
    {
        glaze: 'Double Chocolate',
        price: 1
    }
]

var select = document.getElementById("glazingOptions");
for(index in glazingOptions) {
    select.options[select.options.length] = new Option(glazingOptions[index].glaze, glazingOptions[index].price);
}

let packSizeOptions = [
    {
        size: 'One',
        price: 1
    },
    {
        size: 'Three',
        price: 3
    },
    {
        size: 'Six',
        price: 5
    },
    {
        size: 'Twelve',
        price: 10
    }
]

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

var select2 = document.getElementById("packSizeOptions");
for(index in packSizeOptions) {
    select2.options[select2.options.length] = new Option(packSizeOptions[index].size, packSizeOptions[index].price);
}


// getting chosen roll type
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

// updating name on product page 
const headerElement = document.querySelector('#original');
headerElement.innerText = rollType + ' Cinnamon Roll ';

// updating image on product page
const rollImage = document.querySelector('#productpage');
rollImage.src = './images/' + rolls[rollType]["imageFile"];

let productPrice = document.getElementById('productdetailprice');
// getting base price for chosen roll type 
var basePrice = rolls[rollType]["basePrice"];
var glazingPrice = 0;
var rollGlazing = 'Original';
var packPrice = 1;
var packSize = 'One';

productPrice.innerText = (basePrice + glazingPrice) * packPrice;

function glazingChange(element) {
    const priceChange = parseFloat(element.value);
    glazingPrice = priceChange;
    rollGlazing = element.options[element.selectedIndex].text;
    let totalPrice = (basePrice + priceChange) * packPrice;
    productPrice.innerText = totalPrice.toFixed(2);
}

function packChange(element) {
    const priceChange2 = parseFloat(element.value);
    packPrice = priceChange2;
    packSize = element.options[element.selectedIndex].text;
    let totalPrice = (basePrice + glazingPrice) * packPrice;
    productPrice.innerText = totalPrice.toFixed(2);
}

// shopping cart updating
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

// get the cart from local storage
var cart = JSON.parse(localStorage.getItem("cart"));
//  if cart doesn't exist in local storage, create it here
if (cart == null) {
    cart = []; //setting cart variable to empty array 
    localStorage.setItem("cart", JSON.stringify(cart)); //now storing it in local storage
}
console.log(cart);

//on 'add to cart' button click, save product info to instance of Roll class
function addToCart() {
    var rollOne = new Roll(rollType, rollGlazing, packSize, basePrice);
    cart.push(rollOne);
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
}

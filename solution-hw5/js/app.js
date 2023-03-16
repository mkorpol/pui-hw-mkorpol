let glazingOptions = [
    {
        glaze: 'original',
        price: 0
    },
    {
        glaze: 'sugar',
        price: 0
    },
    {
        glaze: 'vanilla',
        price: 0.5
    },
    {
        glaze: 'double chocolate',
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
var rollGlazing = 'original';
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

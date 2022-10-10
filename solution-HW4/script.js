let basePrice= 2.49;
let glazingPrice= 0.0;
let packPrice= 1.0;
let totalPrice=0.0;

class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
      this.type = rollType;
      this.glazing =  rollGlazing;
      this.size = packSize;
      this.basePrice = basePrice;
  }
}


packPriceObj1= {size:1, priceAdpt:1}
packPriceObj2= {size:3, priceAdpt:3}
packPriceObj3= {size:6, priceAdpt:5}
packPriceObj4= {size:12, priceAdpt:10}
listObjs= [packPriceObj1, packPriceObj2, packPriceObj3, packPriceObj4]

glazingKeepOrg= {glazingOpt: "Keep Original", priceAdpt: 0.00}
glazingSugarMilk= {glazingOpt: "Sugar Milk", priceAdpt: 0.00}
glazingVanMilk= {glazingOpt: "Vanilla Milk", priceAdpt: 0.50}
glazingDblChoc= {glazingOpt: "Double Chocolate", priceAdpt: 1.50}

listObj= [glazingKeepOrg, glazingSugarMilk, glazingVanMilk, glazingDblChoc]
// Bhavya Jain helped me make a list for all of the options I needed and explained to me about functions 

let glaze = document.getElementById("glazingDropdown") // <select name="glazing" class="Dropdowns" id="glazingDropdown" onchange="glazingChange(this)" ></select>

for (let i = 0; i < listObj.length; i++) {
  let glazingOpt1= document.createElement ("option") // <option></option>
  glazingOpt1.innerHTML= listObj[i].glazingOpt // <option>hello</option>
  glazingOpt1.value=listObj[i].priceAdpt
  glaze.appendChild(glazingOpt1) // <select name="glazing" class="Dropdowns" id="glazingDropdown" onchange="glazingChange(this)" ><option>hello</option></select>
}
// Hyunsung helped me understanad for loop does what the above commented out does but better becasue it doesn't need to repeat multiple times
// and that this will make my code look cleaner 


let packSize = document.getElementById("packSizeDropdown") // <select name="glazing" class="Dropdowns" id="glazingDropdown" onchange="glazingChange(this)" ></select>

for (let i = 0; i < listObjs.length; i++) {
  let packPriceObj1= document.createElement ("option") // <option></option>
  packPriceObj1.innerHTML= listObjs[i].size // <option>hello</option>
  packPriceObj1.value=listObjs[i].priceAdpt
  packSize.appendChild(packPriceObj1) // <select name="glazing" class="Dropdowns" id="glazingDropdown" onchange="glazingChange(this)" ><option>hello</option></select>
}

let selectedPackSize = listObjs[0];
function packSizeChange(element) {
  // console.log('pack size change');
  // console.log(element);   //  <select>...</select> dropdown
  // console.log(element.selectedIndex);   // shows the index of the selected option in the dropdown
  selectedPackSize = listObjs[element.selectedIndex];
  // console.log("selectedPackSize: ");
  // console.log (selectedPackSize)
  const newPackPrice = parseFloat(element.value);
  // console.log(newPackPrice);

  packPrice = newPackPrice
  calculateNewPrice();
}

let selectedGlazing = listObj[0];
function glazingChange(element) {
  // console.log ("glazingChange");
  // console.log(element);   //  <select>...</select> dropdown
  // console.log(element.selectedIndex);   // shows the index of the selected option in the dropdown
  selectedGlazing = listObj[element.selectedIndex];
  // console.log("selectedGlazing: ");
  // console.log(selectedGlazing);

  const newGlazingPrice = parseFloat(element.value);
  console.log("newGlazingPrice: " + newGlazingPrice);

  glazingPrice = newGlazingPrice;
  calculateNewPrice();
}
// Hyunsung explained to me about the dropdown and how to use selectedIndex 
// also how to use my arrays from the top of my code for the selectedIndex 

function calculateNewPrice() { 
  let newPrice = (rolls[rollType].basePrice + glazingPrice) * packPrice
  console.log(newPrice);
  updateTotalPrice(newPrice);
} 

function updateTotalPrice(price) {
  console.log('update is called!!')
  let newItemPrice = document.getElementById("itemPrice");
  newItemPrice.innerText = "$" + price.toFixed(2);
}


//-------------HW4-------------------------
let cart = [];
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");

document.querySelector(".gallery-title h2").innerText=  rollType + " Cinnamon Roll";
document.querySelector("#itemPrice").innerText = "$ " + rolls[rollType].basePrice;
document.querySelector("#image1").src = "HW2/"+ rolls[rollType].imageFile ;
// Joy Mukherjee helped me by explaining that the url parameters should go at the top of my HW4 file to parse from top to bottom
// also to use querySelector as it is more flexible 
// and that whatever the id or class is in the JS file will also be used in my querySelector

function addToCart(){
  console.log("Function is running");
  //create a roll object
  let roll1 = new Roll(rollType, selectedGlazing, selectedPackSize ,rolls[rollType].basePrice);
  //add to cart
  cart.push(roll1);
  console.log(cart);
}
// Joy also helped me with my add to cart function and told me to console log my attempts to see if it's running in the add to cart 
// Hyunsung helped me with correcting my roll1= new Roll. it was originally pulling in a function and wasn't printing correctly in the console.log
let basePrice= 2.49;
let glazingPrice= 0.0;
let packPrice= 1.0;
let totalPrice=0.0;

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
  console.log(listObj[i]);
  console.log(listObj[i].glazingOpt);
  console.log(listObj[i].priceAdpt);

  let glazingOpt1= document.createElement ("option") // <option></option>
  glazingOpt1.innerHTML= listObj[i].glazingOpt // <option>hello</option>
  glazingOpt1.value=listObj[i].priceAdpt
  glaze.appendChild(glazingOpt1) // <select name="glazing" class="Dropdowns" id="glazingDropdown" onchange="glazingChange(this)" ><option>hello</option></select>
}
// Hyunsung helped me understanad for loop does what the above commented out does but better becasue it doesn't need to repeat multiple times
// and that this will make my code look cleaner 


let packSize = document.getElementById("packSizeDropdown") // <select name="glazing" class="Dropdowns" id="glazingDropdown" onchange="glazingChange(this)" ></select>

for (let i = 0; i < listObjs.length; i++) {
  console.log(listObjs[i]);
  console.log(listObjs[i].size);
  console.log(listObjs[i].priceAdpt);

  let packPriceObj1= document.createElement ("option") // <option></option>
  packPriceObj1.innerHTML= listObjs[i].size // <option>hello</option>
  packPriceObj1.value=listObjs[i].priceAdpt
  packSize.appendChild(packPriceObj1) // <select name="glazing" class="Dropdowns" id="glazingDropdown" onchange="glazingChange(this)" ><option>hello</option></select>
}

// this is  my original unclean code Hyunsung said I could comment out. it helps me understand how the for loops work visually 
// let glazingOpt1= document.createElement ("option") // <option></option>
// glazingOpt1.innerHTML= "Keep Original" // <option>hello</option>
// glazingOpt1.value=0.00
// glaze.appendChild(glazingOpt1) // <select name="glazing" class="Dropdowns" id="glazingDropdown" onchange="glazingChange(this)" ><option>hello</option></select>

// let glazingOpt2= document.createElement ("option") 
// glazingOpt2.innerHTML= "Sugar Milk" 
// glaze.appendChild(glazingOpt2)

// let glazingOpt3= document.createElement ("option") 
// glazingOpt3.innerHTML= "Vanilla Milk" 
// glaze.appendChild(glazingOpt3)

// let glazingOpt4= document.createElement ("option") 
// glazingOpt4.innerHTML= "Double Chocolate" 
// glaze.appendChild(glazingOpt4)

// let packSz1= document.createElement ("option") // <option></option>
// packSz1.innerHTML= "1" // <option>hello</option>
// packSz1.value= 1
// packSize.appendChild(packSz1) // <select name="glazing" class="Dropdowns" id="glazingDropdown" onchange="glazingChange(this)" ><option>hello</option></select>

// let packSz2= document.createElement ("option") 
// packSz2.innerHTML= "3" 
// packSize.appendChild(packSz2)

// let packSz3= document.createElement ("option") 
// packSz3.innerHTML= "6" 
// packSize.appendChild(packSz3)

// let packSz4= document.createElement ("option") 
// packSz4.innerHTML= "12" 
// packSize.appendChild(packSz4)
//Anthony Teo really explained how to make my options in drop down in plain english. He really helped educate me in making element ids and the differences between innerHtml and and appendchild
// so i could have written 


function packSizeChange(element) {
  console.log('pack size change');
  const newPackPrice = parseFloat(element.value);
  console.log(newPackPrice);

  packPrice = newPackPrice
  calculateNewPrice();
}

function glazingChange(element) {
  console.log ("glazingChange");

  const newGlazingPrice = parseFloat(element.value);
  console.log(newGlazingPrice);

  glazingPrice = newGlazingPrice;
  calculateNewPrice();
}
  
function calculateNewPrice() { 
  let newPrice = (basePrice + glazingPrice) * packPrice
  console.log(newPrice);
  updateTotalPrice(newPrice);
} 

function updateTotalPrice(price) {
  console.log('update is called!!')
  let newItemPrice = document.getElementById("itemPrice");
  newItemPrice.innerText = "$" + price.toFixed(2);
}
// Napol helped me with the last 4 functions and explained how there's an empty box 
// and that to packPrice will equal newPackPrice and it will pull into the packPrice located in calculateNewPrice
// then newPrice will go into the updateTotalPrice box and in that function
// in that function it will take the new ItemPrice will be entered into the div itemPrice from HTML
// the newItemPrice.innerText has the string of $ and price which will be entered into that div
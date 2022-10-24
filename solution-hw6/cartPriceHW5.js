// Joy Mukherjee helped me with my coding homework and explained how to use a template and use a constructor for this homework. He also helped me set up an array 
// Rosie Ji helped me attach the images to my new code and helped with pricing 
// Anthony Teo helped me debug my code since my code total price wasn't updating. It was a syntax error

class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
      this.type = rollType;
      this.glazing =  rollGlazing;
      this.size = packSize;
      this.basePrice = basePrice;
  }
}

let sizeToPriceAdaption = {
  1:1,
  3:3,
  6:5,
  12:10
}

let glazingToPriceAdaption = {
  "Keep Original":0,
  "Sugar Milk": 0,
  "Vanilla Milk":0.5,
  "Double Chocolate":1.50
}

//cart = [];

let sweets = new Set(); 
let localCart = localStorage.getItem('cart');
if(localCart) sweets = new Set(Array.from(JSON.parse(localCart)));
// let roll1 = new Roll("Original", "Sugar Milk", 1, 2.49);
// let roll2 = new Roll("Walnut", "Vanilla Milk", 12, 3.49);
// let roll3 = new Roll("Raisin", "Sugar Milk", 3, 2.99);
// let roll4 = new Roll("Apple", "Keep Original", 3, 3.49);
let totalPrice= 0.0;

// sweets.add(roll1);
// sweets.add(roll2);
// sweets.add(roll3);
// sweets.add(roll4);
// cart.push(new Roll("Original", "Sugar Milk", 1, 2.49), new Roll("Walnut", "Vanilla Milk", 12, 3.49), new Roll("Raisin", "Sugar Milk", 3, 2.99), new Roll("Apple", "Original", 3, 3.49));
//console.log(cart);

function calculatePrice(basePrice, glazingPrice, packPrice){
  return((basePrice+glazingPrice)*packPrice);
}

function updating () {
  for (let shoppingCartObjects of sweets){
    // for(let i=0; i<cart.length; i++){
      let cartItem = document.getElementsByTagName("template")[0];
      let cartItemClone = cartItem.content.cloneNode(true);
      let cartClone= cartItemClone.querySelector(".cartItem1");
    
      cartClone.querySelector(".rollName").innerText = shoppingCartObjects.type + " Cinnamon Roll";
      cartClone.querySelector(".rollGlazing").innerText = "Glazing: " + shoppingCartObjects.glazing;
      cartClone.querySelector(".packSize").innerText = "Pack size: " + shoppingCartObjects.size;
      let finalPrice = calculatePrice(shoppingCartObjects.basePrice, glazingToPriceAdaption[shoppingCartObjects.glazing], sizeToPriceAdaption[shoppingCartObjects.size]);
      cartClone.querySelector(".rollPrice").innerText = "$" + finalPrice.toFixed(2);
      totalPrice = totalPrice +finalPrice; 
      document.querySelector(".price").innerText ="$" +parseFloat(totalPrice).toFixed(2);
    
    
      let image ="HW2/products/" + shoppingCartObjects.type.toLowerCase() + "-cinnamon-roll.jpg";
      cartClone.querySelector("#image1").src= image;
    
      document.querySelector(".cartContainer").appendChild(cartClone);
    
      const deleteBtn = cartClone.querySelector(".removeBtn");
      deleteBtn.addEventListener("click", () => {
        cartClone.remove();
        sweets.delete(shoppingCartObjects);
        localStorage.setItem('cart', JSON.stringify(Array.from(sweets)));
        console.log(sweets);
        calculateTotal();  
      })
}; 

  
  // document.querySelector(".shoppingCart").appendChild(cartClone)

  function calculateTotal() {
    let totalPrice =0;
    for(let shoppingCartObjects of sweets){
      let finalPrice = calculatePrice(shoppingCartObjects.basePrice, glazingToPriceAdaption[shoppingCartObjects.glazing], sizeToPriceAdaption[shoppingCartObjects.size]);
      totalPrice =totalPrice +finalPrice;
    }
    document.querySelector(".price").innerText = "$ " + parseFloat(totalPrice).toFixed(2);

    console.log(totalPrice);
  }

}
updating(sweets);


// const deleteBtn =document.querySelector(".removeBtn");
// function removeCard(deleteBtn) {
//   deleteBtn.remove();
// }
// deleteBtn.addEventListener("click", removeCard)
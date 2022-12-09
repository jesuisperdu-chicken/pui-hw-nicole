// class Bag {
//     constructor(bagType) {
//         this.type = bagType;
//     }
//   }

// let bag = [];
// let localBag = localStorage.getItem('bag');
// if(localBag) bag = Array.from(JSON.parse(localBag));


const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const bagType = params.get("bag");


let bag = bags [bagType]
console.log (bag)
console.log (bagType)

document.querySelector(".bagName h2").innerText=  bagType ;
document.querySelector("#bagInfo").innerText= bag.bagHistory; 
document.querySelector("#image1").src =  bag.imageFile ;
document.querySelector("#image7").src = bag.imageFile2 ;
document.querySelector(".BagPopCultureRef").innerText = bag.BagPopCultureRef
document.querySelector("#image4").src = bag.imageFile3


// need to match up with the html 
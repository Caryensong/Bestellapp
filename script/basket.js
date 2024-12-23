let isTotalAmountAdded = false;

function addDishesToBasket(index) {
   getDishesValuefromContent(index);
 }
 
 function getDishesValuefromContent(index) {
   let basketRef = document.getElementById("fillOrderListBasket");
   let startRef = document.getElementById("startBasketBeforAdd");
 
   if (basketRef.innerHTML !== "") {
     startRef.innerHTML = "";
   }
 
   getDishesToMyBasketArr(index);
 
   if(!isTotalAmountAdded) {
      getTotalStart(index);
      isTotalAmountAdded = true;
   } else{
     getTotalPrice();
   }
 }
 
 function getDishesToMyBasketArr(arr) {
   let basketOrderRef = document.getElementById("OrderListBasket");
   let dish = myDishes[arr].name;
   let basketArr = myBasket.findIndex((item) => item.name === dish);
 
   if (basketArr === -1) {
     let dishCopy = { ...myDishes[arr] }; // einen kopie - original nicht verändert
     myBasket.push(dishCopy);
 
     let newArray = myBasket.length - 1;
     let addAmount = myBasket[newArray].amount;
     basketOrderRef.innerHTML += getOrderlistToBasektTemplate(newArray,addAmount);
   } else {
     let singlePrice = myBasket[basketArr].price;
     let startPrice = myDishes[arr].price;
 
     myBasket[basketArr].price = singlePrice + startPrice;
 
     let addAmount = (myBasket[basketArr].amount += 1);
 
     updateBasketItem(basketArr, addAmount);
   }
 }
 
 function updateBasketItem(index, addAmount){
   let basketItems = document.getElementById(`dishBasketListItem${index}`);
   if (addAmount === 0) {
    myBasket.splice(index, 1);
    basketItems.innerHTML = "";
    getTotalPrice();

  }else{
   basketItems.innerHTML = getOrderlistToBasektTemplate(index ,addAmount);
   getTotalPrice();
  }
 }
 
 function getTotalPrice(){
   let totalRef = document.getElementById("totalPayContent");
   let totalPrice = myBasket.reduce((sum, item) => sum + item.price, 0);
   totalRef.innerHTML = getTotalAmountTemplate(totalPrice);
 }
 
 function getTotalStart(i) {
   let basketRef = document.getElementById("totalPayContent");
   if (basketRef.innerHTML === "") {
     let newPrice = myDishes[i].price;
     basketRef.innerHTML = getTotalAmountTemplate(newPrice);
   }
 }
 
 function addAmount(basketArr) {
   updateBasketPrice(basketArr);
 
   let addAmount = (myBasket[basketArr].amount += 1);
 
   updateBasketItem(basketArr, addAmount);
 }
 
 function minusAmount(basketArr) {
   updateBasketPriceMinus(basketArr);
   
   if (myBasket[basketArr].amount > 1) {
      let addAmount = (myBasket[basketArr].amount -= 1);
      updateBasketItem(basketArr, addAmount);
   } else{
      let deletAmount = 0;
      updateBasketItem(basketArr, deletAmount);
   }
 }
 
 function updateBasketPrice(basketArr) {
   for (let arr = 0; arr < myDishes.length; arr++) {
     if (myDishes[arr].name === myBasket[basketArr].name) {
       let singlePrice = myBasket[basketArr].price;
       let startPrice = myDishes[arr].price;
 
       myBasket[basketArr].price = singlePrice + startPrice;
       break;
     }
   }
 }
 
 function updateBasketPriceMinus(basketArr) {
   for (let arr = 0; arr < myDishes.length; arr++) {
     if (myDishes[arr].name === myBasket[basketArr].name) {
       let singlePrice = myBasket[basketArr].price;
       let startPrice = myDishes[arr].price;
 
       myBasket[basketArr].price = singlePrice - startPrice;
       break;
     }
   }
 }
 
 function totalUpdate(){
 
 }
 
 function removeAllAmount(index) {
 }
 
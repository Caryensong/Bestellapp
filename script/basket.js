let isTotalAmountAdded = false;

function addDishesToBasket(index){
  let selectetDish = myDishes[index];

  let newAmount = selectetDish.amount += 1;
  selectetDish.total = selectetDish.amount * selectetDish.price;
  
  getUpdateBasketDisplay(index, newAmount);
}

function getUpdateBasketDisplay(index, amount){
  let basketRef = document.getElementById("fillOrderListBasket");
  let startRef = document.getElementById("startBasketBeforAdd");
  if (basketRef.innerHTML !== "") {
     startRef.innerHTML = "";
  }

  getDishesToMyBasket(index, amount);

  if(!isTotalAmountAdded) {
    getTotalStart(index);
    isTotalAmountAdded = true;
  } else{
    updateTotalPrice();
  }
}

function getTotalStart(i) {
     let basketRef = document.getElementById("totalPayContent");
     if (basketRef.innerHTML === "") {
       let newPrice = myDishes[i].total;
       basketRef.innerHTML = getTotalAmountTemplate(newPrice);
     }
   }

function updateTotalPrice(){
    let totalRef = document.getElementById("totalPayContent");
    let totalPrice = myDishes.reduce((sum, item) => sum + item.total, 0);
    totalRef.innerHTML = getTotalAmountTemplate(totalPrice);
}

function getDishesToMyBasket(index, amount){
  let basketOrderRef = document.getElementById("OrderListBasket");
  let basketItems = document.getElementById(`dishBasketListItem${index}`);
  let selectedDish = myDishes[index];

  if(selectedDish.amount === 1 ){
    basketOrderRef.innerHTML += getOrderlistToBasektTemplate(index, amount);
  } 
  else if(selectedDish.amount === 0){
    if(basketItems) basketItems.remove();
  }
  else{
    if (basketItems) {
         basketItems.innerHTML = getOrderlistToBasektTemplate(index, amount);
    }
  }
}

function addAmount(basketArr) {
  addDishesToBasket(basketArr);
 }

function minusAmount(basketArr) {
  let selectetDish = myDishes[basketArr];

  if ( selectetDish.amount > 1 ) {
     let newAmount = selectetDish.amount -= 1;
     selectetDish.total = selectetDish.amount * selectetDish.price;

     UpdateMinusBasketDisplay(basketArr, newAmount);
  } else{
    let deletAmount =selectetDish.amount -= 1;
    selectetDish.total = selectetDish.amount * selectetDish.price;
    UpdateMinusBasketDisplay(basketArr, deletAmount);
   }
   updateTotalPrice();
 }

function UpdateMinusBasketDisplay(index, amount){
  let basketOrderRef = document.getElementById("OrderListBasket");
  let basketItems = document.getElementById(`dishBasketListItem${index}`);
  let selectedDish = myDishes[index];

  if(selectedDish.amount >= 1 ){
    basketItems.innerHTML = getOrderlistToBasektTemplate(index, amount);
  } 
  else if (selectedDish.amount === 0){
    if(basketItems) basketItems.remove();
  } else {
console.log("err")
  }
}

function removeAllAmount(){

}

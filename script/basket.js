let isTotalAmountAdded = false;

function addDishesToBasket(index){
  let selectetDish = myDishes[index];

  let newAmount = selectetDish.amount += 1;
  selectetDish.total = selectetDish.amount * selectetDish.price;
  
  getUpdateBasketDisplay();
  UpdateBasketDisplay(index, newAmount);
  showDishesAmountInBasket();
}

function getUpdateBasketDisplay(){
  let startRef = document.getElementById("startBasketBeforAdd");
  startRef.innerHTML= "";
}

function UpdateBasketDisplay(index, amount){
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
     }else{
      basketRef.innerHTML = "";
     }
}

function updateTotalPrice(){
    let startRef = document.getElementById("startBasketBeforAdd");
    let totalRef = document.getElementById("totalPayContent");
    let totalPrice = myDishes.reduce((sum, item) => sum + item.total, 0);
    if(totalPrice === 0){
      totalRef.innerHTML = "";
      startRef.innerHTML += renderBasketTemplate();
    }else{
    totalRef.innerHTML = getTotalAmountTemplate(totalPrice);
  }
  showDishesAmountInBasket();
}

function getDishesToMyBasket(index, amount){
  let basketOrderRef = document.getElementById("OrderListBasket");
  let basketItems = document.getElementById(`dishBasketListItem${index}`);
  let selectedDish = myDishes[index];

  if(selectedDish.amount === 1 ){
    basketOrderRef.innerHTML += getOrderlistToBasektTemplate(index, amount);
  } else if (selectedDish.amount === 0){
    if(basketItems) basketItems.remove();
  } else {
    if (basketItems) {
         basketItems.innerHTML = getOrderlistToBasektTemplate(index, amount);
    }
  }
}

function addAmount(basketArr) {
  addDishesToBasket(basketArr);
 }

function minusAmount(basketArr) {
  let selectedDish = myDishes[basketArr];
  if ( selectedDish.amount > 1 ) {
     let newAmount = selectedDish.amount -= 1;
     selectedDish.total = selectedDish.amount * selectedDish.price;

     UpdateMinusBasketDisplay(basketArr, newAmount);
  } else {
    let deletAmount = selectedDish.amount -= 1;
    selectedDish.total = selectedDish.amount * selectedDish.price;
    UpdateMinusBasketDisplay(basketArr, deletAmount);
   }
   updateTotalPrice();
 }

function UpdateMinusBasketDisplay(index, amount){
  let basketItems = document.getElementById(`dishBasketListItem${index}`);
  let selectedDish = myDishes[index];

  if(selectedDish.amount >= 1 ){
    basketItems.innerHTML = getOrderlistToBasektTemplate(index, amount);
  } 
  else if (selectedDish.amount === 0){
    if(basketItems) basketItems.remove();
    getUpdateBasketDisplay();
  } else {
    console.log("err")
  }
}

function removeAllAmount(index){
  let basketItems = document.getElementById(`dishBasketListItem${index}`);
  let selectedDish = myDishes[index];
  selectedDish.amount = 0;
  selectedDish.total = 0;

  basketItems.remove();
  updateTotalPrice();
}

function addPayButton(){
  let dialogContent = document.getElementById("dialogAfterPayBtn");
  let basketOrderRef = document.getElementById("OrderListBasket");
  let totalPrice = myDishes.reduce((sum, item) => sum + item.total, 0);
  let totalAmount = myDishes.reduce((sum, item) => sum + item.amount, 0);
  
  dialogContent.innerHTML = getDialogTemplate(totalPrice, totalAmount);

  myDishes.forEach(item => {
    item.amount = 0;
    item.total = 0;
});

  basketOrderRef.innerHTML ="";
  getTotalStart();
  updateTotalPrice();
  showDishesAmountInBasket();

  setTimeout(() => {
    dialogContent.innerHTML = "";
}, 3000);
}


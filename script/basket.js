let isTotalAmountAdded = false;

function addDishesToBasket(index){
  let selectetDish = myDishes[index];

  let newAmount = selectetDish.amount += 1;
  selectetDish.total = selectetDish.amount * selectetDish.price;
  
  getUpdateBasketDisplay();
  UpdateBasketDisplay(index, newAmount);
}

function getUpdateBasketDisplay(){
  let basketRef = document.getElementById("fillOrderListBasket");
  let startRef = document.getElementById("startBasketBeforAdd");
  let endRef = document.getElementById("endBasketRemoveAll");

  if (myDishes.some((dish) => dish.amount > 0)) {
    if (startRef) startRef.innerHTML = ""; // Start-Nachricht ausblenden
    if (endRef) endRef.innerHTML = ""; // End-Nachricht ausblenden
} else{
  if (startRef) {
    startRef.innerHTML = `
      <div class="start_basket">
        <img src="./assets/icon/basket_black.png" alt="Warenkorb Symbol" />
        <h3>Fülle deinen Warenkorb</h3>
        <p>
          Füge einige leckere Gerichte aus der Speisekarte hinzu und
          bestelle dein Essen.
        </p>
      </div>`;
  }
}
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
     }
}

function updateTotalPrice(){
    let totalRef = document.getElementById("totalPayContent");
    let basketRef = document.getElementById("fillOrderListBasket");
    let totalPrice = myDishes.reduce((sum, item) => sum + item.total, 0);
    if(totalPrice === 0){
      basketRef.innerHTML = "";
    }else{
    totalRef.innerHTML = getTotalAmountTemplate(totalPrice);
  }
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
  getUpdateBasketDisplay();
}

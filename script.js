let isTotalAmountAdded = false;

function init() {
  render();
}

function render() {
  let contentOrderRef = document.getElementById("OrderListContent");
  contentOrderRef.innerHTML = "";

  for (let i = 0; i < myDishesHeadline.length; i++) {
    contentOrderRef.innerHTML += getHeadlineTemplate(i);

    let dishesForCategory = getDishesForCategory(
      myDishesHeadline[i].categoryName
    );

    for (let j = 0; j < dishesForCategory.length; j++) {
      let dish = dishesForCategory[j];

      let globalIndex = findDishIndex(dish.name);

      contentOrderRef.innerHTML += getDishTemplate(dish, globalIndex);
    }
  }
}

function getDishesForCategory(category) {
  const categoryMapping = {
    Nudelgerichte: [
      "Spagetti Napoli",
      "Spagetti Cabonara",
      "Vegetarische Lasange",
    ],
    Pizza: [
      "Pizza Margherita",
      "Pizza Funghi",
      "Pizza Spinaci",
      "Pizza Italia",
    ],
    Getränke: [
      "Hausgemachte Limonade",
      "Himbeer-Limonade",
      "Rote-Bete-Limonade",
    ],
  };
  const dishesForCategory = categoryMapping[category];
  return myDishes.filter((dish) => dishesForCategory.includes(dish.name));
}

function findDishIndex(dishName) {
  for (let i = 0; i < myDishes.length; i++) {
    if (myDishes[i].name === dishName) {
      return i;
    }
  }
}

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

  if (!isTotalAmountAdded) {
    addTotalAmount();
    isTotalAmountAdded = true;
  }
}

function getDishesToMyBasketArr(arr) {
  let basketOrderRef = document.getElementById("OrderListBasket");
  let dish = myDishes[arr].name;
  let basketArr = myBasket.findIndex((item) => item.name === dish);

  if (basketArr === -1) {
    let dishCopy = { ...myDishes[arr] }; // einen kopie - originalen nicht verändere
    myBasket.push(dishCopy);

    let newArray = myBasket.length - 1;
    let addAmount = myBasket[newArray].amount;
    basketOrderRef.innerHTML += getOrderlistToBasektTemplate(
      newArray,
      addAmount
    );
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
  if (basketItems) {
    basketItems.innerHTML = getOrderlistToBasektTemplate(index ,addAmount);
  }
}

function addTotalAmount() {
  let basketRef = document.getElementById("totalPayContent");
  if (basketRef.innerHTML === "") {
    basketRef.innerHTML = getTotalAmountTemplate();
  }
}

function addAmount(basketArr) {
  updateBasketPrice(basketArr);

  let addAmount = (myBasket[basketArr].amount += 1);

  updateBasketItem(basketArr, addAmount);
}

function minusAmount(basketArr) {
  updateBasketPriceMinus(basketArr);

  let addAmount = (myBasket[basketArr].amount -= 1);
  
  updateBasketItem(basketArr, addAmount);
}

function updateBasketPrice(basketArr) {
  for (let arr = 0; arr < myDishes.length; arr++) {
    if (myDishes[arr].name === myBasket[basketArr].name) {
      let singlePrice = myBasket[basketArr].price;
      let startPrice = myDishes[arr].price;

      myBasket[basketArr].price = singlePrice + startPrice;
    }
  }
}

function updateBasketPriceMinus(basketArr) {
  for (let arr = 0; arr < myDishes.length; arr++) {
    if (myDishes[arr].name === myBasket[basketArr].name) {
      let singlePrice = myBasket[basketArr].price;
      let startPrice = myDishes[arr].price;

      myBasket[basketArr].price = singlePrice - startPrice;
    }
  }
}

function removeAllAmount() {}

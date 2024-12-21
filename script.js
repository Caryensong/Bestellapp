function init() {
  render();
}

function render() {
  let contentOrderRef = document.getElementById("OrderListContent");
  contentOrderRef.innerHTML = "";

  for (let i = 0; i < myDishesHeadline.length; i++) {
    contentOrderRef.innerHTML += getHeadlineTemplate(i);

    let dishesForCategory = getDishesForCategory(myDishesHeadline[i].categoryName);

      for(let j =0; j < dishesForCategory.length; j++) {
      let dish = dishesForCategory[j];

      let globalIndex = findDishIndex(dish.name);

      contentOrderRef.innerHTML += getDishTemplate(dish, globalIndex);
    }
  }
}

function getDishesForCategory(category) {
  const categoryMapping = {
    Nudelgerichte: ["Spagetti Napoli","Spagetti Cabonara","Vegetarische Lasange",],
    Pizza: ["Pizza Margherita","Pizza Funghi","Pizza Spinaci","Pizza Italia",],
    Getränke: ["Hausgemachte Limonade","Himbeer-Limonade","Rote-Bete-Limonade",],
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

 let isTotalAmountAdded = false; 
 
function addDishesToBasket(index) {
  let basketRef = document.getElementById("fillOrderListBasket");
  let startRef = document.getElementById("startBasketBeforAdd");

  if (basketRef.innerHTML !== ""){
    startRef.innerHTML = "";
  }

  basketRef.innerHTML += getOrderlistToBasektTemplate(index);

  if (!isTotalAmountAdded) {
    addTotalAmount();
    isTotalAmountAdded = true;
  }
}

function addTotalAmount(){
  let basketRef = document.getElementById("fillOrderListBasket");
  basketRef.innerHTML += getTotalAmountTemplate();

}

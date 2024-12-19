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
   //  for (dish of dishesForCategory) {
   //    contentOrderRef.innerHTML += getDishTemplate(dish );
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
   return -1; // -1 zurückgeben, wenn kein Gericht gefunden wurde
 }

 
function addDishesToBasket(index) {
   let dish = myDishes[index];
  let basketRef = document.getElementById("fillOrderListBasket");
  basketRef.innerHTML += getOrderlistToBasekt(index);
}

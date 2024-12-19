function init() {
   render();
}

function render() {
   let contentOrderRef = document.getElementById("OrderListContent");
   contentOrderRef.innerHTML = "";

   for (let i = 0; i < myDishesHeadline.length; i++) {
      contentOrderRef.innerHTML += getHeadlineTemplate(i);
   
   let dishesForCategory = getDishesForCategory(myDishesHeadline[i].categoryName);
   for (dish of dishesForCategory)
      contentOrderRef.innerHTML += getDishTemplate(dish);
   }
}

function getDishesForCategory(category){
   const categoryMapping = {
      "Nudelgerichte": ["Spagetti Napoli", "Spagetti Cabonara", "Vegetarische Lasange"],
      "Pizza": ["Pizza Margherita", "Pizza Funghi", "Pizza Spinaci", "Pizza Italia"],
      "Getränke": ["Hausgemachte Limonade", "Himbeer-Limonade", "Rote-Bete-Limonade"]
   };

   const dishesForCategory = categoryMapping[category];
   return myDishes.filter(dish => dishesForCategory.includes(dish.name));
}

function addDishesToBasket(dish){
   let basketRef = document.getElementById('fillOrderListBasket');
   basketRef.innerHTML += getOrderlistToBasekt(dish);
}
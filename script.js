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

function getHeadlineTemplate(i) {
   return `
      <div class="category">
         <img class="header_img" src="./assets/img/${myDishesHeadline[i].img}" />
         <h3>${myDishesHeadline[i].categoryName}</h3>
      </div>`;
}


function getDishTemplate(dish) {
   return `
      <div class="order_list">
         <img class="add_icon" src="./assets/icon/add.png" />
         <div class="dish_info">
            <h4>${dish.name}</h4>
            <p>${dish.descirption}</p>
            <p class="price">${dish.price.toFixed(2)} Euro</p>
         </div>
      </div>`;
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
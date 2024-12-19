function getHeadlineTemplate(i) {
   return `
    <div id="categoryList${i}">
         <img class="header_img" src="./assets/img/${myDishesHeadline[i].img}" />
         <h3>${myDishesHeadline[i].categoryName}</h3>
      </div>`;
}


function getDishTemplate(dish) {
   return `
      <div onclick="addDishesToBasket(${dish})"  class="order_list">
         <img class="add_icon" src="./assets/icon/add.png" />
         <div class="dish_info">
            <h4>${dish.name}</h4>
            <p>${dish.descirption}</p>
            <p class="price">${dish.price.toFixed(2).replace(".",",")} Euro</p>
         </div>
      </div>`;
}

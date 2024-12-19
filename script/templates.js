function getHeadlineTemplate(i) {
   return `
    <div id="categoryList${i}">
         <img class="header_img" src="./assets/img/${myDishesHeadline[i].img}" />
         <h3>${myDishesHeadline[i].categoryName}</h3>
      </div>`;
}

function getDishTemplate(dish) {
   return `
       <div onclick="addDishesToBasket(${dish})" class="order_list">
         <img class="add_icon" src="./assets/icon/add.png" />
         <div class="dish_info">
            <h4>${dish.name}</h4>
            <p>${dish.description}</p>
            <p class="price">${dish.price.toFixed(2).replace(".",",")} Euro</p>
         </div>
      </div>`;
}

function getOrderlistToBasekt(dish){
   retrun `
          <div class="orderlist_bar">
              <span>${dish.name}</span>
              <span>${dish.price.toFixed(2).replace(".",",")} Euro</span>
            </div>

         <div class="add_removebar">
              <span> Anmerkungen hinzufügen</span>
              <div class="order_basket">
                <button class="remove_btn">
                  <p>-</p>
                </button>
                <span>2</span>
                <button class="add_btn">
                  <p>+</p>
                </button>
               </div> 
            </div>
            <div class="bar_line"></div>
   `
}
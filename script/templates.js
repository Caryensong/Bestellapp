function getHeadlineTemplate(i) {
   return `
    <div id="categoryList${i}">
         <img class="header_img" src="./assets/img/${myDishesHeadline[i].img}" />
         <h3>${myDishesHeadline[i].categoryName}</h3>
      </div>`;
}

function getDishTemplate(dish, globalIndex) {
   return `
      <div onclick="addDishesToBasket(${globalIndex})" class="order_list">
         <img class="add_icon" src="./assets/icon/add.png" />
         <div class="dish_info">
            <h4>${dish.name}</h4>
            <p>${dish.description}</p>
            <p class="price">${dish.price.toFixed(2).replace(".",",")} Euro</p>
         </div>
      </div>`;
}

function getOrderlistToBasekt(index){
   return `
         <div class="orderlist_bar">
              <span>${myDishes[index].name}</span>
              <span>${myDishes[index].price.toFixed(2).replace(".",",")} Euro</span>
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

         <div class="sum padding-top">
            <span>Zwischensumme</span>
             <span>20 Euro</span>
          </div>
          <div class="sum">
            <span>Lieferkosten</span>
            <span>4,50 Euro</span>
         </div>
         <div class="bar_line"></div>
         <div class="sum">
            <span>Gesamt</span>
            <span>20 Euro</span>
         </div>

          <div class="pay_buttombar">
            <button class="pay_buttom">
              <p>Bezahlen (29,80Euro)</p>
            </button>
          </div>
   `
}
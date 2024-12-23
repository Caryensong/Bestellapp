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

function getOrderlistToBasektTemplate(index, amount){
   return `<div id="dishBasketListItem${index}">
         <div class="orderlist_bar">
              <span>${myBasket[index].name}</span>
              <span>${myBasket[index].price.toFixed(2).replace(".",",")} Euro</span>
         </div>

         <div class="add_removebar">
            <span> Anmerkungen hinzufügen</span>
            <div class="order_basket">
               <button onclick="minusAmount(${index})" id="minusAmount${index}" class="remove_btn">
                  <p>-</p>
               </button>
               <span id="amountDish"> ${amount} </span>
               <button onclick="addAmount(${index})" id="addAmount${index}" class="add_btn">
                  <p>+</p>
               </button>
            </div> 
            <button onclick="removeAllAmount(${index})" id="removeAllAmount${index}" class="add_btn"><img src="./assets/icon/trash.png" alt="trash"> </button>
         </div>
         </div>
   `
}

function getTotalAmountTemplate(){
   return `
     <div class="">
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
    </div>
   `
}
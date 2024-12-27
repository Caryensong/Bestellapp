function getHeadlineTemplate(i) {
   return `
    <div id="categoryList${i}" >
         <img class="header_img" src="./assets/img/${myDishesHeadline[i].img}" />
         <h3 class="category">${myDishesHeadline[i].categoryName}</h3>
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

function renderBasketTemplate(){
return `
   <div class="start_basket">
      <img src="./assets/icon/basket_black.png" />
               <h3>Fülle dein Warebkorb</h3>
               <p>
                 Füge einige leckere Gerichte aus der Speisekarte hinzu und
                 bestelle dein Essen.
               </p>
   </div>
             `;
 }

function getOrderlistToBasektTemplate(index, amount){
   return `
      <div id="dishBasketListItem${index}">
         <div class="orderlist_bar">
              <span>${myDishes[index].name}</span>
              <span>${myDishes[index].total.toFixed(2).replace(".",",")} Euro</span>
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

function getTotalAmountTemplate(amount){
   return `
     <div class="">
       <div class="sum padding-top">
         <span>Zwischensumme</span>
         <span>${amount.toFixed(2).replace(".",",")} Euro</span>
      </div>
      <div class="sum">
         <span>Lieferkosten</span>
         <span>4,50 Euro</span>
      </div>
      <div class="bar_line"></div>
      <div class="sum">
         <span>Gesamt</span>
         <span>${(amount + 4.5).toFixed(2).replace(".",",")} Euro</span>
      </div>

      <div onclick="addPayButton()"  class="pay_buttombar">
         <button class="pay_buttom">
            <p>Bezahlen (${(amount + 4.5).toFixed(2).replace(".",",")} Euro)</p>
         </button>
      </div>
    </div>
   `
}

function getDialogTemplate(totalPrice, totalAmount){
   return `<dialog open>
          <div class="time">35 min</div>
          <h2 class="thx_text">Vielen Dank für Ihre Bestellung!</h2>  
          <p>Sie haben <span class="pay_text">${totalAmount} Bestellung</span>
          , und der Gesamtbetrag beträgt <span class="pay_text">${(totalPrice + 4.5).toFixed(2).replace(".",",")} Euro</span>.</p>
          Wir machen uns sofort an die Zubereitung!  
        </dialog> `
}

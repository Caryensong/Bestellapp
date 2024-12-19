function init(){
render();
}


function render() {
   let contentOrderRef = document.getElementById("orderlistContentPasta");
   contentOrderRef.innerHTML = "";

   for(let i = 0; i < myDishes.length; i++){
      contentOrderRef.innerHTML += getOrderlistContentTemplate(i);
   }
}

function getOrderlistContentTemplate(i){
   return `   <div id="orderlistContentPizza" class="order_list" >
   <h4>${myDishes[i].name}</h4>
              <p>${myDishes[i].descirption}</p>
              <p class="price">${myDishes[i].price.toFixed(2)} €</p>
              </div>
   `
}
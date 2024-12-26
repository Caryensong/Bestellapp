const navbar = document.getElementById('navbar');
const stickyPoint = navbar.offsetTop; // Position der Navbar speichern


if (navbar) {
  window.onscroll = function () {
    if (window.scrollY >= stickyPoint) {
      navbar.classList.add('sticky'); // Sticky aktivieren
    } else {
      navbar.classList.remove('sticky'); // Sticky deaktivieren
    }
  };
} 

function positionScreen() {
   const categoryPasta = document.getElementById('categoryList0'); 
   const categoryPizza = document.getElementById('categoryList1'); 
   const categoryDrinks = document.getElementById('categoryList2'); 
   const navLinkPasta = document.getElementById('linkPasta');
   const navLinkPizza = document.getElementById('linkPizza');
   const navLinkDrinks = document.getElementById('linkDrinks');
   
   const navLinks = [navLinkPasta, navLinkPizza, navLinkDrinks];
   navLinks.forEach(link => link.classList.remove('active'));
   
   const scrollPosition = window.scrollY + window.innerHeight; 

   if (scrollPosition >= categoryDrinks.offsetTop + 500) {
       navLinkDrinks.classList.add('active');
   } else if (scrollPosition >= categoryPizza.offsetTop + 700) {
       navLinkPizza.classList.add('active');
   } else if (scrollPosition >= categoryPasta.offsetTop) {
       navLinkPasta.classList.add('active');
   }
}

window.addEventListener('scroll', positionScreen);

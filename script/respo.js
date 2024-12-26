const navbar = document.getElementById('navbar');

if (navbar) {
  const stickyPoint = navbar.offsetTop; // Position der Navbar speichern

  window.onscroll = function () {
    if (window.scrollY >= stickyPoint) {
      navbar.classList.add('sticky'); // Sticky aktivieren
    } else {
      navbar.classList.remove('sticky'); // Sticky deaktivieren
    }
  };
} 

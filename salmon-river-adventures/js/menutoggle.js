
   const hambutton = document.querySelector (".ham");
   hambutton.addEventListener ("click", toggleMenu, false);

   function toggleMenu() {
      document.querySelector("nav-menu").classList.toggle("responsive");
   }
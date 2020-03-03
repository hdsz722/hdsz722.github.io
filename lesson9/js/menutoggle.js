
   const hambutton = document.querySelector (".ham");
   hambutton.addEventListener ("click", toggleMenu, false);

   function toggleMenu() {
      document.querySelector(".design-doc-menu").classList.toggle("responsive");
   }
/* Defining Table
* Input: A person's name
* Processing: Create a verse of scripture for that person
* Output: The Scripture
*/

   var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   var daysShort = ["Sun", "Mon", "Tue", "Wed", "Thursday", "Fri", "Sat"];
   var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

   let d = new Date();
   let oYear = d.getFullYear();
   let oCurrentDate = days[d.getDay()] + ", " + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
   let oForeDateOne = daysShort[d.getDay()] + " " + [d.getDate()+1];
   let oForeDateTwo = daysShort[d.getDay()] + " " + [d.getDate()+2];
   let oForeDateThree = daysShort[d.getDay()] + " " + [d.getDate()+3];
   let oForeDateFour = daysShort[d.getDay()] + " " + [d.getDate()+4];
   let oForeDateFive = daysShort[d.getDay()] + " " + [d.getDate()+5];
   document.getElementById("todaydate").textContent = oCurrentDate;
   document.getElementById("forecast1").textContent = oForeDateOne;
   document.getElementById("forecast2").textContent = oForeDateTwo;
   document.getElementById("forecast3").textContent = oForeDateThree;
   document.getElementById("forecast4").textContent = oForeDateFour;
   document.getElementById("forecast5").textContent = oForeDateFive;
   document.getElementById("copyrite").textContent = oYear;

   const hambutton = document.querySelector (".ham");
   hambutton.addEventListener ("click", toggleMenu, false);

   function toggleMenu() {
      document.querySelector(".design-doc-menu").classList.toggle("responsive");
   }
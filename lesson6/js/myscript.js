/* Defining Table
* Input: A person's name
* Processing: Create a verse of scripture for that person
* Output: The Scripture
*/

   var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   var daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
   var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

   let d = new Date();
   let d1 = new Date();
   let d2 = new Date();
   let d3 = new Date();
   let d4 = new Date();
   let d5 = new Date();
   let d6 = new Date();
   d2.setDate(d.getDate()+1);
   d3.setDate(d2.getDate()+1);
   d4.setDate(d3.getDate()+1);
   d5.setDate(d4.getDate()+1);
   d6.setDate(d5.getDate()+1);
   let oYear = d.getFullYear();
   let oCurrentDate = days[d.getDay()] + ", " + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
   let oForeDateOne = daysShort[d2.getDay()] + " " + [d2.getDate()];
   let oForeDateTwo = daysShort[d3.getDay()] + " " + [d3.getDate()];
   let oForeDateThree = daysShort[d4.getDay()] + " " + [d4.getDate()];
   let oForeDateFour = daysShort[d5.getDay()] + " " + [d5.getDate()];
   let oForeDateFive = daysShort[d6.getDay()] + " " + [d6.getDate()];
   document.getElementById("todaydate").textContent = oCurrentDate;
   document.getElementById("forecast1").textContent = oForeDateOne;
   document.getElementById("forecast2").textContent = oForeDateTwo;
   document.getElementById("forecast3").textContent = oForeDateThree;
   document.getElementById("forecast4").textContent = oForeDateFour;
   document.getElementById("forecast5").textContent = oForeDateFive;
   document.getElementById("copyrite").textContent = oYear;

   switch (d.getDay()) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 6:
         document.getElementById("bannermessage").style.display = "none";
         break;
      case 5:
         document.getElementById("bannermessage").style.display = "block";
         break;
   }

   const hambutton = document.querySelector (".ham");
   hambutton.addEventListener ("click", toggleMenu, false);

   function toggleMenu() {
      document.querySelector(".design-doc-menu").classList.toggle("responsive");
   }
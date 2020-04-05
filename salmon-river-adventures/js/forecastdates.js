// calculating dates

   var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   var daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
   var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

   let d1 = new Date();
   let d2 = new Date();
   let d3 = new Date();
   let d4 = new Date();
   let d5 = new Date();
   let d6 = new Date();
   d2.setDate(d1.getDate()+1);
   d3.setDate(d2.getDate()+1);
   d4.setDate(d3.getDate()+1);
   d5.setDate(d4.getDate()+1);
   d6.setDate(d5.getDate()+1);
   let oForeDateOne = daysShort[d2.getDay()] + " " + [d2.getDate()];
   let oForeDateTwo = daysShort[d3.getDay()] + " " + [d3.getDate()];
   let oForeDateThree = daysShort[d4.getDay()] + " " + [d4.getDate()];
   let oForeDateFour = daysShort[d5.getDay()] + " " + [d5.getDate()];
   let oForeDateFive = daysShort[d6.getDay()] + " " + [d6.getDate()];
   document.getElementById("day1").textContent = oForeDateOne;
   document.getElementById("day2").textContent = oForeDateTwo;
   document.getElementById("day3").textContent = oForeDateThree;
   document.getElementById("day4").textContent = oForeDateFour;
   document.getElementById("day5").textContent = oForeDateFive;
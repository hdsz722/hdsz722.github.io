// calculating dates

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let d = new Date();
let oYear = d.getFullYear()
let oCurrentDate = days[d.getDay()] + ", " + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();

document.getElementById("todaydate").textContent = oCurrentDate;
document.getElementById("copywrite").textContent = oYear;
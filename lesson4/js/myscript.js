/* Defining Table
* Input: A person's name
* Processing: Create a verse of scripture for that person
* Output: The Scripture
*/

   let oLastModif = new Date(document.lastModified);
   document.getElementById("lastupdated").textContent = oLastModif;

   let d = new Date();
   let oYear = d.getFullYear();
   document.getElementById("copyrite").textContent = oYear;
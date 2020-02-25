
   let oLastModif = new Date(document.lastModified);
   let modDate = oLastModif.getMonth() + "." + oLastModif.getDate() + "." + oLastModif.getFullYear();

   document.getElementById("lastcompiled").textContent = modDate;
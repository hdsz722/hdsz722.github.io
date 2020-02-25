
   let oLastModif = new Date(document.lastModified);
   let modDate = oLastModif.getMonth() + "." + oLastModif.getDate() + "." + oLastModif.getFullYear();

   document.getElementById("lastCompiled").textContent = modDate;
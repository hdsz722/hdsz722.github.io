
   let oLastModif = new Date(document.lastModified);
   const modDate = oLastModif.getMonth() + " " + oLastModif.getDate() + " " + oLastModif.getFullYear();
   document.getElementById("lastupdated").textContent = modDate;
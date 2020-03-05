const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const prophets = jsonObject['prophets'];
 
        console.table(jsonObject); //temporary checking for valid response and data parsing
        for (let i = 0; i < prophets.length; i++ ) {        
//        }); (let i=0; i <prophets.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');          
            let h4 = document.createElement('h4');
            let image = document.createElement('img');

            let fullname = prophets[i].name + ' ' + prophets[i].lastname;

            h2.textContent = fullname;
            h3.textContent = 'Date of Birth: ' + prophets[i].birthdate;
            h4.textContent = 'Place of Birth: '+ prophets[i].birthplace;
            image.setAttribute('src', prophets[i].imageurl);
            image.setAttribute('alt', 'portrait of ' + fullname);
        
            card.appendChild(h2);
            card.appendChild(h3);
            card.appendChild(h4);
            card.appendChild(image);
         
            document.querySelector('div.cards').appendChild(card);
        }
    });




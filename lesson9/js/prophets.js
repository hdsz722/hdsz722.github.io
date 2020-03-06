const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const prophets = jsonObject['prophets'];
 
        console.table(jsonObject); //temporary checking for valid response and data parsing
        for (let i = 0; i < prophets.length; i++ ) {        
            let card = document.createElement('section');
            let cardName = document.createElement('h2');
            let cardDate = document.createElement('p');          
            let cardPlace = document.createElement('p');
            let image = document.createElement('img');

            let fullname = prophets[i].name + ' ' + prophets[i].lastname;

            
            cardName.textContent = fullname;
            cardDate.textContent = 'Date of Birth: ' + prophets[i].birthdate;
            cardPlace.textContent = 'Place of Birth: '+ prophets[i].birthplace;
            image.setAttribute('src', prophets[i].imageurl);
            image.setAttribute('alt', 'portrait of ' + fullname);
        
            card.appendChild(cardName);
            card.appendChild(cardDate);
            card.appendChild(cardPlace);
            card.appendChild(image);
         
            document.querySelector('.cards').appendChild(card);
        }
    });




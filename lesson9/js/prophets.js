const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const prophets = jsonObject['prophets'];

        console.table(jsonObject); //temporary checking for valid response and data parsing
        for (let i=0; i <prophets.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');          
            let h4 = document.createElement('h4');
            let img = document.createElement('img');

            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            h3.textContent = 'Date of Birth: ' + prophets[i].birthdate;
            h4.textContent = 'Place of Birth: ' + prophets[i].birthplace;
//            img = image.setAttribute('src', prophets[i].imageurl);

            card.appendChild(h2);
            card.appendChild(h3);
            card.appendChild(h4);
            card.appendChild(img);
        
            document.querySelector('div.cards').appendChild(card);
        };
    });




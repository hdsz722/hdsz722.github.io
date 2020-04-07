const guideURL = 'https://byui-cit230.github.io/salmon-river-adventures/data/guides.json';

fetch(guideURL)
    .then(function(response) {
        return response.json();
    })

    .then(function(jsonObject) {
        const guides = jsonObject['guides']

//        console.log(towns); //temporary checking for valid response and data parsing

        guides.forEach(guide => {
            let rivGuide=document.createElement('div');
            let guideName=document.createElement('h3');
            let certLabel=document.createElement('p');
            let guideCerts=document.createElement('p');
            let guideExperience=document.createElement('p');
            let guideEmail=document.createElement('p');
            let bioLabel=document.createElement('p');
            let guideBio=document.createElement('p');
            let image=document.createElement('img');
            let guideQuote=document.createElement('p');

            guideName.textContent = guide.name;
            guideName.setAttribute('class', "guide-name");
            certLabel.textContent = 'Certifications:';
            guideCerts.textContent = guide.certification;
            guideCerts.setAttribute('class', 'guide-certs');
            guideExperience.textContent = 'Experience: ' + guide.experience;
            guideExperience.setAttribute('class', "guide-experience");
            guideEmail.textContent = 'Email: ' + guide.email;
            guideEmail.setAttribute('class', "guide-email");
            bioLabel.textContent = 'Biography:';
            guideBio.textContent = guide.biography;
            guideBio.setAttribute('class', "guide-bio");
            image.setAttribute('src', 'images/' + guide.photo);
            image.setAttribute('alt', 'photo of ' + guide.name);
            guideQuote.textContent = ('Words to live by: ' + guide.quote);
            guideQuote.setAttribute('class', "guide-quote");

            rivGuide.appendChild(guideName);
            rivGuide.appendChild(certLabel);
            rivGuide.appendChild(guideCerts);
            rivGuide.appendChild(guideExperience);
            rivGuide.appendChild(guideEmail);
            rivGuide.appendChild(bioLabel);
            rivGuide.appendChild(guideBio);
            rivGuide.appendChild(image);
            rivGuide.appendChild(guideQuote);

            document.querySelector('.guide-container').appendChild(rivGuide);
    
        });
    })

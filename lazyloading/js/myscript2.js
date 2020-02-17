
let imagesToLoad = document.querySelectorAll('img[data-src');

if('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if(item.isIntersecting) {
        loadImages(item.target);
        console.log(item.target)
        observer.unobserve(item.target);
      }
    });
  });

  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
      image.removeAttribute('data-src');
  };
};



/*const images = document.querySelectorAll('img[data-src]');
  function preloadImage(img) {
  const src=img.getAttribute("src");
  if(!src) {return;}
  
  img.src = src;
}

const imgOptions = {
  threshold: 1,
  rootMargin: "0px 0px -300px 0px"
};

const imgObserver = new IntersectionObserver(function(entries, imgObserver) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
        console.log(entry.target);
        preloadImage(entry.target);
        imgObserver.unobserve(entry.target); 
    }
  })
}, imgOptions);

images.forEach(image => {
  imgObserver.observe(image);
}); */
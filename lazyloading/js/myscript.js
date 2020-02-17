const images = document.querySelectorAll("src");

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
/*        imgObserver.unobserve(entry.target); */
    }
  })
}, imgOptions);

images.forEach(image => {
  imgObserver.observe(image);
});
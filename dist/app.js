const backgroundElement = document.querySelector('.bg');
// JSON data for images

let images = [{
    "url": "./dist/images/bgImage1.jpg",
},
{
    "url": "./dist/images/bgImage2.jpg",
}]

// rotating background based on images in json
let currentImage = 0;

function changeBackground() {
    let image = images[currentImage];
    backgroundElement.style.backgroundImage = `url(${image.url})`;
    currentImage = (currentImage + 1) % images.length;
}

setInterval(changeBackground, 30000);
changeBackground();
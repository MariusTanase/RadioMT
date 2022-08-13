const backgroundElement = document.querySelector('.bg');



// styles for background
backgroundElement.style.backgroundSize = "cover";
backgroundElement.style.backgroundPosition = "center";
backgroundElement.style.backgroundRepeat = "no-repeat";
backgroundElement.style.backgroundSize = "cover";
backgroundElement.style.position = 'absolute';
backgroundElement.style.top = '0';
backgroundElement.style.left = '0';
backgroundElement.style.width = '100%';
backgroundElement.style.height = '100vh';
backgroundElement.style.zIndex = '-1';


// JSON data for images

let images = [{
    "url": "../../images/bgImage1.jpg",
},
{
    "url": "../../images/bgImage2.jpg",
}]

// rotating background based on images in json
let currentImage = 0;

function changeBackground() {
    let image = images[currentImage];
    backgroundElement.style.background = "url(" + image.url + ")";
    currentImage = (currentImage + 1) % images.length;
}

setInterval(changeBackground, 30000);
changeBackground();
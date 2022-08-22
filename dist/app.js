const backgroundElement = document.querySelector('.bg');
// JSON data for images

let images = [{
        "url": "./dist/images/bgImage1.jpg",
    },
    {
        "url": "./dist/images/bgImage2.jpg",
    },
    {
        "url": "./dist/images/bgImage3.jpg",
    }
]

// Selecting values from the options form and storing them in variables, from variables we select the values to be equal to the objects parameters in the json file and then we use the values to play a playlist from soundcloud in the background that can be manipulated by the user in audio player that is made in the html file.
let playlist = [{
    genre: "deephouse",
    src: "http://live.dancemusic.ro:7000/stream?type=http&nocache=339198"
}, {
    genre: "ibiza",
    src: "https://ssl1.viastreaming.net:7005/;listen.mp3"
}, {
    genre: "dancehall",
    src: "http://pulseedm.cdnstream1.com:8124/1373_128"
}, {
    genre: "chill",
    src: "http://95.211.3.65:8805/stream/1/"
}, {
    genre: "techno",
    src: "http://51.89.195.240:8034/stream/1/"
}];

// selecting the value from options form and storing it in a variable from select
let select = document.getElementsByTagName('select')[0];

// Update the select value with the value from option
function updateSelect() {
    select = document.getElementsByTagName('select')[0].value;
    changeAudioPlayer(select)
}

// Event listener in the select element to update the select value
select.addEventListener("change", updateSelect);

// Change Audio Player src to the value of the select element from the playlist array


let audioPlayer = document.querySelector('.player');

// compare the select value with the genre value from the playlist array and if they are equal then change the audio player src to the src value from the playlist array
function changeAudioPlayer(select) {
    for (let i = 0; i < playlist.length; i++) {
        if (select == playlist[i].genre) {
            audioPlayer.src = playlist[i].src;
        }
    }
}




// rotating background based on images in json
let currentImage = 0;
// function to rotate images
function changeBackground() {
    let image = images[currentImage];
    // set the background image to the image url from the json file
    backgroundElement.style.backgroundImage = `url(${image.url})`;
    // if the current image is equal to the length of the images array then set the current image to 0
    currentImage = (currentImage + 1) % images.length;
}
// set the interval to change the background image every 30 seconds - Dev Enviroment
setInterval(changeBackground, 30000);
// Initial run of the changeBackground function to set the background image to the first image
changeBackground();


// Audio Elements

const player = document.querySelector('.player');
const playButton = document.querySelector('.play-pause');
const muteButton = document.querySelector('.volume-muted');
const volumeBar = document.querySelector('.slider');

// set the volume to the value of the slider
volumeBar.addEventListener('input', function () {
    player.volume = volumeBar.value;
});

// play the audio player when the play button is clicked and pause the audio player when the pause button is clicked
playButton.addEventListener('click', function () {
    if (player.paused) {
        player.play();
        playButton.classList.remove('fa-play');
        playButton.classList.add('fa-square');
    } else {
        player.pause();
        playButton.classList.remove('fa-square');
        playButton.classList.add('fa-play');
    }
});

// mute the audio player when the mute button is clicked and unmute the audio player when the unmute button is clicked
muteButton.addEventListener('click', function () {
    if (player.muted !== true) {
        player.muted = true;
        muteButton.classList.remove('fa-volume-up');
        muteButton.classList.add('fa-volume-mute');
    } else {
        player.muted = false;
        muteButton.classList.remove('fa-volume-mute');
        muteButton.classList.add('fa-volume-up');
    }
});

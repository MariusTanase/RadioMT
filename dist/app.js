// Variables
let selectRadio = document.querySelectorAll('.select__radio')[0];
let selectChoice = document.querySelectorAll('#intervalSetting')[0];
let interval;
// Dropdown menu for settings
const settingsButton = document.querySelector('.settings__button');
const settingsMenu = document.querySelector('.settings');
// Audio Elements
const player = document.querySelector('.player');
const playButton = document.querySelector('.play-pause');
const muteButton = document.querySelector('.volume-muted');
const volumeBar = document.querySelector('.slider');
const backgroundElement = document.querySelector('.bg');
// Selecting the radio player
let audioPlayer = document.querySelector('.player');

//   JSON
let images = [{
        "url": "./dist/images/bgImage1.jpg",
    },
    {
        "url": "./dist/images/bgImage2.jpg",
    },
    {
        "url": "./dist/images/bgImage3.jpg",
    }
];

let playlist = [{
        genre: "Deep House",
        src: "https://live.dancemusic.ro:7000/stream"
    }, {
        genre: "Ibiza House",
        src: "https://ssl1.viastreaming.net:7005/;listen.mp3"
    }, {
        genre: "Dancme Hall",
        src: "https://pulseedm.cdnstream1.com:8124/1373_128"
    }, {
        genre: "Chill",
        src: "https://95.211.3.65:8805/stream/1/"
    }, {
        genre: "Techno",
        src: "https://51.89.195.240:8034/stream/1/"
    },
    {
        genre: 'Dance UK',
        src: 'https://uk2.internet-radio.com/proxy/danceradiouk?mp=/stream'
    },
    {
        genre: 'Dance UK 2',
        src: 'https://uk6.internet-radio.com:8332/listen.pls'
    },
    {
        genre: 'Deep House 2',
        src: 'https://91.121.175.25:8000/stream/1/'
    },
    {
        genre: 'Music Factory',
        src: 'https://i4.streams.ovh:9000/stream/1/'
    }
];


// Toggle the settings menu
settingsButton.addEventListener('click', function () {
    settingsMenu.classList.toggle('active');
});

// compare the select value with the genre value from the playlist array and if they are equal then change the audio player src to the src value from the playlist array
function changeAudioPlayer(select) {
    for (let i = 0; i < playlist.length; i++) {
        if (select == playlist[i].genre) {
            player.src = playlist[i].src;
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

// Update the select value with the value from option
function updateRadioSelector() {
    selectRadio = document.querySelectorAll('.select__radio')[0].value;
    changeAudioPlayer(selectRadio)
}

// Update the background based on the time chosen in the settings menu
function updateBackgroundInterval() {
    selectChoice = document.querySelectorAll('#intervalSetting')[0].value;
    changeBackgroundInterval(selectChoice);
}
// change the background interval based on the value from the settings menu
function changeBackgroundInterval(selectChoice) {
    clearInterval(interval);
    interval = setInterval(changeBackground, selectChoice);
}

// Create Option Element in the .select__radio class
function createOptionElement() {
    for (let i = 0; i < playlist.length; i++) {
        let option = document.createElement('option');
        option.value = playlist[i].genre;
        option.innerHTML = playlist[i].genre;
        selectRadio.appendChild(option);
    }
}

// default volume for the audio player
player.volume = 0.4;

// set the volume to the value of the slider
volumeBar.addEventListener('change', () => {
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

// EVENT LISTENERS
selectRadio.addEventListener("change", updateRadioSelector);
selectChoice.addEventListener("change", updateBackgroundInterval);

// Function calls
changeBackground();
updateBackgroundInterval();
createOptionElement();

// ParticleJS
particlesJS.load('particles-js', 'particles.json', function () {
    return;
});
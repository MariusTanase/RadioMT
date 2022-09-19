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

let playlist = [
    {
        genre: "Ibiza House",
        src: "https://ssl1.viastreaming.net:7005/;listen.mp3"
    }, {
        genre: "Virgin Radio Romania",
        src: "https://astreaming.edi.ro:8443/VirginRadio_aac"
    }, {
        genre: "KSS FM Deep",
        src: "https://streams.radio.co/sdc9cfaf77/listen"
    }, {
        genre: "Capital FM",
        src: "https://media-ssl.musicradio.com/CapitalMP3"
    },
    {
        genre: 'Dance UK',
        src: 'https://uk2.internet-radio.com/proxy/danceradiouk?mp=/stream'
    },
    {
        genre: 'Pro FM Romania',
        src: 'https://edge126.rcs-rds.ro/profm/profm.mp3#W'
    },
    {
        genre: 'Deep House',
        src: 'https://91.121.175.25:8000/stream/1/'
    },
    {
        genre: 'Music Factory',
        src: 'https://i4.streams.ovh/sc/musicfactory/stream'
    }
];




// -----------------FUNCTIONS OF THE APP-----------------

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
// function to rotate images with a fade effect on change from one image to another
function changeBackground() {
    if (currentImage >= images.length) {
        currentImage = 0;
    }
    backgroundElement.style.backgroundImage = `url(${images[currentImage].url})`;
    currentImage++;
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

// -----------------EVENT LISTENERS-----------------

// default volume for the audio player
player.volume = 0.4;

// set the volume to the value of the slider
volumeBar.addEventListener('change', () => {
    player.volume = volumeBar.value;
});

// check if status 200 then play the audio 
player.addEventListener('canplay', function () {
    player.play();
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

// Toggle the settings menu
settingsButton.addEventListener('click', function () {
    settingsMenu.classList.toggle('active');
});

// Update the select value with the value from option
selectRadio.addEventListener("change", updateRadioSelector);
selectChoice.addEventListener("change", updateBackgroundInterval);

// -----------------FUNCTION CALLS-----------------

changeBackground();
updateBackgroundInterval();
createOptionElement();

// -----------------PARTICLE JS FUNCTION LOAD-----------------

particlesJS.load('particles-js', 'particles.json', function () {
    return;
});
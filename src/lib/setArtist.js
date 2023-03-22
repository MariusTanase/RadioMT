function setArtist(artist) {
    document.querySelector('#artist').textContent = artist;
}

function setRadio(radio) {
    document.querySelector('audio').src = radio;
}

function setRadioName(radioName) {
    document.querySelector('.title').textContent = radioName;
}

function setRadioImage(radioImage, radioName, genre) {
    let image = document.querySelector('.radio-image').src = radioImage;
    image.alt = `${radioName} - with the genre ${genre} image`
}

function startRadio() {
    document.querySelector('audio').play();
}

function stopRadio() {
    document.querySelector('audio').pause();
}

function setGenre(genre) {
    document.querySelector('.genre').textContent = genre;
}

function setRadioVolume(volume) {
    document.querySelector('audio').volume = volume;
}



export default {setArtist, setRadio, setRadioName, setRadioImage, startRadio, stopRadio, setGenre, setRadioVolume};
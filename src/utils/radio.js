function setArtist(artist) {
    document.querySelector('.artist').textContent = artist;
}

function setRadio(radio) {
    document.querySelector('audio').src = radio;
}

function setRadioName(radioName) {
   return document.querySelector('.title').textContent = radioName;
}

function setRadioImage(radioImage, radioName) {
    document.querySelector('.artwork').src = radioImage;
    document.querySelector('.artwork').alt = `Image of ${radioName}`;
}

function startRadio() {
    document.querySelector('audio').play();
}

function stopRadio() {
    document.querySelector('audio').pause();
}

function setGenre(genre) {
    document.querySelector('.artist').textContent = `Genre: ${genre}`;
}

function setRadioVolume(volume) {
    document.querySelector('audio').volume = volume;
}



export { setArtist, setRadio, setRadioName, setRadioImage, startRadio, stopRadio, setGenre, setRadioVolume };
function setRadio(radio) {
    document.querySelector('audio').src = radio;
}

function setRadioName(radioName) {
   document.querySelector('.title').textContent = radioName;
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

function setRadioGenre(genre) {
    document.querySelector('.genre').textContent = `Genre: ${genre}`;
}

function setRadioVolume(volume) {
    document.querySelector('audio').volume = volume;
    return volume;
    // move the bar to the right position
}



export {setRadio, setRadioName, setRadioImage, startRadio, stopRadio, setRadioGenre, setRadioVolume };
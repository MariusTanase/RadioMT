function setArtist(artist) {
    document.querySelector('#artist').textContent = artist;
}

function setRadio(radio) {
    document.querySelector('audio').src = radio;
}

function setRadioName(radioName) {
    document.querySelector('.title').textContent = radioName;
}

export default {setArtist, setRadio, setRadioName};
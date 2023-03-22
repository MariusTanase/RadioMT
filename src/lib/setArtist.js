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

export default {setArtist, setRadio, setRadioName};
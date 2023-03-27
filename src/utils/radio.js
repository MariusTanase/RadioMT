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
    let playAudio = document.querySelector('audio').play();

    if (playAudio !== undefined) {
        playAudio.then(_ => {
            // Automatic playback started!
            // Show playing UI.
            console.log('Audio playing...');
        })
        .catch(error => {
            // Auto-play was prevented
            // Show paused UI.
            console.log('Audio paused...');
        });
    }
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
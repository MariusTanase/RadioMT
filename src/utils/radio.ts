function setRadio(radio: string): void {
    document.querySelector('audio').src = radio;
}

function setRadioName(radioName: string): void {
    document.querySelector('.title').textContent = radioName;
}

function setRadioImage(radioImage: string, radioName: string) {
    document.querySelector('.artwork').src = radioImage;
    document.querySelector('.artwork').alt = `Image of ${radioName}`;
}

async function startRadio(): Promise<void> {
    try {
        await document.querySelector('audio').play();
        console.log('Audio playing...')
    } catch (error) {
        console.error(error);
        console.log('Audio paused...')
    }
}

function stopRadio(): void {
    document.querySelector('audio').pause();
}

function setRadioGenre(genre: string): void {
    document.querySelector('.genre').textContent = `Genre: ${genre}`;
}

function setRadioVolume(volume: number): void {
    document.querySelector('audio').volume = volume;
    return volume;
    // move the bar to the right position
}



export { setRadio, setRadioName, setRadioImage, startRadio, stopRadio, setRadioGenre, setRadioVolume };
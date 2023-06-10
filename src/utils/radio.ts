function setRadio(radio: string): void {
    // @ts-ignore
    document.querySelector('audio').src = radio;
}

function setRadioName(radioName: string): void {
    // @ts-ignore
    document.querySelector('.title').textContent = radioName;
}

function setRadioImage(radioImage: string, radioName: string) {
    // @ts-ignore
    document.querySelector('.artwork').src = radioImage;
    // @ts-ignore
    document.querySelector('.artwork').alt = `Image of ${radioName}`;
}

async function startRadio(): Promise<void> {
    try {
        // @ts-ignore
        await document.querySelector('audio').play();
        console.log('Audio playing...')
    } catch (error) {
        console.log('Audio paused...')
    }
}

function stopRadio(): void {
    // @ts-ignore
    document.querySelector('audio').pause();
}

function setRadioGenre(genre: string): void {
    // @ts-ignore
    document.querySelector('.genre').textContent = `Genre: ${genre}`;
}

function setRadioVolume(volume: number): number {
    // @ts-ignore
    document.querySelector('audio').volume = volume;
    return volume;
    // move the bar to the right position
}



export { setRadio, setRadioName, setRadioImage, startRadio, stopRadio, setRadioGenre, setRadioVolume };
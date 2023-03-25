const randomImageFromUnsplash = () => {
    fetch('https://source.unsplash.com/random/3840x2160/?wallpaper,landscape').then(res => {
        background.current.style.backgroundImage = `url(${res.url})`
    })
    .catch(err => {
        console.log(err)
    });
}

export default randomImageFromUnsplash;
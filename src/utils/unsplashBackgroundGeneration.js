const generateImage = (args) => {
    fetch(`https://source.unsplash.com/random/3840x2160/?${args}`).then(res => {
        document.querySelector('.background').style.backgroundImage = `url(${res.url})`
    })
    .catch(err => {
        console.log(err)
    });
}

export { generateImage }
const generateImage = async (args: string) => {
    try {
      const res = await fetch(`https://source.unsplash.com/random/3840x2160/?${args}`);
      document.querySelector('.background').style.backgroundImage = `url(${res.url})`;
    } catch (error) {
      console.error(error);
    }
  };
  
  export { generateImage };
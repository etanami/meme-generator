import { useState } from "react";
import memesData from "../memesData";

const Meme = () => {

  const [memeImage, setMemeImage] = useState({
    topText: "",
    bottomText: "",
    randomImage: ""
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function handleChange(event) {
    const {name, value} = event.target;

    setMemeImage(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor( Math.random() * memesArray.length );
    const url = memesArray[randomNumber].url; 

    setMemeImage(prevArray => ({
      ...prevArray,
      randomImage: url
    }));
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top Text" name="topText" value={memeImage.topText} className="form--input" onChange={handleChange} />
        <input type="text" placeholder="Bottom Text" name="bottomText" value={memeImage.bottomText} className="form--input" onChange={handleChange} />
        <button className="form--button" onClick={getMemeImage}>Get a new meme image  🖼</button>
      </div>
      <div className="meme">
        <img src={memeImage.randomImage} alt="Meme" className="meme--image" />
        <h2 className="meme--text top">{memeImage.topText}</h2>
        <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
      </div>
    </main>
  )
}

export default Meme;